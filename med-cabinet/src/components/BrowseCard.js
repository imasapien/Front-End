import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";
import styled from "styled-components";
import { addFavorite } from "../actions/index";
import { connect } from "react-redux";
import axiosWithAuth from "../utils/axiosWithAuth";

const NewCard = styled(Card)`
  width: 30%;
  margin: 1%;
`;

const NewDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const NewCardBody = styled(CardBody)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BrowseButton = styled.button`
  width: 30%;
  color: white;
  background-color: #2f5973;
`;

const BrowseCard = props => {
  const addSubmit = elem => {
    //post here
    axiosWithAuth()
      .post(`/users/${localStorage.getItem("ID")}/favs`, elem)
      .then(response => {
        console.log("added fav:", response.data);
      })
      .catch(error => {
        console.log("added fav error:", error);
      });
  };

  return (
    <>
      {/* string form here */}
      <NewDiv>
        {props.strain.map((elem, i) => (
          <NewCard key={i}>
            <CardImg top width="100%" src={require('../img/botanical-rising-ierZlNiWba0-unsplash.jpg')} alt={elem.name} />
            <NewCardBody>
            <CardTitle>Strain:{elem.Strain}</CardTitle>
              <CardSubtitle>Type: {elem.Type}</CardSubtitle>
              <CardText>Flavors: {elem.Flavor}</CardText>
              <CardText>Effects: {elem.Effects}</CardText>
              <CardText>Description: {elem.Description}</CardText>
            </NewCardBody>
            <BrowseButton
              type="button"
              onClick={() => {
                props.addFavorite(elem);
                addSubmit(elem);
              }}
            >
              Favorite
            </BrowseButton>
            <BrowseButton type="button">Share</BrowseButton>
          </NewCard>
        ))}
      </NewDiv>
    </>
  );
};

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};

export default connect(mapStateToProps, { addFavorite })(BrowseCard);
