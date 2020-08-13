import React, { useState } from 'react';

export default () => {
    const [count, setCount] = useState(0);

    const onButtonClick = count => {
        setCount(count + 1);
    };
    const specialGift = count => {
        if (count === 3) {
            return (
                <img
                    alt='3'
                    src='https://trinixy.ru/pics5/20170902/3e_sentyabrya_19.jpg'
                />
            );
        }
        if (count === 15) {
            return (
                <img
                    alt='15'
                    src='https://cs11.pikabu.ru/post_img/2019/01/15/4/og_og_1547531060234891506.jpg'
                />
            );
        }
    };
    return (
        <div className='ui container'>
            <button onClick={() => onButtonClick(count)}>Click Me!</button>
            <h1>Clicked times: {count}</h1>
            <div className='special'>{specialGift(count)}</div>
        </div>
    );
};
