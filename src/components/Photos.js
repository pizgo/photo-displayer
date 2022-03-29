import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { imgActions } from "../ReduxStore/redux";
import { Card, Row, Col } from "react-bootstrap";

const Photos = () => {

    const dispatch = useDispatch();
    const allPhotosUrls = useSelector(state => state.allPhotosUrls);
    const urlPrefixLength = 28;

    function handleNewSlugsData(slugArray) {
        dispatch(imgActions.storeFetchedSlugs(slugArray))
    }

    useEffect(() => {
        fetch('https://picsum.photos/v2/list')
            .then(response => response.json())
            .then(response => {
                    const urlArray = response.map(function (el) {
                        return (el.url);
                    });
                    const regex = /^https:\/\/unsplash\.com\/photos\//;
                    const filteredUrl = urlArray.filter(function (el) {
                        return el.match(regex)
                    })
                    const slugArray = filteredUrl.map(function (el) {
                        return el.slice(urlPrefixLength, el.length)
                    })
                    handleNewSlugsData(slugArray);
                }
            )
    }, []);

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