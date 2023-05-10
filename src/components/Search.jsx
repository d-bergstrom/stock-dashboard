import React from 'react';
import { useState } from 'react';
import { mockSearchResults } from '../constants/mock';
import {XMarkIcon} from '@heroicons/react/24/solid'

const Search = () => {

    const [input, setInput] = useState("");
    const [bestMatches, setBestMatches] = useState(mockSearchResults.results);

    const clear = () => {
        setInput("");
        setBestMatches([]); 
    };

    const updateBestMatches = () => {
        setBestMatches(mockSearchResults.results);
    };




    return (
        <div className='flex item-center my-4 border-2 rounded-md relative z-50 w-96 bg-white border-neutral-200'>
            <input 
                type='text' 
                value={input} 
                className='w-full px-4 py-2 focus:outline-none rounded-md'
                placeholder='Search Stock'
                onChange={(event) => {
                    setInput(event.target.value);
                }}
                onKeyPress={(event) => {
                    if(event.key==="Enter"){
                        updateBestMatches();
                    }
                }}></input>

                <button onClick={clear}>
                    <XMarkIcon className='h-4 w-4 mr-3 fill-gray-500'></XMarkIcon>
                </button>

        </div>
    );
}

export default Search;
