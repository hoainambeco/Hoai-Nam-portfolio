import { Container } from "@/components/ui/container";
import { profile, socials } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-8 py-12 md:grid-cols-12 md:items-end">
        <div className="md:col-span-5">
          <p className="font-medium">{profile.name}</p>
          <p className="text-muted">{profile.role}</p>
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[0.9375rem] md:col-span-4">
          {socials.map((s) => (
            <li key={s.id}>
              <a href={s.href} target="_blank" rel="noreferrer" className="link inline-block py-1">
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <a href={`mailto:${profile.email}`} className="link inline-block py-1">
              Email
            </a>
          </li>
        </ul>
        <p className="meta text-subtle md:col-span-3 md:text-right">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </Container>
    </footer>
  );
}
