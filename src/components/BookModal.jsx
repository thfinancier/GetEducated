import { star, halfStar } from '../assets'

const BookModal = ({ 
    id,
    cover,
    title,
    author,
    link,
    rating,
    apple,
    spotify,
    google,
    genre,
    language,
    publishedIn,
    duration,
    description,}) => {
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75" />
            </svg>

            <div>
                <img src={cover} alt={id + "image"} />
                <h3>{title}</h3>
                <h4>{author}</h4>
            </div>

            <div>
                <div>
                    <div className='flex flex-row'>
                        {rating == 4.5 ? (
                            <>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={halfStar} alt="half-star" />
                            </>
                        ) : rating == 5 ? (
                            <>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            </>
                        ) : (
                            <>
                            <img src={star} alt="star" className='icon' />
                            <img src={star} alt="star" className='icon' />
                            <img src={star} alt="star" className='icon' />
                            <img src={star} alt="star" className='icon' />
                            <img src={star} alt="star" className='icon' />
                            </>
                            // <div>No stars</div>
                        )}
                    </div>
                    <p>
                    According to Google, 95% liked this book
                    </p>
                </div>

                <div>
                    <h6>Listen for  free in:</h6>
                    <div>
                        <button type="button">Spotify</button>
                        <button type="button">Google</button>
                        <button type="button">Apple</button>
                    </div>
                </div>
            </div>

            <div>
                <div>
                    <p>genre</p>
                    <p>{genre}</p>
                </div>
                <div>
                    <p>language</p>
                    <p>{language}</p>
                </div>
                <div>
                    <p>published in</p>
                    <p>{publishedIn}</p>
                </div>
                <div>
                    <p>duration</p>
                    <p>{duration}</p>
                </div>
            </div>

            <div>
                <h6>Description:</h6>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BookModal
