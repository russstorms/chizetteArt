import React from 'react'

const Art = (props) => {
    return (
        <div className="art">
            <div><b>Title:</b> <i>{props.art.title}</i></div>
            <div><i> </i></div>
            <br />
            <div><b>Year:</b> </div>
            <br />
            <div><b>Medium:</b> </div>
            <br />
            <div><b>Description:</b> </div>
            <br />
            <div><b>Poster:</b> </div>
            <br />
        </div>
    )
}

export default Art