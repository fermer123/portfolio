import style from './Button.module.scss';
import index from '../../index.module.scss';

const Button = () => {
  return (
    <div className={style.button_container + ' ' + index.container}>
      <a href='#about' className={style.pri + ' ' + style.btn}>
        Learn more
      </a>
      <a href='#contact' className={style.sec + ' ' + style.btn}>
        Get it Touch
      </a>
    </div>
  );
};

export default Button;
