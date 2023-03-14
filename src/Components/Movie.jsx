import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { UserAuth } from '../Context/AuthContext';
import { db } from '../Firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

function Movie({ item }) {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();

    // get a single exact movie
    const movieID = doc(db, 'users', `${user?.email}`);

    // save movie to database in this format (shown bellow). set everything as needed, or alert if account is nog logged in
    const saveMovie = async () => {
        if (user?.email) {
        setLike(!like);
        setSaved(true);
        await updateDoc(movieID, {
            savedShows: arrayUnion({
            id: item.id,
            title: item.title,
            img: item.backdrop_path,
            }),
        });
        } else {
        alert('Please log in to save a movie!');
        }
    };

    // each movie template in rows
  return (
    <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block relative p-2'>
        <img 
            className='w-full h-auto block bg-black'
            src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} 
            alt={item?.title} 
        />

        {/* overlay */}
        <div className='absolute w-full h-full top-0 left-0 hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
            <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                {item?.title}
            </p>
            <p onClick={saveMovie}>
                {like ? 
                    <FaHeart className='absolute top-4 left-4 text-gray-300 cursor-pointer'/> : 
                    <FaRegHeart className='absolute top-4 left-4 text-gray-300 cursor-pointer'
                />}
            </p>
        </div>
    </div>
  )
}

export default Movie