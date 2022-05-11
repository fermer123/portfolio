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

        <img className={style.main_img} src={img} alt='' />
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
          My name is Igor. I'm doing front end development. There are projects
          on GitHub using React, React-redux, reduxtoolkit, typescript,
          MaterialUi, bootstrap, css/scss/styled-components, webpack.
          Development for me is more than a job, it's a hobby. Therefore, even
          after hours, I like to study new technologies and write my own
          projects.
        </p>
      </h2>
      <Button />
    </div>
  );
};

export default Home;
