import { useEffect, useState } from "react";
import "../styles/Carousel.css";

function Carousel({ images }) {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    let timeOut = null;

    useEffect(()=>{
       timeOut = autoplay && setTimeout(()=>{
            slideRight();
        }, 5000)
    })

    console.log(current)

    function slideLeft() {
        setCurrent(current === 0 ? images.length - 1 : current - 1)

    }

    function slideRight() {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }

    return (
        <div className="carousel" onMouseEnter={()=>setAutoplay(false)} onMouseLeave={()=>setAutoplay(true)}>
            <div className="carousel_wrapper">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={
                            index == current
                                ? "carousel_card carousel_card-active"
                                : "carousel_card"
                        }
                    >
                        <img className="card_image" src={image.image} alt={image.title} />
                        <div className="card_overlay">
                            <h2 className="card_title">{image.title}</h2>
                        </div>
                    </div>
                ))}
                <div className="carousel_arrow_left" onClick={slideLeft}>
                    &lsaquo;
                </div>
                <div className="carousel_arrow_right" onClick={slideRight}>
                    &rsaquo;
                </div>
                <div className="carousel_pagination">
                    {images.map((_, index) => {
                        return (
                            <div key={index} className={
                                index == current
                                    ? "pagination_dot pagination_dot-active"
                                    : "pagination_dot"
                            } onClick={()=>setCurrent(index)}>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default Carousel;
