const list = ["Product","Features","Company","FAQ's"]
import apple from '../assets/apple.png'
import play from '../assets/play.jpeg'
import React from 'react'
import ReactDOM from 'react-dom/client'
import flag from '../assets/flag.png'
import logo1 from '../assets/logo1.png'

function Nav() {
    return (
        <nav className=" flex justify-between p-16 text-white">
            <div className="flex ">
                <div className='mr-10 flex justify-between text-2xl'>
                    <img src={logo1} className='h-8 mr-2 w-8'></img>
                    Chainpay.
                    
                </div>
            
                <ul className=" space-x-16 flex">
                    {list.map((item)=>{
                        return (
                            <li >
                                <a href="">{item}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="flex space-x-6">
                <div className=" h-14 w-14 text-center rounded-full "><img src={apple} className='h-10 w-10 rounded-full' /></div>
                <img src={play} className="h-10 w-10 text-center rounded-full m-1"></img>
                <ul className=' h-8 w-16 justify-between pl-2 pr-2 flex rounded-full border-slate-400 border-2 '>
                    <li><img src={flag} className="h-6 w-6 text-center rounded-full"></img></li>
                    <li>en
                    </li>


                </ul>
                
                
            </div>

        </nav>

    )
}
export default Nav




