import styles from "../styles/footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h3>IMOB</h3>
                    <p>Soluções para seu bem estar</p>
                    <div className={styles.socialIcons}>
                        <a href="#" className={styles.socialIcon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                        <a href="#" className={styles.socialIcon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="#" className={styles.socialIcon}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={styles.footerSection}>
                    <h4>Navegação</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Produtos</a></li>
                        <li><a href="#">Coleções</a></li>
                        <li><a href="#">Sobre</a></li>
                        <li><a href="#">Contato</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4>Categorias</h4>
                    <ul>
                        <li><a href="#">Casas</a></li>
                        <li><a href="#">Apartamentos</a></li>
                        <li><a href="#">Chalés</a></li>
                        <li><a href="#">Coberturas</a></li>
                        <li><a href="#">Temporada</a></li>
                    </ul>
                </div>

                <div className={styles.footerSection}>
                    <h4>Contato</h4>
                    <p>Rua das Madeiras, 123</p>
                    <p>São Paulo - SP</p>
                    <p>contato@imob.com.br</p>
                    <p>(11) 99999-9999</p>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; 2025 IMOB - Todos os direitos reservados</p>
                <div className={styles.footerLinks}>
                    <a href="#">Termos de Uso</a>
                    <a href="#">Política de Privacidade</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
