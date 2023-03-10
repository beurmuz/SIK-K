import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <InfoPTag1>Contact | fallinta2@gmail.com</InfoPTag1>
        <InfoPTag2>Copyright | ⓒ 2023 beurmuz. All rights reserved.</InfoPTag2>
      </FooterWrapper>
    </>
  );
};

export default Footer;

const FooterWrapper = styled.div`
  width: 100%;
  height: 15vh;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: gray;
`;

const InfoPTag1 = styled.p`
  font-size: 0.8rem;
`;

const InfoPTag2 = styled.p`
  font-size: 0.8rem;
`;
