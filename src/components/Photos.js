import React from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { Card, Row, Col } from "react-bootstrap";

const Photos = () => {

    const allPhotosUrls = useSelector(state => state.allPhotosUrls);

    return (
            <Row>
                {allPhotosUrls.map((el, index) =>
                    <Col key={index} className='col-md-4'>
                        <Card className='card'>
                            <Card.Img className='img-responsive img-thumbnail'  src={el} alt={el}/>
                        </Card>
                    </Col>)}
            </Row>
    );
}

export default Photos;