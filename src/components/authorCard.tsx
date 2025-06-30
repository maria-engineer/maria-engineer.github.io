import React from "react";
import { Link } from "gatsby";
import styled from "@emotion/styled";
import { ProfileImage } from "../images/image";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #444;
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  margin: 20px auto;
  gap: 20px;
  background-color: #121212;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const ImageContainer = styled.div`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #fff;
`;

const CardText = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
  color: #e0e0e0;

  a {
    color: #64b5f6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
      color: #90caf9;
    }
  }
`;

export default function AuthorCard() {
  return (
    <Card>
      <ImageContainer>
        <ProfileImage />
      </ImageContainer>
      <CardContent>
        <CardTitle>About the Author</CardTitle>
        <CardText>
          Maria is an{" "}
          <a
            target="_blank"
            href="https://coachingfederation.org"
          >
            ICF
          </a>{" "}
          coach who combines their experience as a software engineer with their
          ability to build an open and honest environment for their clients in
          order to help people reach the transformative growth they know is
          possible through <Link to="/coaching/">coaching</Link>.
        </CardText>
      </CardContent>
    </Card>
  );
}
