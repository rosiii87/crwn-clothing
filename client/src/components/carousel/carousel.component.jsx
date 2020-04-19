import React, { useState, useCallback, useEffect } from 'react';
import EmblaCarouselReact from 'embla-carousel-react';

import { DotBtn, PrevBtn, NextBtn } from './carousel.styles';

const Carousel = ({ children }) => {
  const [carousel, initCarousel] = useState(null);
  // Add selectedIndex state containing the selected index
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Add scrollSnaps state containing all snap points
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const [prevBtnEnabled, togglePrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, toggleNextBtnEnabled] = useState(false);

  const scrollTo = useCallback((index) => carousel.scrollTo(index), [carousel]);
  const scrollPrev = useCallback(() => carousel.scrollPrev(), [carousel]);
  const scrollNext = useCallback(() => carousel.scrollNext(), [carousel]);

  useEffect(() => {
    const onSelect = () => {
      setSelectedIndex(carousel.selectedScrollSnap());
      // Toggle buttons enabled/disabled
      togglePrevBtnEnabled(carousel.canScrollPrev());
      toggleNextBtnEnabled(carousel.canScrollNext());
    };

    if (carousel) {
      setScrollSnaps(carousel.scrollSnapList());
      carousel.on('select', onSelect);
      onSelect();
    }
    // return () => carousel && carousel.destroy();
  }, [carousel]);

  return (
    <div className="carousel">
      <div className="carousel__wrap">
        <EmblaCarouselReact
          className="carousel__viewport"
          emblaRef={initCarousel}
          options={{ loop: false /* Carousel Options */ }}
          htmlTagName="div"
        >
          <div className="carousel__container">
            {/* Wrap every child with a slide item div */}
            {children.map((Child, index) => (
              <div className="carousel__item" key={index}>
                {Child}
              </div>
            ))}
          </div>
        </EmblaCarouselReact>
        <PrevBtn onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextBtn onClick={scrollNext} enabled={nextBtnEnabled} />
      </div>
      <div className="carousel__dots">
        {scrollSnaps.map((snap, index) => (
          <DotBtn
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
