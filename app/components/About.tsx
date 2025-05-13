import styles from '../styles/about.module.css'
import Image from 'next/image'

import Roberto from '../assets/images/logo.png'

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.aboutContent}>
                <h2>Sobre a IMOB</h2>
                <p>
                    A IMOB nasceu para reinventar a forma como você vive, viaja e se hospeda.
                    Somos uma plataforma que conecta anfitriões e hóspedes com imóveis únicos,
                    confortáveis e prontos para receber, seja por um fim de semana ou uma temporada completa.
                </p>
                <p>
                    Nossa missão é proporcionar experiências únicas de moradia, conectando pessoas a lugares especiais. Todos os
                    nossos imóveis são cuidadosamente selecionados e verificados para garantir conforto, segurança e bem-estar aos
                    nossos clientes.
                </p>
                <p>
                    Na IMOB, o seu próximo destino começa com um clique.
                </p>
                <button className={styles.secondaryButton}>Conheça Nossa História</button>
            </div>
            <div className={styles.aboutImage}>
                <Image
                    src={Roberto}
                    alt="Casa de luxo para alugar"
                    width={400} // ajuste conforme o tamanho ideal da imagem
                    height={300} // ajuste conforme necessário
                />
            </div>
        </section>
    )
}

export default About
