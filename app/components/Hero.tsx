import styles from "../styles/hero.module.css";

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <h1>Encontre o lar perfeito para alugar</h1>
                <p>Casas e apartamentos exclusivos em localizações privilegiadas</p>
                <button className="primary-button">Buscar Imóveis</button>
            </div>
        </section>
    );
};

export default Hero;