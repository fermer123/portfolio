import { useTranslation } from 'react-i18next';
import styles from './About.module.scss';

const About = () => {
  const { t } = useTranslation();
  const roles = t('about.roles', { returnObjects: true });
  const education = t('about.education', { returnObjects: true });

  return (
    <section
      className={styles.section}
      id="about"
      aria-labelledby="about-title"
    >
      <div className={styles.about_intro}>
        <p className={styles.eyebrow}>{t('about.eyebrow')}</p>
        <h2 id="about-title">{t('about.title')}</h2>
        <p className={styles.summary}>{t('about.summary')}</p>
      </div>

      <div className={styles.experience} id="experience">
        <div className={styles.section_heading}>
          <div>
            <p className={styles.eyebrow}>{t('about.experienceEyebrow')}</p>
            <h2>{t('about.experienceTitle')}</h2>
          </div>
          <span className={styles.heading_note}>
            {t('about.experienceNote')}
          </span>
        </div>
        <div className={styles.timeline}>
          {roles.map((item) => (
            <article className={styles.role} key={item.company}>
              <div className={styles.role_meta}>
                <span className={styles.company}>{item.company}</span>
                <span className={styles.period}>{item.period}</span>
              </div>
              <div className={styles.role_content}>
                <h3>{item.role}</h3>
                <p className={styles.location}>{item.location}</p>
                <p className={styles.description}>{item.description}</p>
                <ul>
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                {item.stack && (
                  <div className={styles.stack}>
                    <span className={styles.stack_label}>
                      {t('about.stackLabel')}
                    </span>
                    <ul className={styles.stack_list}>
                      {item.stack.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {item.result && (
                  <span className={styles.result}>{item.result}</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.education}>
        <div>
          <p className={styles.eyebrow}>{t('about.educationEyebrow')}</p>
          <h2>{t('about.educationTitle')}</h2>
        </div>
        <div className={styles.education_items}>
          {education.map((item) => (
            <article key={`${item.degree}-${item.period}`}>
              <span className={styles.education_date}>{item.period}</span>
              <h3>{item.degree}</h3>
              <p>{item.program}</p>
              <span className={styles.institution}>{item.institution}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
