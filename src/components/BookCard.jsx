

const BookCard = ({ cover, title, author, link }) => {
    return (
        <div className='flex flex-col max-w-[164px] md:max-w-[235px]'>
            <img src={cover} alt="book" className=''/>

            <h2 className='font-montserrat font-semibold text-[1.125rem] pt-[0.5em] pb-[0.2em]'>{title}</h2>
            <p className='font-montserrat font-regular text-sm ss:text-base'>
                {author}
            </p>
        </div>
    )
}

export default BookCard
