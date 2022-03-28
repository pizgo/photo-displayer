import React, {useEffect} from 'react';
import { useSelector, useDispatch} from 'react-redux'
import { imgActions} from "../ReduxStore/redux";
import {Card, Row, Col} from "react-bootstrap";

const Photos = () => {

    const dispatch = useDispatch();
    const allPhotosUrls = useSelector(state => state.allPhotosUrls);

    function handleNewSlugsData(slugArray) {
        dispatch(imgActions.storeFetchedSlugs(slugArray))
    };

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
                        return el.slice(28, el.length)
                    })
                    handleNewSlugsData(slugArray);
                }
            );
    }, []);

    return (
        <>
            <Row>
                {allPhotosUrls.map((el, key) =>
                    <Col className='col-md-4'>
                        <Card>
                            <Card.Img className='img-responsive img-thumbnail' key={key} src={el} alt={el}/>
                        </Card>
                    </Col>)}
            </Row>
            {/*<div>*/}
            {/*    {allPhotosUrls.map((el, key) =>*/}
            {/*        <Card.Img key={key} src={el} alt={'img'}/>)}*/}
            {/*</div>*/}
        </>
    );
}

export default Photos;