import styles from "@/app/styles/featured.module.css";
import HomeBeach from '@/app/assets/images/BeachHome.jpg'
import ApCenter from '@/app/assets/images/ApartamentoImage.jpg'
import Chale4 from '@/app/assets/images/Chale4.jpg'
import Duplex from '@/app/assets/images/Duplex.jpg'

const Featured = () => {
    const properties = [
        {
            id: 1,
            name: "Casa na Praia - 3 Quartos",
            price: "R$ 3.500/mês",
            location: "Florianópolis, SC",
            image: HomeBeach.src,
        },
        {
            id: 2,
            name: "Apartamento no Centro - 2 Quartos",
            price: "R$ 2.200/mês",
            location: "São Paulo, SP",
            image: ApCenter.src,
        },
        {
            id: 3,
            name: "Chalé na Montanha - 4 Quartos",
            price: "R$ 4.800/mês",
            location: "Campos do Jordão, SP",
            image: Chale4.src,
        },
        {
            id: 4,
            name: "Cobertura Duplex - 3 Quartos",
            price: "R$ 5.900/mês",
            location: "Rio de Janeiro, RJ",
            image: Duplex.src,
        },
    ]

    return (
        <section className={styles.featured}>
            <h2>Imóveis em Destaque</h2>
            <div className={styles["featured-grid"]}>
                {properties.map((property) => (
                    <div key={property.id} className={styles["product-card"]}>
                        <div className={styles["product-image"]}>
                            <img src={property.image || "/placeholder.svg"} alt={property.name} />
                            <div className={styles["product-actions"]}>
                                <button className={styles["icon-action"]}>
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
                                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                                    </svg>
                                </button>
                                <button className={styles["icon-action"]}>
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
                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                        <line x1="1" y1="10" x2="23" y2="10"></line>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <h3>{property.name}</h3>
                        <p className={styles.location}>{property.location}</p>
                        <p className={styles.price}>{property.price}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Featured