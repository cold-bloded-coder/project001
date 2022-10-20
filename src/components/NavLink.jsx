import React from 'react'
import {NavLink as Link} from "react-router-dom"


function NavLink({title,NavIcon,path,onClick}) {
  const activeclass = "primaryBgLinear text-white font-semibold"
  const inactiveclass = "text-textSecondary md:hover:text-primary"

  return (
    <Link onClick={onClick} to={path} end className={({isActive})=>'group flex mt-[12px] md:mt-[20px] w-[190px] px-[26px] py-[11px] rounded-[10px] cursor-pointer '+(isActive?activeclass:inactiveclass)}>
        <NavIcon className={'text-[24px]'}/>
        <span className='ml-[20px] text-[17px]'>{title}</span>
    </Link>
  )
}

export default NavLink