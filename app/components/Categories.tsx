import styles from '../../app/styles/categories.module.css';
import HomeImage1 from '../../app/assets/images/HomeImage-1.jpg';
import ImagemApartamento1 from '../../app/assets/images/ImagemApartamento-1.jpg';
import ChaleImage1 from '../../app/assets/images/ChaleImage-1.jpg';
import CoberturaImage1 from '../../app/assets/images/CoberturaImage-1.jpg';

const Categories = () => {
    const categories = [
        { id: 1, name: "Casas", image: HomeImage1.src },
        { id: 2, name: "Apartamentos", image: ImagemApartamento1.src },
        { id: 3, name: "Chalés", image: ChaleImage1.src },
        { id: 4, name: "Coberturas", image: CoberturaImage1.src },
    ];

    return (
        <section className={styles.categories}>
            <h2>Tipos de Imóveis</h2>
            <div className={styles.categoriesGrid}>
                {categories.map((category) => (
                    <div key={category.id} className={styles.categoryCard}>
                        <div className={styles.categoryImage}>
                            <img className='images-categories'
                                src={category.id === 1 ? HomeImage1.src : category.image}
                                alt={category.name}
                            />
                            <img className='images-categories'
                                src={category.id === 2 ? HomeImage1.src : category.image}
                                alt={category.name}
                            />
                            <img className='images-categories'
                                src={category.id === 3 ? HomeImage1.src : category.image}
                                alt={category.name}
                            />
                        </div>
                        <h3>{category.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Categories;