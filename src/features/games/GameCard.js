import { Button, Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";
import { NavLink } from "react-router-dom";

//The Image Overlay text is not staying within the card image bounds and needs to be adjusted.
const GameCard = ({game}) => {
    const { id, image, name} = game;
    return (
        <Button color='link'>
            <NavLink to={`${id}`}>
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
            </NavLink>
        </Button>
    );
};

export default GameCard;