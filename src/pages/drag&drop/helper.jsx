import React, { useState } from 'react'
import Pic from './pic';
import "./dragdrop.css"
import { useDrop } from 'react-dnd';
const images = [
    {
        id: 1,
        url: "./pp.png"
    },
    {
        id: 2,
        url: "2.png"
    },
    {
        id: 3,
        url: "1.png"
    },
    {
        id: 4,
        url: "sync.jpg"
    },
];


const Helper = () => {
    const [board, setboard] = useState([]);
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) => addimagetoboard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }))
    const addimagetoboard = (id) => {
        const pic = images.filter((image) => id === image.id);
        setboard((board) => [...board, pic[0]]); //adding the image to the board
    }
    return (
        <>
            <div className="dragdrophai">
                <div className='subdrag'>
                    <h1>Your Workspace</h1>
                    <div ref={drop} className='boardhai' >
                        {board.map((picture) => {

                            return (
                                <Pic url={picture.url} id={picture.id} />
                            )
                        })}
                    </div>
                </div>
                <div className='subdrag'>
                    <h1>Available Agents</h1>

                    <div className='draghai ' >
                        {
                            images.map((picture) => {

                                return (
                                    <Pic url={picture.url} id={picture.id} />
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>
    )
}

export default Helper
