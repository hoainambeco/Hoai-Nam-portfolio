import { PROFILE } from '../data/profile';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <p>
          © {new Date().getFullYear()} {PROFILE.name}
        </p>
        <a href="#top">Back to top</a>
      </div>
    </footer>
  );
}
