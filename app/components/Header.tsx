"use client"

import { useState } from "react"
import Link from "next/link"
import styles from "../styles/header.module.css"

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.logo}>
                    <Link href="/">
                        <h1>IMOB</h1>
                    </Link>
                </div>

                <div
                    className={`${styles.menuButton} ${menuOpen ? styles.active : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <nav className={`${styles.navMenu} ${menuOpen ? styles.open : ''}`}>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/imoveis">Imóveis</Link></li>
                        <li><Link href="/localizacoes">Localizações</Link></li>
                        <li><Link href="/sobre">Sobre</Link></li>
                        <li><Link href="/contato">Contato</Link></li>
                    </ul>

                    {/* Botões de ação dentro do menu mobile */}
                    <div className={styles.mobileActions}>
                        <button className={styles.iconButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <span className={styles.buttonLabel}>Buscar</span>
                        </button>
                        <button className={styles.iconButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                            <span className={styles.buttonLabel}>Perfil</span>
                        </button>
                        <button className={styles.iconButton}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                                <line x1="3" y1="6" x2="21" y2="6"></line>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                            <span className={styles.buttonLabel}>Favoritos</span>
                            <span className={styles.cartCount}>0</span>
                        </button>
                    </div>
                </nav>

                {/* Botões de ação visíveis apenas em desktop */}
                <div className={styles.headerActions}>
                    <button className={styles.iconButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                        </svg>
                    </button>
                    <button className={styles.iconButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                    </button>
                    <button className={styles.iconButton}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <span className={styles.cartCount}>0</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header