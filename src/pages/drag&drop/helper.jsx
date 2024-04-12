import React, { useState } from 'react'
import Pic from './pic';
import { useDrop } from 'react-dnd';
const images = [
    {
        id: 1,
        url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
    },
    {
        id: 2,
        url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    },
    {
        id: 3,
        url: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
    },
    {
        id: 4,
        url: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
    }
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
            <div className="dragdrop">
                <div className='drag' style={{ display: "flex" }}>
                    {
                        images.map((picture) => {

                            return (
                                <Pic url={picture.url} id={picture.id} />
                            )
                        })
                    }
                </div>
                <div ref={drop} className='board' style={{ border: "20px solid black", height: "600px", width: "500px" }}>
                    {board.map((picture) => {

                        return (
                            <Pic url={picture.url} id={picture.id} />
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Helper
