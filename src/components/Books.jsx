import { useState, useEffect } from 'react'
import styles, { layout } from '../style'
import { BookCards, Genres, Languages } from '../constants'
import { close } from '../assets'
import BookCard from './BookCard'
import { Link } from 'react-router-dom'

const Books = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [filters, setFilters] = useState(false)

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.overflow = filters ? 'hidden' : 'visible'
    }, [filters])

    useEffect(() => {
        const getNumberOfBooks = document.getElementsByClassName('book').length
        const numberOfBooks = document.querySelector('#books-number')

        let setNumberOfBooks = numberOfBooks.innerHTML = getNumberOfBooks + ' ' + 'books'
    }, [])

    return (
        <section className={`w-full flex flex-col`}>
            <div className='px-4 py-20 ss:px-6 sm:py-12 md:px-11'>
                <h1 className='font-montserrat hey h1-fs'>Search for Inspiration</h1>
                <p className={`font-montserrat hey font-regular ${styles.paragraph} mt-[4px]`}>
                    The best investement you can make - is investement in yourself
                </p>

                <div className={`mt-12 mb-6`}>
                    <div className='relative z-0 flex items-center'>
                        <input
                            type='search'
                            placeholder='Search by writter or book name'
                            className='w-full outline-none py-[0.875em] px-[0.75em] placeholder:text-sm border border-black rounded-[1px]'
                            onChange={(event) => {
                                setSearchTerm(event.target.value)
                            }}
                        />

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon w-[1.125rem] h-[1.125rem] md:w-6 md:h-6 cursor-pointer absolute right-[0.75em]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>

                    <div className='hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon w-[20px] h-[20px] absolute right-[50px] mt-[2px]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>

                        <button type='button' className='font-inter font-regular'>Filters</button>
                    </div>
                </div>

                <div className='w-full grid grid-flow-row grid-cols-3 items-center'>
                    <div
                        className='flex flex-row items-center cursor-pointer'
                        onClick={() => setFilters(!filters)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon w-[1.125rem] h-[1.125rem] md:w-6 md:h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                        </svg>
                        <button type='button' className='font-inter font-regular text-sm ss:text-base tracking-[6%] ml-[6px]'>Filters</button>
                    </div>

                    <div id='books-number' className='justify-self-center text-sm ss:text-base text-gray-400'> books</div>

                    <div className='justify-self-end'>
                        <select name="sort by" className='outline-none text-sm ss:text-base'>
                            <option value="Sort" defaultValue disabled hidden>Sort By:</option>
                            <option value="A-Z" className=''>Alphabet</option>
                            <option value="Relevance" className=''>Relevance</option>
                        </select>
                    </div>
                </div>

                <div className={`w-full grid ${styles.marginY}`}>
                    <div className='flex flex-wrap justify-between gap-y-10'>
                        {BookCards.filter((book) => {
                            if (searchTerm == "") {
                                return book
                            } else if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return book
                            }
                        }).map((book) => (
                            <BookCard id='book' key={book.id} {...book}/>
                        ))}
                    </div>
                </div>
            </div>

            <div className={`${filters ? 'translate-x-0' : 'translate-x-[1000rem]'}
            fixed top-0 z-50 bg-white w-full h-full filters-modal transition-all duration-500 ease-in-out
            `}>
                <div className='flex justify-end items-center pr-5 border-b bg-white'>
                    <img
                        src={close}
                        alt="close"
                        className='icon w-5 h-5 cursor-pointer'
                        onClick={() => setFilters(!filters)}
                    />
                </div>

                <div className='h-full overflow-y-auto px-8 pt-[3.25rem]'>
                    <div className='flex flex-row justify-between items-center mb-[1.25em]'>
                        <h4 className='tracking-[1px] font-montserrat font-semibold'>GENRE</h4>
                        <h4 className='tracking-[1px] text-gray-400 cursor-pointer'>CLEAR</h4>
                    </div>
                    <div>
                        {Genres.map((link, index) => (
                            <div key={index} className={`${index !== Genres.length - 1 ? 'mb-3.5' : 'mb-0'} flex flex-row items-center`}>
                                <input type="checkbox"
                                    id={link.id}
                                    className='mr-3 w-6 h-6 accent-black'
                                />
                                <label htmlFor={link.id}>{link.name}</label>
                            </div>
                        ))}
                    </div>

                    <div className='my-10'>
                        <input type="range" />
                    </div>

                    <h4 className='tracking-[1px] font-montserrat font-semibold uppercase mb-[1.25em]'>Languages</h4>
                    <div>
                        {Languages.map((link, index) => (
                            <div key={index} className={`${index !== Genres.length - 1 ? 'mb-3.5' : 'mb-0'} flex flex-row items-center`}>
                                <input type="checkbox"
                                    id={link.id}
                                    className='mr-3 w-6 h-6 accent-black'
                                />
                                <label htmlFor={link.id}>{link.name}</label>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='bg-white w-full px-8'>
                    <button type="button" className='bg-black w-full font-base text-white leading-6 py-3.5 uppercase tracking-[1px] mt-14 mb-20'>View results</button>
                </div>
            </div>
        </section>
    )
}

export default Books
