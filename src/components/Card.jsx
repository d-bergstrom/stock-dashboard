import React from 'react';

const Card = (props) => {
    return (
        <div className='w-full h-full p-8 rounded-md relative border-2 bg-gray-300'>
            {props.title}
        </div>
    );
}

export default Card;