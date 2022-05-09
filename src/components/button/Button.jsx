import style from './Button.module.scss';
import index from '../../index.module.scss';

const Button = () => {
  return <div className={style.button_container + ' ' + index.container}></div>;
};

export default Button;
