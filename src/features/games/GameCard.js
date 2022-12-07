import { Card, CardImg, CardImgOverlay, CardTitle, Button } from "reactstrap";


const GameCard = ({game}) => {
    const { image, name} = game;
    return (
        <Card>
            <CardImg 
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
};

export default GameCard;