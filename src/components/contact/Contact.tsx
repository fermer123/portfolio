import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
} from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import styles from './Contact.module.scss';

const links = [
  {
    icon: FiMail,
    labelKey: 'contact.labels.email',
    value: 'nortfrost123@gmail.com',
    href: 'mailto:nortfrost123@gmail.com',
  },
  {
    icon: FiGithub,
    labelKey: 'contact.labels.github',
    value: 'fermer123',
    href: 'https://github.com/fermer123/',
  },
  {
    icon: FiLinkedin,
    labelKey: 'contact.labels.linkedin',
    value: 'smolin-igor',
    href: 'https://www.linkedin.com/in/smolin-igor-708478237/',
  },
  {
    icon: FiSend,
    labelKey: 'contact.labels.telegram',
    value: '@smolin_i',
    href: 'https://t.me/smolin_i',
  },
] as const;

const Contact = () => {
  const { t } = useTranslation();

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.top}>
        <div>
          <p className={styles.eyebrow}>{t('contact.eyebrow')}</p>
          <h2>
            {t('contact.titleFirst')}
            <br />
            {t('contact.titleSecond')}
          </h2>
        </div>
        <a className={styles.email_cta} href="mailto:nortfrost123@gmail.com">
          {t('contact.getInTouch')} <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
      <div className={styles.links}>
        {links.map(({ icon: Icon, labelKey, value, href }) => (
          <a
            key={labelKey}
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
          >
            <Icon aria-hidden="true" />
            <span>{t(labelKey)}</span>
            <strong>{value}</strong>
          </a>
        ))}
      </div>
      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Igor Smolin</span>
        <a href="#home">{t('contact.backToTop')}</a>
        <span>{t('contact.credit')}</span>
      </div>
    </footer>
  );
};

export default Contact;
