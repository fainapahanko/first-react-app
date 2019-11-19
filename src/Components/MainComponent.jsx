import React from 'react';
import MyNav from './MyNav';
import MyFooter from './MyFooter';
import BookItem from './BookItem';
import MyJumbotron from './MyJumbotron';
import FantasyJson  from '../data/fantasy.json'
import {Container, Row, Col } from "reactstrap";
import "../style.css";

class MainConponent extends React.Component {
    state = {}
    render() {
        return(
            <Container>
                <div>
                    <MyNav />
                </div>
                <div>
                    <MyJumbotron />
                </div>
                <div>
                    <Row>
                        {FantasyJson.map((bookEntry, index) =>
                            <BookItem book={bookEntry} key={index} />
                        )}
                    </Row>
                </div>
                <div>
                    <MyFooter />
                </div>
            </Container>
        )
    }
}

export default MainConponent