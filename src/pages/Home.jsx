import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function Home() {

  return (
    <>

      <Navbar page="Home"/>

      <div className="flex flex-col text-center mt-[25vh]">
        <span className="text-[150px] font-bold text-white text-shadow shadow-gray-900">Shaurya Kumar</span>
        <span className="text-[80px] font-bold text-gray-1 text-shadow-lg text-shadow shadow-gray-900">Coder, Gamer, CTFs</span>
      </div>

      <Footer/>

    </>
  )

}

export default Home;