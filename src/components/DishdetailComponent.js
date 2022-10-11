/* eslint-disable no-lone-blocks */
import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dish: this.props.dish,
    };
  }

  renderComments(comments) {
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

  render() {
    return (
      <>
        <div className="cardInfo p-5">
          <div className="row">
            <div className="col-12 col-md-5">
              <Card>
                <CardImg
                  width="100%"
                  src={this.props.dish.image}
                  alt={this.props.dish.name}
                />
                <CardBody>
                  <CardTitle>{this.props.dish.name}</CardTitle>
                  <CardText>{this.props.dish.description}</CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-12 col-md-5 border border-primary">
              {this.renderComments(this.props.dish.comments)}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DishDetail;
