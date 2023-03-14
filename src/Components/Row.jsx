import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Movie from './Movie';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function Row({ title, fetchURL, rowID }) {
    const [movies, setMovies] = useState([]);

    // fetch data for a single row
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL]);

    // jus a scroll functions
    const slideLeft = () => {
        var slider = document.getElementById('slider-' + rowID);
        slider.scrollLeft = slider.scrollLeft - 500;
    };

    const slideRight = () => {
        var slider = document.getElementById('slider-' + rowID);
        slider.scrollLeft = slider.scrollLeft + 500;
    };

    // return single row with arrows
  return (
    <>
        <h2 className='text-white font-bold md:text-lx p-4'>{title}</h2>

        <div className='relative flex items-center group'>
            <MdChevronLeft
                onClick={slideLeft}
                className='bg-white left-5 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40}
            />
            <div id={`slider-${rowID}`} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                {movies.map((item, id) => (
                    <Movie item={item} key={id}/>
                ))}
            </div>
            <MdChevronRight
                onClick={slideRight}
                className='bg-white right-5 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
                size={40}
            />
        </div>
    </>
  )
}

export default Row