import styles from "../styles/testimonials.module.css"
import Roberto from '@/app/assets/images/pictures/RobertoMendes.jpg'
import Carlos from '@/app/assets/images/pictures/CarlosSilva.jpg'
import Mariana from '@/app/assets/images/pictures/MarianaCosta.jpg'

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "Carlos Silva",
            location: "São Paulo, SP",
            text: "Aluguei um apartamento através da Imob e foi uma experiência incrível. O processo foi simples e o imóvel era exatamente como nas fotos. Recomendo!",
            image: Carlos.src,
        },
        {
            id: 2,
            name: "Mariana Costa",
            location: "Rio de Janeiro, RJ",
            text: "Já aluguei diversas casas de temporada com a Imob e sempre tive experiências maravilhosas. Atendimento impecável e imóveis de altíssima qualidade.",
            image: Mariana.src,
        },
        {
            id: 3,
            name: "Roberto Mendes",
            location: "Florianópolis, SC",
            text: "A casa que alugamos para as férias superou todas as expectativas. Localização perfeita, limpeza impecável e todo o suporte necessário durante nossa estadia.",
            image: Roberto.src,
        },
    ]

    return (
        <section className={styles.testimonials}>
            <h2>O que dizem nossos clientes</h2>
            <div className={styles["testimonials-container"]}>
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className={styles["testimonial-card"]}>
                        <div className={styles["testimonial-content"]}>
                            <p>"{testimonial.text}"</p>
                        </div>
                        <div className={styles["testimonial-author"]}>
                            <div className={styles["author-image"]}>
                                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                            </div>
                            <div className={styles["author-info"]}>
                                <h4>{testimonial.name}</h4>
                                <p>{testimonial.location}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials
