import React from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';


const DishDetail = props => {
    return (
        <div>
            <Card style={{ marginTop: "20px" }}>
                <CardImg top src={props.dish.image} alt={props.dish.name} />
                <CardBody style={{ textAling: "left" }}>

                    <CardTitle>
                        {props.dish.name}
                    </CardTitle>
                    <CardText>
                        <p>{props.dish.description} </p>
                        <p>Price: {props.dish.price} </p>
                        <p>Label: {props.dish.label} </p>

                    </CardText>


                </CardBody>
            </Card>
        </div>
    );

}
export default DishDetail;