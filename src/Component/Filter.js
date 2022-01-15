import React,{useState, useEffect} from 'react'
import {Input} from 'semantic-ui-react'
import MoviesData from './MoviesData'

const Filter = ({ setMyInput, setMyRate, myRate,myInput ,setMovie }) => {
// const filteredMovie = MoviesData.filter(film=>film?.name.toLowerCase().includes(myInput))

    return (
        <div>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => setMyInput(e.target.value)}/>
        </div>
    )
}

export default Filter
