"use client"

import type React from "react"
import { useState } from "react"
import styles from "../styles/search-bar.module.css"

const SearchBar = () => {
    const [location, setLocation] = useState("")
    const [propertyType, setPropertyType] = useState("")
    const [priceRange, setPriceRange] = useState("")

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Searching for:", { location, propertyType, priceRange })
    }

    return (
        <section className={styles.searchBar}>
            <div className={styles.searchContainer}>
                <form onSubmit={handleSearch}>
                    <div className={styles.searchFields}>
                        <div className={styles.searchField}>
                            <label htmlFor="location">Localização</label>
                            <input
                                type="text"
                                id="location"
                                placeholder="Cidade, estado ou bairro"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>

                        <div className={styles.searchField}>
                            <label htmlFor="property-type">Tipo de Imóvel</label>
                            <select id="property-type" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                                <option value="">Todos os tipos</option>
                                <option value="casa">Casa</option>
                                <option value="apartamento">Apartamento</option>
                                <option value="chale">Chalé</option>
                                <option value="cobertura">Cobertura</option>
                            </select>
                        </div>

                        <div className={styles.searchField}>
                            <label htmlFor="price-range">Faixa de Preço</label>
                            <select id="price-range" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                                <option value="">Qualquer preço</option>
                                <option value="0-2000">Até R$ 2.000</option>
                                <option value="2000-4000">R$ 2.000 - R$ 4.000</option>
                                <option value="4000-6000">R$ 4.000 - R$ 6.000</option>
                                <option value="6000+">Acima de R$ 6.000</option>
                            </select>
                        </div>

                        <button type="submit" className={styles.searchButton}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            Buscar
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default SearchBar
