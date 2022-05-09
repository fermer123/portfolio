import style from './Nav.module.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { TiGroupOutline } from 'react-icons/ti';
import { BiMessageRoundedDots } from 'react-icons/bi';
import { BsArrowDownCircle } from 'react-icons/bs';
import { useState } from 'react';

const Nav = () => {
  const [state, setState] = useState(false);

  const toggle = (e) => {
    const arr = ['home', 'about', 'members', 'contact', 'footer'];
    console.log(e);
  };

  return (
    <div className={style.navigation}>
      <a href='#home'>
        <AiOutlineHome className={style.icon} />
      </a>
      <a href='#about'>
        <AiOutlineUser className={style.icon} />
      </a>
      <a href='#members'>
        <TiGroupOutline className={style.icon} />
      </a>
      <a href='#contact'>
        <BiMessageRoundedDots className={style.icon} />
      </a>
      <a href='#footer'>
        <BsArrowDownCircle className={style.icon} />
      </a>
    </div>
  );
};

export default Nav;
