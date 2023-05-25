import React from 'react'
import './Result.css'
export default function Result(props) {
    const boxes = props.movies.map(
        (item,index) => {
            return <Box key={index} image={item.poster_path} title={item.original_title} rating={item.vote_average} />
        }
    )
    return (
        <div className='w-full grid md:grid-cols-4 gap-5'>
            {boxes}
        </div>
    )
}


const Box = (props) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    return (
        <div className='card'>
            <img src={IMGPATH + props.image} alt="" className='cardimg' />
            <div className='cardbody'>
                <span className='cardtitle'>{props.title}</span>
                <span className='cardrate'>{props.rating}</span>
            </div>
        </div>
    )
}