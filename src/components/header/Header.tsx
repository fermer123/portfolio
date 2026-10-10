import { FiArrowUpRight } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';
import styles from './Header.module.scss';

const Header = () => {
  const { t } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language;
  const nextLanguage = language === 'ru' ? 'en' : 'ru';

  const switchLanguage = () => {
    i18n.changeLanguage(nextLanguage);
    try {
      localStorage.setItem('portfolio-language', nextLanguage);
    } catch {
      // The language switch still works when browser storage is unavailable.
    }
  };

  return (
    <header className={styles.header}>
      <a
        className={styles.brand}
        href="#home"
        aria-label={t('header.homeLabel')}
      >
        <span className={styles.brand_mark}>IS</span>
        <span>Igor Smolin</span>
      </a>
      <nav className={styles.nav} aria-label={t('header.navigationLabel')}>
        <a href="#about">{t('header.about')}</a>
        <a href="#experience">{t('header.experience')}</a>
        <a href="#expertise">{t('header.expertise')}</a>
        <a href="#writing">{t('header.writing')}</a>
      </nav>
      <div className={styles.actions}>
        <button
          className={styles.language_switch}
          type="button"
          onClick={switchLanguage}
          aria-label={t('header.switchLanguage')}
          title={t('header.switchLanguage')}
        >
          {nextLanguage.toUpperCase()}
        </button>
        <a className={styles.contact_link} href="#contact">
          {t('header.contact')} <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
};

export default Header;
