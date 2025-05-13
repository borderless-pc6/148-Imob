import styles from '../../app/styles/categories.module.css';
import Image from 'next/image';

import HomeImage1 from '../../app/assets/images/HomeImage-1.jpg';
import ImagemApartamento1 from '../../app/assets/images/ImagemApartamento-1.jpg';
import ChaleImage1 from '../../app/assets/images/ChaleImage-1.jpg';
import CoberturaImage1 from '../../app/assets/images/CoberturaImage-1.jpg';


const Categories = () => {
    const categories = [
        { id: 1, name: "Casas", image: HomeImage1 },
        { id: 2, name: "Apartamentos", image: ImagemApartamento1 },
        { id: 3, name: "Chalés", image: ChaleImage1 },
        { id: 4, name: "Coberturas", image: CoberturaImage1 },
    ];

    return (
        <section className={styles.categories}>
            <h2>Tipos de Imóveis</h2>
            <div className={styles.categoriesGrid}>
                {categories.map((category) => (
                    <div key={category.id} className={styles.categoryCard}>
                        <div className={styles.categoryImage}>
                            <Image
                                src={category.image}
                                alt={category.name}
                                width={300}
                                height={200}
                                className='images-categories'
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
