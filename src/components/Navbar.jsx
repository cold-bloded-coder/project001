import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose,AiOutlineHome,AiOutlineBook,AiOutlinePercentage, AiOutlineClockCircle } from "react-icons/ai"
import NavLink from './NavLink';
import Profile from './Profile';

function Navbar() {
    const [Nav, setNav] = useState(false);
    const Links = [
        {
            title:"Home",
            path:"/",
            NavIcon:({className})=>(<AiOutlineHome className={className}/>)
        },
        {
            title:"Attendence",
            path:"/attendence",
            NavIcon:({className})=>(<AiOutlineBook className={className}/>)
        },
        {
            title:"Marks",
            path:"/marks",
            NavIcon:({className})=>(<AiOutlinePercentage className={className}/>)
        },{
            title:"Shedule",
            path:"/shedule",
            NavIcon:({className})=>(<AiOutlineClockCircle className={className}/>)
        }
    ]

    function handleNav() {
        setNav(!Nav);
    }

    function closeNav(){
        setNav(false);
    }

    return (
        <nav className={`md:pt-[35px] fixed w-full flex flex-col top-0 left-0 md:w-[250px] md:h-[100vh] md:border-r md:static`}>
            <div className={`z-10 flex items-center px-primaryMob w-full justify-between h-[55px] bg-bgPrimary ${!Nav && 'drop-shadow-navShadowMob'} md:drop-shadow-none md:justify-center`}>
                {/* hamburger icon for mobile view */}
                <div onClick={handleNav} className={'md:hidden cursor-pointer'}>
                    {
                        !Nav ? (
                            <AiOutlineMenu className='text-primary text-[24px]' />
                        ) : (<AiOutlineClose className='text-primary text-[24px]' />)
                    }
                </div>

                {/* logo */}
                <h1 className='font-serif text-[18px] font-bold'>JB PORTALS</h1>
                
                {/* avatar icon for mob view */}
                <div className='md:hidden'>
                    <Profile/>
                </div>
            </div>

            {/* menu trail */}
            <ul className={`flex flex-col items-center px-primaryMob sticky w-full h-[100vh] ease-in-out duration-500 bg-bgPrimary md:translate-x-0 ${Nav?'translate-x-[0%]':'translate-x-[-100%]'}`}>
                    {
                        Links.map((link)=>{
                          return(
                            <NavLink onClick={closeNav} key={link.path} path={link.path} title={link.title} NavIcon={link.NavIcon}/>
                          )
                        })
                    }
            </ul>
        </nav>
    )
}

export default Navbar