import {Container, Row, Col, Button} from 'reactstrap';
import GameDetail from '../features/games/GameDetail';
import GamesList from '../features/games/GamesList';
import { selectRandomGame } from '../features/games/gamesSlice';

const GamesDirectoryPage = () => {
    let selectedGame = selectRandomGame();
    
    const toggleGame = () => {
        selectedGame = selectRandomGame();
        console.log(selectedGame);
    };
    return (
        <Container>
            <Button onClick={() => toggleGame()}>
                Select Random Game
            </Button>
            <Row>
                <Col sm='5' md='7'>
                    <GamesList />
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