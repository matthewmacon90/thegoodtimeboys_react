import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const GameDetail = ({ game }) => {
    const {image, name, description} = game;

    return (
        <Col md='12' className="m-4">
            <Card>
                <CardImg top src={image} alt={name}/>
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default GameDetail;