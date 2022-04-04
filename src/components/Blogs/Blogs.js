import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blog-container'>
            <h1>Blog</h1>
            <div className="answers">
                <div className="answer">
                    <img src="https://i.postimg.cc/FRxCd5Kg/context-api.jpg" alt="context api" />
                    <h1>What is Context Api</h1>
                    <p>Context Api is a feature of react that enables to share data to multiple component without prop drilling. It helps to get rid of passing data without using props all the time. It is also very efficient.</p>
                </div>
                <div className="answer">
                    <img src="https://i.postimg.cc/GttwJJ9f/semantic.png" alt="semantic tag" />
                    <h1>What is Semantic Tags</h1>
                    <p>Semantic Tag are those that clearly describe what it is. It is also needed for better SEO. Semantic tag what is elements purpose of use. For Example: footer tag describe that it is a footer of a website.</p>
                </div>
                <div className="answer">
                    <img src="https://i.postimg.cc/hvKmvvyM/Inline-vs-Block.jpg" alt="inline-block" />
                    <h1>Difference between Inline, Block and Inline-BLock elements</h1>
                    <p>Inline elements doesn't start on a new line. It only takes the width it requires. Block element starts on a new line. It takes upto all the space available. Inline-Block elements behaves like inline element. But width and height can also be set in Inline-BLock element</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;