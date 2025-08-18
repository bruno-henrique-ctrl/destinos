import Link from "next/link";
import styles from "./index.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>© {new Date().getFullYear()} Agência de Viagens. Todos os direitos reservados.</p>

                <nav className={styles.footerNav}>
                    <Link href="/">Início</Link>
                    <Link href="/viagens/1">Destinos</Link>
                    <Link href="/contato">Contato</Link>
                </nav>

                <div className={styles.socialLinks}>
                    <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
