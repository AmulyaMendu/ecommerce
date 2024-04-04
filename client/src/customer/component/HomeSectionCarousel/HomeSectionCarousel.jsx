import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import 'react-alice-carousel/lib/alice-carousel.css';

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Button } from '@mui/material';
import { women_kurta } from '../../../Data/women_kurta';
const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: {
        items: 5.5,
        itemsFit: 'contain'
    },
};
const items = women_kurta.slice(0, 10).map((item) => <HomeSectionCard product={item} />)

const HomeSectionCarousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const slidePrev = () => {
        setActiveIndex(activeIndex - 1);
    };

    const slideNext = () => {
        setActiveIndex(activeIndex + 1);
    };

    const syncActiveIndex = ({ item }) => {
        setActiveIndex(item);
    };


    return (
        <div className='border'>
            <div className='relative p-4 '>

                <AliceCarousel

                    items={items}
                    responsive={responsive}
                    disableButtonsControls
                    disableDotsControls
                    keyboardNavigation
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />


                {activeIndex !== items.length - 5 && (<Button variant='contained' className='z-50 bg-white'
                    onClick={slideNext}
                    sx={{
                        position: "absolute", top: "8rem",
                        right: "0rem", transform: "translateX(50%) rotate(90deg)", bgcolor: "white"
                    }} aria-label='next'>
                    <KeyboardArrowLeftIcon
                        sx={{
                            transform: "rotate(90deg)",
                            color: "black"
                        }} />
                </Button>)}

                {activeIndex !== 0 && (<Button variant='contained' className='z-50 bg-white'
                    onClick={slidePrev} sx={{
                        position: "absolute", top: "8rem",
                        left: "0rem", transform: "translateX(-50%) rotate(-90deg)", bgcolor: "white"
                    }} aria-label='previous'>
                    <KeyboardArrowLeftIcon sx={{ transform: "rotate(90deg)", color: "black" }} />
                </Button>
                )}


            </div>

        </div>
    )
}

export default HomeSectionCarousel