import React, { useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { women_kurta } from '../../../Data/women_kurta';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const createItems = () => {
    return women_kurta.map((item, i) => (
        <div>
            <img src={item.image} />
        </div>
    ));
};

const Sample = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [items] = useState(createItems(5, [setActiveIndex]));

    const slidePrev = () => setActiveIndex(activeIndex - 1);
    const slideNext = () => setActiveIndex(activeIndex + 1);
    const syncActiveIndexForSwipeGestures = (e) => setActiveIndex(e.item);

    const onSlideChanged = (e) => {
        syncActiveIndexForSwipeGestures(e);
        console.debug(`onSlideChanged => Item's position after changes: ${e.item}. Event:`, e);
    };

    const onUpdated = (e) => {
        console.debug(`onUpdated => Item's position after update: ${e.item}. Event:`, e);
    };

    return [
        <AliceCarousel
            mouseTracking
            disableDotsControls
            disableButtonsControls
            items={items}
            activeIndex={activeIndex}
            responsive={responsive}
            onSlideChanged={onSlideChanged}
            onUpdated={onUpdated}
        />,
        <div className="b-refs-buttons">
            <button onClick={slidePrev}>Prev</button>
            <button onClick={slideNext}>Next</button>
        </div>,
    ];
};

export default Sample