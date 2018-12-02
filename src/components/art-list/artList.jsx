import React from 'react'
import Art from './art'

const ArtList = (props) => {
    return (
        <div>
            <h1 className="artList">Art List</h1>
            <ul>
                {props.artList.map(
                    (art, idx) => {
                        return <Art key={idx} art={art} />
                    }
                )}
            </ul>
        </div>
    )
}

export default ArtList