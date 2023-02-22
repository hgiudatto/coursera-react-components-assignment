import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardSubtitle,
  CardHeader,
} from "reactstrap";

const RenderLeader = ({ leader }) => {
  return (
    <Card>
      <CardImg width="100%" src={leader.image} alt={leader.name} />
      <CardBody>
        <CardTitle>{leader.name}</CardTitle>
        <CardHeader>{leader.designation}</CardHeader>
        <CardText>{leader.description}</CardText>
      </CardBody>
    </Card>
  );
};

export default RenderLeader;
