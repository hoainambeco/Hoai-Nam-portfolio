import Link from "next/link";
import { Container } from "@/components/ui/container";

export default function NotFound() {
  return (
    <Container className="py-32 md:py-44">
      <p className="meta text-subtle">404</p>
      <h1 className="mt-4 text-heading font-medium">This page does not exist.</h1>
      <p className="mt-6 max-w-[48ch] text-lead text-muted">
        The link may be out of date. The case studies are all listed on the home page.
      </p>
      <Link href="/" className="link mt-10 inline-block">
        Go to the home page
      </Link>
    </Container>
  );
}
