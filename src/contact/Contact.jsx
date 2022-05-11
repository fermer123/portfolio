import style from './Contact.module.scss';
import index from '../index.module.scss';
import { GoMarkGithub } from 'react-icons/go';
import { BsTelegram } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
const Contact = () => {
  return (
    <div
      id='contact'
      className={style.contact_container + ' ' + index.container}
    >
      <h1>contact me</h1>
      <div className={style.contact_links}>
        <a
          href='https://github.com/fermer123/'
          className={style.contact + ' ' + style.git}
        >
          <GoMarkGithub className={style.icon} />
          <h2>
            Github<span>fermer123</span>
          </h2>
        </a>

        <a
          href='https://web.telegram.org/k/'
          className={style.contact + ' ' + style.telegram}
        >
          <BsTelegram className={style.icon} />
          <h2>
            Telegram<span>@smolin_i</span>
          </h2>
        </a>

        <a href='' className={style.contact + ' ' + style.linked}>
          <BsLinkedin className={style.icon} />
          <h2>
            LinkedIn<span>smolin-igor</span>
          </h2>
        </a>
      </div>
    </div>
  );
};

export default Contact;
