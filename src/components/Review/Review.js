import React from 'react';
import './Review.css';
import { StarIcon } from '@heroicons/react/solid'

const Review = (props) => {
    const {name, description, userImg, ratings} = props.review;
    return (
        <div className='container-review'>
            <img src={userImg} alt="user" />
            <p>{name}</p>
            <p>{description}</p>
            <p className='rating-icon'><StarIcon style={{fontSize: "1px"}}></StarIcon></p>
        </div>
    );
};

export default Review;