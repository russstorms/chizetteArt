import React from 'react'


const Art = (props) => {
    return (
        <div>
            <hr />
            <div><img src={props.art.poster} alt='https://placekitten.com/200/300'></img></div>
            <br />
            <div><b>Title:</b> <i>{props.art.title}</i></div>
            <br />
            <div><b>Year:</b> {props.art.year}</div>
            <br />
            <div><b>Medium:</b> {props.art.medium}</div>
            <br />
            <div>{props.art.description}</div>
            <br />
        </div>
    )
}

export default Art