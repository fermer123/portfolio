import {
  FiArrowDown,
  FiArrowUpRight,
  FiDownload,
  FiMapPin,
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import styles from './Home.module.scss';

const Home = ({ onGenerateResume }: { onGenerateResume: () => void }) => {
  const { t } = useTranslation();

  return (
    <section className={styles.hero} id="home" aria-labelledby="hero-title">
      <div className={styles.copy}>
        <div className={styles.eyebrow}>
          <span className={styles.availability} />
          {t('home.eyebrow')} <span className={styles.separator}>/</span>{' '}
          {t('home.specialties')}
        </div>
        <h1 id="hero-title">
          {t('home.titleFirst')}
          <br />
          {t('home.titleSecond')}
          <span className={styles.period}>.</span>
        </h1>
        <p className={styles.intro}>{t('home.intro')}</p>
        <div className={styles.location}>
          <FiMapPin aria-hidden="true" /> {t('home.location')}
        </div>
        <div className={styles.actions}>
          <a className={styles.primary_action} href="#experience">
            {t('home.explore')} <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            className={styles.secondary_action}
            type="button"
            onClick={onGenerateResume}
          >
            <FiDownload aria-hidden="true" /> {t('home.download')}
          </button>
        </div>
        <a className={styles.scroll_hint} href="#about">
          <FiArrowDown aria-hidden="true" /> {t('home.scroll')}
        </a>
      </div>
    </section>
  );
};

export default Home;
