import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import About from '@/components/about/About';
import Contact from '@/components/contact/Contact';
import ForestBackdrop from '@/components/forest/ForestBackdrop';
import Header from '@/components/header/Header';
import Home from '@/components/home/Home';
import Qualifications from '@/components/qualifications/Qualifications';
import Writing from '@/components/writing/Writing';
import styles from './App.module.scss';

function App() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const title = t('meta.title');
    const description = t('meta.description');

    document.documentElement.lang = i18n.resolvedLanguage ?? 'en';
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', description);
  }, [i18n, i18n.resolvedLanguage, t]);

  return (
    <div className={styles.app}>
      <ForestBackdrop />
      <div className={styles.content}>
        <Header />
        <main>
          <Home />
          <About />
          <Qualifications />
          <Writing />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
