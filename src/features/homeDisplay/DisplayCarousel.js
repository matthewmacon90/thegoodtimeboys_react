import { useState } from 'react';
import {
    Row,
    Col,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    // CarouselCaption,
  } from 'reactstrap';
  import {selectFeaturedGames} from '../games/gamesSlice';
  import './carouselStyle.css'

  const DisplayCarousel = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [animating, setAnimating] = useState(false);

    const featuredGames = selectFeaturedGames();
    const lastIndex = featuredGames.length - 1;

    const previousButton = () => {
        if (animating) return;
        const nextIdx = activeIdx === 0 ? lastIndex : activeIdx - 1;
        setActiveIdx(nextIdx);
    };

    const nextButton = () => {
        if (animating) return;
        const nextIdx = activeIdx === lastIndex ? 0 : activeIdx + 1;
        setActiveIdx(nextIdx);
    };

    const goToIndx = (newIdx) => {
        if (animating) return;
        setActiveIdx(newIdx);
    };

    const slides = featuredGames.map((game) => {
        return (
            <CarouselItem
                key={game.id}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img className='carousel-image' src={game.image} alt={game.name} />
            </CarouselItem>
        );
    });
    return (
        <Row className='content-centered'>
            <h3>Join Us in these Games!</h3>
            <Col className='content-centered'>
                <Carousel
                    previous={previousButton}
                    next={nextButton}
                    activeIndex={activeIdx}
                    dark
                    fade
                >
                    <CarouselIndicators 
                        items={featuredGames}
                        activeIndex={activeIdx}
                        onClickHandler={goToIndx} 
                        />
                        {slides}
                        <CarouselControl directionText="Previous"
                            direction="prev" onClickHandler={previousButton} />
                        <CarouselControl directionText="Next"
                            direction="next" onClickHandler={nextButton} />
                </Carousel>
            </Col>
        </Row>
    );

};


export default DisplayCarousel;