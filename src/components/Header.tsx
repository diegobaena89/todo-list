import styles from './Header.module.css';
import Logo from '../assets/images/Logo.svg';

export function Header() {
  return (
    <div className={styles.header}>
      <img src={Logo} alt='Logo' />
    </div>
  );
}
