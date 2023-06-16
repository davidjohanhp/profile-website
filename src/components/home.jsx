import React from "react";
import photo from "../img/intro-photo.png"
import { TypeAnimation } from "react-type-animation";

class Home extends React.Component {
    render() {
      return (
        <div id="home" className="flex h-[40rem] justify-center items-center">
            <div className="mx-auto w-3/4">
                <div className="grid grid-cols-2 gap-4 content-center">
                    <div className="grid grid-cols-1 gap-4 content-center animate-in motion-safe:spin-in-90 duration-700">
                        <h1 className="text-start font-semibold leading-15 text-gray-900 sm:text-6xl sm:leading-15">Hello, I am <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500">David</span></h1>
                        <TypeAnimation
                            sequence={[
                                'Front End Developer', 
                                2000, 
                                'Back End Developer', 
                                2000,
                                'Mobile Developer', 
                                2000,
                            ]}
                            wrapper="p"
                            cursor={true}
                            repeat={Infinity}
                            className="text-start font-semibold text-gray-900 sm:text-4xl"
                        />
                    </div>
                    <div className="grid place-items-center animate-in motion-safe:spin-in-90 duration-700">
                        <img src={photo} className="rounded w-4/5"></img>
                    </div>
                </div>
            </div>
        </div>
      );
    }
  }
  
  export default Home;