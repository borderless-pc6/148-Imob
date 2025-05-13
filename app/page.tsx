import '@/app/styles/globals.css'
import Header from "./components/Header"
import Hero from "./components/Hero"
import SearchBar from "./components/Search-Bar"
import Categories from "./components/Categories"
import Featured from "./components/Featured"
import Testimonials from "./components/Testimonials"
import About from "./components/About"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="app">
      <Header />
      <Hero />
      <SearchBar />
      <Categories />
      <Featured />
      <Testimonials />
      <About />
      <Footer />
    </main>
  )
}
