import React, { useState } from 'react';
import ReactStars from 'react-stars';

const Card = ({ movie }) => {
    const [newReview, setNewReview] = useState('');
    const [newRating, setNewRating] = useState(5);
    const [reviews, setReviews] = useState([]);
    const [userName, setUserName] = useState('');

    const handleReviewChange = (e) => setNewReview(e.target.value);
    const handleRatingChange = (e) => setNewRating(Number(e.target.value));

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReviewObj = {
            user: userName || 'anonymous',
            review: newReview,
            rating: newRating,
        };
        setReviews((prevReviews) => [...prevReviews, newReviewObj]);
        setNewReview('');
        setNewRating(5);
        setUserName('');
    };

    const avgRating = reviews.length
        ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
        : 'No ratings yet';

    return (
        <div style={{ display: 'flex', marginBottom: '20px' }}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width="150"
                height="225"
                style={{ marginRight: '20px' }}
            />
            <div>
                <h3>{movie.title} ({movie.release_date.split('-')[0]})</h3>
                <p>{movie.overview}</p>

                <p>Rating:
                    <ReactStars
                        count={5}
                        value={parseFloat(avgRating)}
                        size={24}
                        edit={false}
                    />
                </p>

                <form onSubmit={handleSubmit}>
                    <label>
                        Rating:
                        <ReactStars
                            count={5}
                            value={newRating}
                            onChange={setNewRating}
                            size={24}
                        />
                    </label>
                    <textarea
                        value={newReview}
                        onChange={handleReviewChange}
                        placeholder="Write a review"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <button type="submit">Submit Review</button>
                </form>

                <div style={{ maxHeight: '300px', overflowY: 'scroll' }}>
                    <h3>Reviews:</h3>
                    {reviews.length > 0 ? (
                        reviews.map((review, index) => (
                            <div key={index}>
                                <strong>{review.user}</strong> rated it:
                                <ReactStars
                                    count={5}
                                    value={review.rating}
                                    size={18}
                                    edit={false}
                                />
                                <p>{review.review}</p>
                            </div>
                        ))
                    ) : (
                        <p>No reviews yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
