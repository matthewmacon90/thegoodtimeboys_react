import { useState } from 'react';
import {Container, Row, Col} from 'reactstrap';
import GameDetail from '../features/games/GameDetail';
import GamesList from '../features/games/GamesList';
import { selectGameById } from '../features/games/gamesSlice';

const GamesDirectoryPage = () => {
    const [gameId, setGameId] = useState(0);
    const selectedGame = selectGameById(gameId);
    return (
        <Container>
            <Row>
                <Col sm='5' md='7'>
                    <GamesList setGameId={setGameId} />
                    </Col>
                <Col sm='7' md='5'>
                    <GameDetail game={selectedGame} />
                </Col>
            </Row>
        </Container>
    );
};


//I'm fairly certain we export this to another file to render to, possible the app...need to learn more about this.
export default GamesDirectoryPage;