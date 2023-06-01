// eslint-disable-next-line no-unused-vars
import React from "react";
import image from "../imagen.jpg"
import {TypeAnimation} from "react-type-animation"
import {FaLinkedinIn, FaGithub} from "react-icons/fa"

const Main = () =>{
    return(
        <div id="main">

            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={image} alt="/"/>

            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">

            <div className="max-w-[700px] m-auto h-full flex flex-col justify-center lg:items-start items-center">
                <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">Andrea Guisande</h1>
                <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                
                <TypeAnimation
      sequence={[
        'Full Stack Web Developer',
        1000,
        'Desarrolladora Web',
        2000,
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '1em', paddingLeft: "5px", display: 'inline-block' }}
    />
                </h2>

                <div className="flex justify-between pt-6 max-w-[200px] w-full">
                    <a href="https://www.linkedin.com/in/andrea-guisande-nieto"><FaLinkedinIn className="cursor-pointer" size={20}/></a>
                    <a href="https://www.github.com/Mermalien"><FaGithub className="cursor-pointer" size={20}/></a>
                </div>

            </div>      
            </div>
        </div>
    )
}

export default Main;