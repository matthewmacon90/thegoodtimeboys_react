import { useState } from 'react';
import {
    Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
  } from 'reactstrap';
  import {selectFeaturedGames} from '../games/gamesSlice';
  
  const DisplayCarousel = ({items}) => {
    const {name, image} = items;
    const [activeIdx, setActiveIdx] = useState(0);
    const featuredGames = selectFeaturedGames();
    return (
        <Row>{
            featuredGames.map((game) => {
                return (
                    <Carousel>
                        <CarouselItem>
                            <img src={image} alt={name}/>
                        </CarouselItem>
                        <CarouselIndicators 
                            items={game}
                        />
                    </Carousel>

                );
            })}
        </Row>
    );
};


export default DisplayCarousel;