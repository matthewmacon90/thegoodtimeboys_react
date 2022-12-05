import { GAMES } from "../../app/shared/GAMES";
import { Col, Row } from "reactstrap";
import GameCard from "./GameCard";

const GamesList = () => {
    return (
        <Row className="ms-auto">{
            GAMES.map((game) => {
                return (
                    <Col md='5' className="m-4" key={game.id}>
                        <GameCard game={game} />
                    </Col>
                    );
                })}
        </Row>
    );
};

export default GamesList;