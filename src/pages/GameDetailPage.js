import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectGameById } from "../features/games/gamesSlice";
import GameDetail from '../features/games/GameDetail';

const GameDetailPage = () => {
    const {gameId} = useParams();
    const game = selectGameById(gameId);

    return (
        <Container>
            <Row>
                <GameDetail game={game}/>
            </Row>
        </Container>
    );
};

export default GameDetailPage;
