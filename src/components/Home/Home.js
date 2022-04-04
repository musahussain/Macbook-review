import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Home.css';

const Home = () => {
    const [reviews, setReviews] = useReviews();
    let slicedReviews = reviews.slice(0, 3);

    return (
        <div className="main-home-container">
            <div className='home-container'>
                <div className="text-description">
                    <h1>See Best Laptop</h1>
                    <p>This is a review website for MacBook Pro. You will find reviews of other customers. By seeing those reviews you can get a idea of that product. There is also dashboard of analysis of this product</p>
                    <Link to="/reviews">See Reviews</Link>
                </div>
                <div className="img">
                    <img src="https://i.postimg.cc/gJT8V26m/macbook.png" alt="macbook" />
                </div>
            </div>


            <div className="review-container">
                <h1>Customer Reviews</h1>
                <div className="reviews">
                    {
                        slicedReviews.map(review => <Review key={review.id} review={review}></Review>)
                    }
                </div>
                <Link to="/reviews">See All Reviews</Link>
            </div>
        </div>
    );
};

export default Home;