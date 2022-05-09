import style from './Home.module.scss';
import img from '../../png/src/png/src/png/img2.jpg';
import Buttons from '../button/button';
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id
          quos deserunt, maxime sint sunt tempore quidem ad praesentium itaque,
          aspernatur, magnam culpa iste adipisci?
        </p>
      </h2>

      <Buttons />
    </div>
  );
};

export default Home;
