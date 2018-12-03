import React from 'react'
import Art from './art'
import './art.css'

const ArtList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div>
                    <h1 className="artList col s6">Art List</h1>
                    <ul>
                        {props.artList.map(
                            (art, idx) => {
                                return <Art key={idx} art={art} />
                            }
                        )}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ArtList