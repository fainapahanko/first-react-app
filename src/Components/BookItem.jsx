import React from 'react';
import '../style.css';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';


class BookItem extends React.Component {
    state = {}
    render(){
        return(
        <Col md="2" className="mx-3">
            <Card className="my-3">
              <CardImg top height="300px" src={this.props.book.img} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="text-truncate">{this.props.book.title}</CardTitle>
                    <CardSubtitle>${this.props.book.price}</CardSubtitle>
                    <Button>Buy</Button>
              </CardBody>
            </Card>
        </Col>
        )
    }
}

export default BookItem

