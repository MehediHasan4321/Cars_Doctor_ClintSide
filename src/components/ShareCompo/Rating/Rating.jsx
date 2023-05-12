import React from 'react';
import { FaStar,FaStarHalf,FaRegStar } from 'react-icons/fa'
import { BsStarHalf} from 'react-icons/bs'
const Rating = ({ num  }) => {
    if(parseFloat(num)  === 5){
        return <span className='flex gap-1 text-amber-400'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
        </span>
    }
    else if(parseFloat(num) === 4.5 ){
        return <span className='flex gap-1 text-amber-400'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <BsStarHalf/>
        </span>
    }
    else if(parseFloat(num) === 4){
        return <span className='flex gap-1 text-amber-400'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaRegStar/>
        </span>
    }
    else if(parseFloat(num) === 3.5){
        return <span className='flex gap-1 text-amber-400'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <BsStarHalf/>
            <FaRegStar/>
        </span>
    }
    else if(parseFloat(num) === 3){
        return <span className='flex gap-1 text-amber-400'>
            <FaStar/>
            <FaStar/>
            <FaStar/>
            <FaRegStar/>
            <FaRegStar/>
        </span>
    }
    else{
        return <span className='flex gap-1 text-amber-400'>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
            <FaRegStar/>
        </span>
    }
};

export default Rating;