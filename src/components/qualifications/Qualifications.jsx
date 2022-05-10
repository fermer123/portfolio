import style from './Qualifications.module.scss';

const Qualifications = () => {
  return (
    <div>
      <span className={style.qual_text}>My Qualifications</span>
      <div className={style.qual_container}>
        <div className={style.qual}>
          <div className={style.qual_content + ' ' + style.html}></div>
          <h1>html</h1>
        </div>
        <div className={style.qual}>
          <div className={style.qual_content + ' ' + style.css}></div>
          <h1>css</h1>
        </div>
        <div className={style.qual}>
          <div className={style.qual_content + ' ' + style.js}></div>
          <h1>javascript</h1>
        </div>
        <div className={style.qual}>
          <div className={style.qual_content + ' ' + style.react}></div>
          <h1>react</h1>
        </div>
        <div className={style.qual}>
          <div className={style.qual_content + ' ' + style.redux}></div>
          <h1>redux</h1>
        </div>
        <div className={style.qual}>
          <div className={style.qual_content + ' ' + style.scss}></div>
          <h1>scss</h1>
        </div>
        <div className={style.qual}>
          <div className={style.qual_content + ' ' + style.ts}></div>
          <h1>typescript</h1>
        </div>
        <div className={style.qual}>
          <div className={style.qual_content + ' ' + style.bs}></div>
          <h1>bootstrap</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
