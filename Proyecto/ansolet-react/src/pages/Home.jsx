import Hero from '../components/Hero'
import SearchForm from '../components/SearchForm'
import Offers from '../components/Offers'

function Home(){
  return (
    <div className="hero-bg"> 
      <Hero />
      <div className="container">
        <SearchForm />
      </div>
      <Offers />
    </div>
  );
}
/*Envolvemos contenido con hero-bg ya que en index.css ese es el fondo y solo queremos q aplique aca*/

export default Home;
