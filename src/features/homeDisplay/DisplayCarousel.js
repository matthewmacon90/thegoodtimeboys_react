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

    const previousButton = () => {
        if (animating) return;
        const nextIdx = activeIdx === 0 ?
        featuredGames.length : activeIdx - 1;
        setActiveIdx(nextIdx);
    }

    const nextButton = () => {
        if (animating) return;
        const nextIdx = activeIdx === featuredGames.length ?
        0 : activeIdx + 1;
        setActiveIdx(nextIdx);
    }

    const slides = featuredGames.map((game) => {
        return (
            <CarouselItem
                key={game.id}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img src={game.image} alt={game.name} />
            </CarouselItem>
        );
    });
    return (
        <Row>
            <Col>
                <h3>Join Us in these Games!</h3>
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
                        onClickHandler={(newIndex) => {
                            if (animating) return;
                            setActiveIdx(newIndex);
                        }} />
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