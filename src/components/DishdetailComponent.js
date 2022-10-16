import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  console.log(`Dish: ${dish}`);
  return (
    <>
      <div className="cardInfo p-5">
        <div className="row">
          <div className="col-12 col-md-5">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 border border-primary">
            <RenderComments comments={dish.comments} />
          </div>
        </div>
      </div>
    </>
  );
}

function RenderComments({ comments }) {
  if (comments != null) {
    let commentDetails = comments.map((comment) => {
      let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      };
      let commentDate = new Date(comment.date);
      let fmtDate = commentDate.toLocaleDateString("en-US", options);
      return (
        <>
          <ul key={comment.id} className="list-unstyled">
            <li>
              <div>{comment.comment}</div>
            </li>
            <li>
              <div>
                -- {comment.author}, {fmtDate}
              </div>
            </li>
          </ul>
        </>
      );
    });

    return (
      <div className="container">
        <h4>Comments</h4>
        <div className="row">{commentDetails}</div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

const DishDetail = (props) => {
  return (
    <>
      <RenderDish dish={props.dish} />
    </>
  );
};

export default DishDetail;
