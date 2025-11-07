import Link from "next/link";
import styles from "./footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <p className={styles.copy}>
                    © {new Date().getFullYear()} Agência de Viagens. Todos os direitos reservados.
                </p>

                <nav className={styles.nav}>
                    <Link href="/">Início</Link>
                    <Link href="/destinos">Destinos</Link>
                    <Link href="#">Contato</Link>
                </nav>

                <div className={styles.social}>
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
