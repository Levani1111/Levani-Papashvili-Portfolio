import React from "react";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import Layout from "../components/Layout";

function Home() {
  return (
    <div>
      <Layout>
        <div>
            <div className="h-screen bg-theme"> {/* Intro section */}
            <div className="grid md:grid-cols-1 grid-cols-2 h-screen items-center">
              <div className="h-1/2">
              <lottie-player 
              src="https://assets10.lottiefiles.com/packages/lf20_3ntisyac.json"  
              background="transparent"  
              speed="1"   
              loop autoplay>
              </lottie-player>
              </div>

              <div className="font-bold font-mont md:px-20">
                <h1 className="text-6xl md:text-4xl"><b className="text-gray-300">Levani Papashvili</b></h1>
                <h2 className="text-xl md:text-sm md:px-1"><b className="text-gray-300">SOFTWARE ENGINEER – WEB DEVELOPER</b></h2>
              </div>
            </div>
            </div> {/* end intro section */}
            
            {/* Technologes */}
            <div>
              <div className="grid md:grid-col-1 grid-cols-4">
                <FaReact  size={150} color="cyan" className="w-full text-center"/>
                <FaHtml5  size={150} color="orange" className="w-full text-center"/>
                <FaCss3  size={150} color="blue" className="w-full text-center"/>

              </div>
            </div>
        </div>
      </Layout>
    </div>
  );
}

export default Home;
