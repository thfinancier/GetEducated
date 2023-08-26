import { BookCards } from "../constants"
import { star, halfStar, unfilledStar } from '../assets'
import { useState, useEffect } from "react"

const BookCard = ({ id, cover, title, author, link, rating, numberOfPeople, apple, spotify, google, genre, language, publishedIn, duration, description }) => {
  
    const [IsOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const body = document.querySelector('body')
        body.style.overflow = IsOpen ? 'hidden' : 'visible'
    }, [IsOpen])
    
    return (
        <div className='book'>
            <div 
            className='flex flex-col max-w-[164px] md:max-w-[235px] cursor-pointer'
            onClick={() => setIsOpen(true)}
            >
                <img src={cover} alt="book" className=''/>

                <h2 className='font-montserrat font-semibold text-[1.125rem] pt-[0.5em] pb-[0.2em]'>{title}</h2>
                <p className='font-montserrat font-regular text-sm ss:text-base'>
                    {author}
                </p>
            </div>

            <div className={`${IsOpen ? 'block' : 'hidden'}
            w-full h-screen bg-white fixed top-0 z-10 left-0 transition-all ease-in-out duration-500`}>
                <div className='h-screen overflow-y-auto mt-[3.25rem]'>
                    <div className='py-[5px] px-3.5'>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} stroke="currentColor" 
                        className="w-6 h-6 cursor-pointer mt-3"
                        onClick={() => setIsOpen(!IsOpen)}
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
                        </svg>

                        <div className=''>
                            <div className='w-full flex flex-col justify-center items-center my-8'>
                                <img src={cover} alt={id + "image"} className='h-[362px] rounded-[2px] modal-img-shadow'/>
                                <h3 className='h2-fs pt-7'>{title}</h3>
                                <h4 className='font-medium text-gray-700'>{author}</h4>
                            </div>
                            <div className='flex flex-row justify-between items-center flex-wrap gap-y-4 pt-[1.25em] pb-11 border-t-[1px]'>
                                <div className='flex flex-row mr-1'>
                                    {rating == 4 ? (
                                        <>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={unfilledStar} alt="half-star" className='icon-star'/>
                                        </>
                                    ) : rating == 4.5 ? (
                                        <>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={halfStar} alt="star" className='icon-star'/>
                                        </>
                                    ) : rating == 5 ? (
                                        <>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={star} alt="star" className='icon-star'/>
                                        <img src={star} alt="star" className='icon-star'/>
                                        </>
                                    ) : (
                                        <>
                                        <img src={unfilledStar} alt="star" className='icon-star'/>
                                        <img src={unfilledStar} alt="star" className='icon-star'/>
                                        <img src={unfilledStar} alt="star" className='icon-star'/>
                                        <img src={unfilledStar} alt="star" className='icon-star'/>
                                        <img src={unfilledStar} alt="star" className='icon-star'/>
                                        </>
                                        // <div>No stars</div>
                                    )}
                                </div>
                                <p className='max-w-[170px]'>
                                According to Google, {numberOfPeople} liked this book
                                </p>
                            </div>

                            <div className='mb-16'>
                                <h6 className='font-semibold text-2xl mb-8'>Listen for  free in:</h6>
                                <div className='flex flex-row justify-between flex-wrap gap-y-2.5'>
                                    <button type="button" className='button cursor-pointer'>Spotify</button>
                                    <button type="button" className='button cursor-pointer'>Google</button>
                                    <button type="button" className='button cursor-pointer'>Apple</button>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-row justify-between overflow-x-auto py-4 border-y hide-scrollbar'>
                            <div className='flex flex-col justify-center items-center mr-8 whitespace-nowrap'>
                                <p className='font-semibold text-sm text-neutral-00 uppercase mb-3'>genre</p>
                                <p className='font-medium capitalize'>{genre}</p>
                            </div>
                            <div className='flex flex-col justify-center items-center mr-8 whitespace-nowrap'>
                                <p className='font-semibold text-sm text-neutral-00 uppercase mb-3'>language</p>
                                <p className='font-medium'>{language}</p>
                            </div>
                            <div className='flex flex-col justify-center items-center mr-8 whitespace-nowrap'>
                                <p className='font-semibold text-sm text-neutral-00 uppercase mb-3'>published in</p>
                                <p className='font-medium'>{publishedIn}</p>
                            </div>
                            <div className='flex flex-col justify-center items-center whitespace-nowrap'>
                                <p className='font-semibold text-sm text-neutral-00 uppercase mb-3'>duration</p>
                                <p className='font-medium'>{duration}</p>
                            </div>
                        </div>

                        <div className='my-11'>
                            <h6 className='font-semibold text-2xl mb-3'>Description:</h6>
                            <p className='pb-10'>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard
