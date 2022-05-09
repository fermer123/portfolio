import style from './Header.module.scss';
import index from '../../index.module.scss';
const Header = () => {
  return (
    <div id='home' className={(index.container, style.header_container)}>
      <h3>
        <p>
          I <span>`</span>m
        </p>
        Smolin Igor
        <h2>Fronted Developer</h2>
      </h3>
    </div>
  );
};

export default Header;
