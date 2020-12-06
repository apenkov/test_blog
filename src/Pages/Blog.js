import React, { Component } from 'react';
import { Media, Container, Col, Row} from "react-bootstrap";
import Posts from "../Components/Posts";
import { posts } from  "../data/posts";

export default class Blog extends  Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Media className="m-5">
              <Media.Body>
                <Posts data={posts}/>
              </Media.Body>
            </Media>
          </Col>
        </Row>
      </Container>
    )
  }
}
