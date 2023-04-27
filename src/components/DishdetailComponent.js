import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from "./CommentFormComponent";

function RenderDish({ dish }) {
  console.log(`Dish: ${dish}`);
  return (
    <div className="col-12 col-md-5 md-1">
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
  if (comments != null)
    return (
      <div className="col-12 col-md-5 m-1">
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => {
            let options = {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            };
            let commentDate = new Date(comment.date);
            let fmtDate = commentDate.toLocaleDateString("en-US", options);

            return (
              <li key={comment.id}>
                <p>{comment.comment}</p>
                <p>
                  -- {comment.author}, {fmtDate}
                </p>
              </li>
            );
          })}
          <CommentForm />
        </ul>
      </div>
    );
  else return <div></div>;
}

const DishDetail = (props) => {
  if (props.dish != null) {
    console.log(`Dish to display: ${props.dish.name}`);
    props.comments.map((comment) => {
      console.log(`Comments to display: ${props.comments}`);
    });

    return (
      <div className="container">
        <div className="roe">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
