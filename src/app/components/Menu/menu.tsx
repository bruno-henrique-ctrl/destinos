import Link from "next/link";
import Image from "next/image";
import styles from "./menu.module.css";

const Menu = () => {
    return (
        <header className={styles.header}>
            <Link href='/' className={styles.logo}>
                <Image
                    src='/imgs/logo.webp'
                    alt='Logo'
                    priority
                    width={100}
                    height={60}
                />
            </Link>

            <nav className={styles.nav}>
                <Link href='/'>Início</Link>
                <Link href='/destinos'>Destinos</Link>
            </nav>
        </header>
    );
};

export default Menu;
