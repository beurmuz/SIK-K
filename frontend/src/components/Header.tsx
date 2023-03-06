import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <HeaderWrapper>
      {/* <StyledFontAwesomeIcon icon={faBars} /> */}
      <BarButton>
        <BarLine />
        <BarLine />
        <BarLine />
      </BarButton>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  height: 20vh;
  background-color: transparent;
  padding: 30px 0px;
`;

// const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
//   font-size: 2rem;
//   font-weight: 200;
// `;

const BarButton = styled.button`
  width: 70px;
  height: 60px;
  padding: 10px;
`;

const BarLine = styled.div`
  width: 100%;
  height: 0.2px;
  background: white;
  margin: 10px 0px;
`;
