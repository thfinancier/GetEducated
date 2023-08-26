import { NavLinks } from '../constants'
import { useState, useEffect } from 'react'
import { menu, close } from '../assets'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.overflow = toggle ? 'hidden' : 'visible'
    }, [toggle])

    return (
        <nav className='border-b border-b-neutral-200 relative z-20'>
            <div className='bg-white p-4 ss:px-6 md:py-6 md:px-11 flex flex-row sm:justify-between items-center relative z-30'>
            <div className='flex items-center md:hidden'>
                <img src={toggle ? close : menu}
                alt="menu"
                className='icon object-contain cursor-pointer absolute' 
                onClick={() => setToggle(!toggle)}
                />

                {/* <select name="language" className='outline-none uppercase font-inter font-regular text-base leading-[19.36px]'>
                    <option value="english">English</option>
                    <option value="russian">Russian</option>
                </select> */}
            </div>

            <h3 className='font-montserrat font-medium fs-18 md:text-xl centre md:m-0'>GetEducated</h3>

            <div className='md:flex hidden items-center'>
            <ul className='flex flex-row'>
                {NavLinks.map((link, index) => (
                    <li
                    key={link.id}
                    className={`
                    ${index !== NavLinks.length - 1 ? 'mr-8 lg:mr-12' : 'mr-0'}
                    `}
                    >
                        <a href={link.id}>{link.title}</a>
                    </li>
                ))}
            </ul>

            <p className='text-sm ml-16'>
                ru / eng
            </p>
            </div>
            </div>

            <div className='block md:hidden'>
            <div className={`${toggle ? 'translate-y-[1px]' : 'translate-y-[-100rem]'}
                absolute w-full h-[100vh] px-3.5 bg-white flex flex-col justify-between transition-all duration-500 ease-in-out
                `}>
                    <ul className='mt-28'>
                    {NavLinks.map((link, index) => (
                        <li
                        key={link.id}
                        className={`font-montserrat first:font-medium text-3xl first:underline underline-offset-8 cursor-pointer
                        ${index !== NavLinks.length - 1 ? 'mb-8' : 'mb-0'}
                        `}
                        >
                            <a href={link.id}>{link.title}</a>
                        </li>
                    ))}
                    </ul>

                    <div className='mb-20 flex flex-row cursor-pointer'>
                        <p className='font-semibold underline underline-offset-4'>Eng</p>
                        <p className='mx-1'>/</p>
                        <p>Ru</p>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
