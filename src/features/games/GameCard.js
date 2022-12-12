import { Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

//The Image Overlay text is not staying within the card image bounds and needs to be adjusted.
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