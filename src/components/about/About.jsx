import style from './About.module.scss';
import index from '../../index.module.scss';
import Qualifications from '../qualifications/Qualifications';

const About = () => {
  return (
    <div id='about' className={index.container + ' ' + style.about_container}>
      <Qualifications />
    </div>
  );
};

export default About;
