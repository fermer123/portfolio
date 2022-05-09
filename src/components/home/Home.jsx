import style from './Home.module.scss';
import img from '../../png/img2.jpg';
import Button from '../button/Button';
import { BsMouse } from 'react-icons/bs';

const Home = () => {
  return (
    <div id='home' className={style.home_container}>
      <div className={style.logo}>
        <div className={style.hover_show}>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
        </div>

        <img src={img} alt='' />
      </div>

      <a href='#footer' className={style.scroll_down}>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className={style.scroll} />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          Frontend разработкой занимаюсь параллельно. Есть свои проекты на
          GitHub с использованием React, React-redux, redux toolkit, typescript,
          CSS/scss/styled-components. Разработка для меня - это больше чем
          работа, это хобби. Поэтому даже в нерабочее время люблю изучать новые
          технологии и писать свои проекты.
        </p>
      </h2>

      <Button />
    </div>
  );
};

export default Home;
