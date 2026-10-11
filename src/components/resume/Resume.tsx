import { FiArrowLeft, FiPrinter } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import styles from './Resume.module.scss';

type ResumeProps = { onClose: () => void };

const Resume = ({ onClose }: ResumeProps) => {
  const { t } = useTranslation();
  const roles = t('about.roles', { returnObjects: true });
  const education = t('about.education', { returnObjects: true });
  const groups = t('expertise.groups', { returnObjects: true });

  return (
    <main className={styles.page}>
      <nav className={styles.actions} aria-label={t('resume.actionsLabel')}>
        <button type="button" onClick={onClose}>
          <FiArrowLeft aria-hidden="true" /> {t('resume.back')}
        </button>
        <button type="button" onClick={() => window.print()}>
          <FiPrinter aria-hidden="true" /> {t('resume.savePdf')}
        </button>
      </nav>

      <article className={styles.document}>
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>{t('home.eyebrow')}</p>
            <h1>Igor Smolin</h1>
            <p className={styles.position}>{t('about.title')}</p>
          </div>
          <div className={styles.contacts}>
            <a href="mailto:nortfrost123@gmail.com">nortfrost123@gmail.com</a>
            <a href="https://github.com/fermer123/">github.com/fermer123</a>
            <a href="https://www.linkedin.com/in/smolin-igor-708478237/">
              linkedin.com/in/smolin-igor
            </a>
            <span>{t('home.location')}</span>
          </div>
        </header>

        <section className={styles.section}>
          <h2>{t('resume.profile')}</h2>
          <p>{t('about.summary')}</p>
        </section>

        <section className={styles.section}>
          <h2>{t('about.experienceTitle')}</h2>
          <div className={styles.roles}>
            {roles.map((role) => (
              <section className={styles.role} key={role.company}>
                <div className={styles.role_heading}>
                  <div>
                    <h3>{role.company}</h3>
                    <p>{role.role} · {role.location}</p>
                  </div>
                  <span>{role.period}</span>
                </div>
                <p>{role.description}</p>
                <ul>
                  {role.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
                {role.stack && (
                  <p className={styles.stack}>
                    <strong>{t('about.stackLabel')}:</strong> {role.stack.join(' · ')}
                  </p>
                )}
                {role.result && <p className={styles.result}>{role.result}</p>}
              </section>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('resume.skills')}</h2>
          <div className={styles.skills}>
            {groups.map((group) => (
              <p key={group.title}>
                <strong>{group.title}:</strong> {group.skills.join(' · ')}
              </p>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2>{t('about.educationTitle')}</h2>
          <div className={styles.education}>
            {education.map((item) => (
              <p key={`${item.degree}-${item.period}`}>
                <strong>{item.degree}, {item.period}</strong> · {item.program} · {item.institution}
              </p>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
};

export default Resume;
