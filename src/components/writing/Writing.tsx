import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi';
import { useTranslation } from 'react-i18next';
import styles from './Writing.module.scss';

const Writing = () => {
  const { t } = useTranslation();

  return (
    <section
      className={styles.section}
      id="writing"
      aria-labelledby="writing-title"
    >
      <div className={styles.heading}>
        <p className={styles.eyebrow}>{t('writing.eyebrow')}</p>
        <h2 id="writing-title">{t('writing.title')}</h2>
      </div>
      <a
        className={styles.article}
        href="https://habr.com/ru/companies/bft/articles/898278/"
        target="_blank"
        rel="noreferrer"
      >
        <div className={styles.article_icon}>
          <FiBookOpen aria-hidden="true" />
        </div>
        <div className={styles.article_copy}>
          <span className={styles.meta}>
            {t('writing.publication')} <span>·</span> {t('writing.date')}{' '}
            <span>·</span> {t('writing.readTime')}
          </span>
          <h3>{t('writing.articleTitle')}</h3>
          <p>{t('writing.description')}</p>
          <span className={styles.read_link}>
            {t('writing.readArticle')} <FiArrowUpRight aria-hidden="true" />
          </span>
        </div>
        <span className={styles.article_arrow} aria-hidden="true">
          <FiArrowUpRight />
        </span>
      </a>
    </section>
  );
};

export default Writing;
