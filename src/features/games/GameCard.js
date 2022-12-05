import { Card, CardImg, CardImgOverlay, CardTitle, CardSubtitle } from "reactstrap";
import GAMES from "../../app/shared/GAMES";

const GameCard = (props) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.game.image}
                alt={props.game.name}
            />
            <CardImgOverlay>
                <CardTitle >{props.game.name}</CardTitle>
            </CardImgOverlay>
            
        </Card>
    );
};

export default GameCard;