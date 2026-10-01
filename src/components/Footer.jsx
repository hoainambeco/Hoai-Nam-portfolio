import { useI18n } from '../lib/i18n';

export default function Footer() {
  const { t, data } = useI18n();

  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <p>
          © {new Date().getFullYear()} {data.PROFILE.name}
        </p>
        <a href="#top">{t.backToTop}</a>
      </div>
    </footer>
  );
}
