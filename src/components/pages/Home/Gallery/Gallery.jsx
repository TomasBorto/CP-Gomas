import { useState, useEffect, useRef } from "react"
import './Gallery.css'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6'
import foto1 from "../assets/Home.jpeg"
import foto2 from "../assets/Home2.jpeg"
import foto3 from "../assets/Home3.jpeg"
import foto4 from "../assets/Home4.jpeg"

const Fotos = [
    {
        url: foto1
    },
    {
        url: foto2
    },
    {
        url: foto3
    },
    {
        url: foto4
    }
]

export default function Gallery() {
    const [index, setIndex] = useState(0)
    const timerRef = useRef(null)

    function handleNextClick() {
        let indexListLength = Fotos.length - 1;
        if (index < indexListLength) {
            setIndex(index + 1)
        } else{
            setIndex(0)
        }
    }

    function handlePrevClick() {
        let indexListLength = Fotos.length - 1;
        if (index > 0) {
            setIndex(index - 1)
        } else {
            setIndex(indexListLength)
        }
    }

    useEffect(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current)
        }
        timerRef.current = setTimeout(() => {
            handleNextClick()
        }, 3000);
    });


    let fotos = Fotos[index]

    return(
        <div className="gallery">
            <img src={fotos.url} alt="" />
            <button className="btn-prev" onClick={handlePrevClick}><span><FaAngleLeft /></span></button>
            <button className="btn-next" onClick={handleNextClick}><span><FaAngleRight /></span></button>
        </div>
    )
}