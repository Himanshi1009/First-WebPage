import React from 'react'
import ReactDOM from 'react-dom/client'
import apple from '../assets/apple.png'
import play from '../assets/play.jpeg'
import credit1 from '../assets/credit1.png'

const Body = () => {
    return (
        <div className="mt-14 ml-20 flex text-white " >
            <div>
        <div className="text-5xl font-sans font-bold ">
            
            The Simplest <br></br> Automated form <br></br> of Payment
        </div>
        <div className="text-2xl mt-14">
            welcome to the simplest an unique form of payment.<br></br>connet wuth the app and start paying.
        </div>
        
        
        <div className="text-2xl flex text-green-800 mt-10 m ">
            <ul className="flex text-black text-center space-x-5">
                <li ><img src={apple} className="h-10 w-10 rounded-full" ></img></li>
                <li><img src={play} className="h-10 w-10 rounded-full"></img></li>
            </ul>
            <div className="pl-20">
            Get the app
            </div>
            </div>
            </div>

            <div className=' ml-[120px]'>
            <img src={credit1} className=' h-96 w-96'></img>
        </div>
    

        </div>
    )
}
export default Body;