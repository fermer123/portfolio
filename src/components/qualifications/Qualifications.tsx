import { FiCode, FiLayers, FiServer, FiTool } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import styles from './Qualifications.module.scss';

const icons = [FiCode, FiServer, FiLayers, FiTool];

const Qualifications = () => {
  const { t } = useTranslation();
  const groups = t('expertise.groups', { returnObjects: true });

  return (
    <section
      className={styles.section}
      id="expertise"
      aria-labelledby="expertise-title"
    >
      <div className={styles.heading}>
        <p className={styles.eyebrow}>{t('expertise.eyebrow')}</p>
        <h2 id="expertise-title">{t('expertise.title')}</h2>
        <p className={styles.intro}>{t('expertise.intro')}</p>
      </div>
      <div className={styles.groups}>
        {groups.map((group, index) => {
          const Icon = icons[index];

          return (
            <article className={styles.group} key={group.title}>
              <div className={styles.group_top}>
                <span className={styles.number}>0{index + 1}</span>
                <Icon className={styles.icon} aria-hidden="true" />
              </div>
              <h3>{group.title}</h3>
              <p>{group.summary}</p>
              <ul
                aria-label={t('expertise.skillsLabel', { title: group.title })}
              >
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Qualifications;
