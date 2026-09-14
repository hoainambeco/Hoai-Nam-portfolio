export const cx = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(" ");

export const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
