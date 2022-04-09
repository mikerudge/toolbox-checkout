import { MenuAlt3Icon } from "@heroicons/react/solid"
import Image from "next/image"
import React from "react"

import logo from "../../public/logo.png"

const Navbar = () => {
	// A tailwind css navbar
	return (
		<nav className='fixed  w-full'>
			<div className='flex items-center justify-between bg-midnight py-4 px-8'>
				<Image
					className=''
					width={171}
					height={31}
					src={logo}
					alt='Admiral toolbox logo'
				/>

				<MenuAlt3Icon className='text-white' width={24} height={24} />
			</div>
		</nav>
	)
}

export default Navbar
