import { Col, Row, Button } from "reactstrap";
import GameCard from "./GameCard";
import { selectAllGames } from "./gamesSlice";


const GamesList = ({ setGameId }) => {
    const games = selectAllGames();
    return (
        <Row className="ms-auto">{
            games.map((game) => {
                return (
                        <Col md='5' className="m-4" key={game.id}>
                            <Button color='link' onClick={() => setGameId(game.id)}>
                                <GameCard game={game} />
                            </Button>
                        </Col>
                    );
                })}
        </Row>
    );
};

export default GamesList;