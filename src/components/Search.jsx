import React from 'react'

const Search = ({searchTerm, setSearchTerm}) => {

    return (
        <div className='search'>
            <div>
                <img src='search.svg' alt='Search' />
                <input
                    type='text'
                    placeholder='Search Through Thousands of movies...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                {/*<h1 className='text-white'>{searchTerm}</h1>*/}
            </div>
        </div>

    )
}
export default Search
