import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import logo from "../../asset/logo.svg";
import Form from "./Form/Form";
import { PageContainer, StyledHeader, StyledMain, Title, SubTitle, StyledFooter, IconContainer, CopyrightText } from "./StyledPage";

const Page: React.FC = () => {
  return (
    <PageContainer>
      <StyledHeader>
        <img src={logo} alt="logo" />
      </StyledHeader>
      <StyledMain>
        <Title>We are launching <span>soon!</span></Title>
        <SubTitle>Subscribe and get notified</SubTitle>
        <Form />
      </StyledMain>
      <StyledFooter>
        <IconContainer>
          <FontAwesomeIcon icon={faFacebookF} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </IconContainer>
        <CopyrightText>&copy; Copyright Ping. All rights reserved.</CopyrightText>
      </StyledFooter>
    </PageContainer>
  );
};

export default Page;
