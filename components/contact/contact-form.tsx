"use client";

import { useState } from "react";
import { cx } from "@/lib/cx";

type Field = "name" | "email" | "message";
type Values = Record<Field, string>;

const FIELDS: Field[] = ["name", "email", "message"];
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: Values): Record<Field, string | null> {
  const name = values.name.trim();
  const email = values.email.trim();
  const message = values.message.trim();
  return {
    name: name ? null : "Enter your name.",
    email: !email ? "Enter your email address." : EMAIL.test(email) ? null : "Enter an email address like name@company.com.",
    message: !message ? "Write a message." : message.length < 10 ? "Write at least 10 characters." : null,
  };
}

/**
 * GitHub Pages has no backend, so the form doesn't pretend to send anything:
 * once valid, it opens the visitor's email app with the message filled in.
 */
export function ContactForm({ to }: { to: string }) {
  const [values, setValues] = useState<Values>({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState<Record<Field, boolean>>({ name: false, email: false, message: false });
  const [opened, setOpened] = useState(false);

  const errors = validate(values);
  const shown = (field: Field) => (touched[field] ? errors[field] : null);

  const fieldProps = (field: Field) => ({
    id: `contact-${field}`,
    name: field,
    value: values[field],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setOpened(false);
    },
    onBlur: () => setTouched((t) => ({ ...t, [field]: true })),
    "aria-invalid": shown(field) ? true : undefined,
    "aria-describedby": shown(field) ? `contact-${field}-error` : undefined,
    className: cx(
      "mt-2 block w-full rounded-md border bg-raised px-3.5 py-3 text-base text-fg transition-colors focus:border-accent",
      shown(field) ? "border-danger" : "border-line-strong",
    ),
  });

  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    const firstInvalid = FIELDS.find((f) => errors[f]);
    if (firstInvalid) {
      const el = e.currentTarget.elements.namedItem(firstInvalid);
      if (el instanceof HTMLElement) el.focus();
      return;
    }

    const name = values.name.trim();
    const subject = `Hello from ${name}`;
    const body = `${values.message.trim()}\n\n${name}\n${values.email.trim()}`;
    window.location.assign(`mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setOpened(true);
  }

  return (
    <form noValidate onSubmit={submit} aria-labelledby="contact-form-title">
      <h3 id="contact-form-title" className="text-lg font-medium">
        Or write here
      </h3>
      <p className="mt-1 text-[0.9375rem] text-muted">This opens your email app with the message ready to send.</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-[0.9375rem]">
            Name
          </label>
          <input type="text" autoComplete="name" {...fieldProps("name")} />
          <FieldError field="name" message={shown("name")} />
        </div>
        <div>
          <label htmlFor="contact-email" className="text-[0.9375rem]">
            Email
          </label>
          <input type="email" autoComplete="email" inputMode="email" {...fieldProps("email")} />
          <FieldError field="email" message={shown("email")} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="contact-message" className="text-[0.9375rem]">
            Message
          </label>
          <textarea rows={6} {...fieldProps("message")} />
          <FieldError field="message" message={shown("message")} />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
        <button
          type="submit"
          className="inline-flex h-11 items-center rounded-md bg-fg px-5 text-[0.9375rem] font-medium text-bg transition-colors hover:bg-white"
        >
          Open in email app
        </button>
        <p role="status" className="text-sm text-muted">
          {opened && (
            <>
              Your email app should now have the message ready. Nothing opened? Write to{" "}
              <a href={`mailto:${to}`} className="link">
                {to}
              </a>
              .
            </>
          )}
        </p>
      </div>
    </form>
  );
}

function FieldError({ field, message }: { field: Field; message: string | null }) {
  if (!message) return null;
  return (
    <p id={`contact-${field}-error`} className="mt-2 text-sm text-danger">
      {message}
    </p>
  );
}
