import Hero from '../components/Hero'
import SearchForm from '../components/SearchForm'
import Offers from '../components/Offers'

function Home(){
  return (
    <>
      <Hero />
      <div className="container">
        <SearchForm />
      </div>
      <Offers />
    </>
  );
}
export default Home;

