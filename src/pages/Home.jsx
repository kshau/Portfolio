import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function Home() {

  return (
    <>

      <Navbar page="Home"/>

      <div className="flex flex-col text-center mt-[25vh]">

        <span className="text-[15vh] font-bold text-white text-shadow shadow-gray-900 animate-fadeIn opacity-0"  style={{animationDelay: "0.2s"}}>Shaurya Kumar</span>
        
        <div className="text-[8vh] font-bold text-yellow-500 text-shadow-lg text-shadow shadow-gray-900">
          <span className="animate-fadeIn opacity-0" style={{animationDelay: "0.5s"}}>Coder, </span>
          <span className="animate-fadeIn opacity-0" style={{animationDelay: "0.6s"}}>Drummer, </span>
          <span className="animate-fadeIn opacity-0" style={{animationDelay: "0.7s"}}>CTFs</span>
        </div>
    
      </div>

      <Footer/>

    </>
  )

}

export default Home;
