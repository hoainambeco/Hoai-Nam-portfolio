import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Work from './components/Work';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './lib/hooks';
import { LangContext, useLangState } from './lib/i18n';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const i18n = useLangState();

  return (
    <LangContext value={i18n}>
      <a className="skip-link" href="#main">
        {i18n.t.skip}
      </a>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Work />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </LangContext>
  );
}
