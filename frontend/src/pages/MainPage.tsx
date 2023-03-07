import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import backgroundImageUrl from "../assets/images/background.jpg";
import backImageUrl from "../assets/images/backImage.jpg";
import faceImageUrl from "../assets/images/faceImage.jpg";
import Footer from "../components/Footer";

const MainPage = () => {
  return (
    <MainWrapper>
      <MainBox_01>
        <Header />
        <MainContent_01>
          <HomePageName>SIK-K</HomePageName>
          <ArtistID>@younghotyellow94</ArtistID>
        </MainContent_01>
        <Footer />
      </MainBox_01>
      <MainBox_02>
        <MainContent_02>
          <PartName>Who is he?</PartName>
          <MainArticles>
            <Article>
              <FaceImage />
              <Discription_01>
                In 2015, He debuted with the song “My Man”. In 2015, He debuted
                with the song “My Man”.
              </Discription_01>
            </Article>
            <Article>
              In 2015, He debuted with the song “My Man”. In 2015, He debuted
              with the song “My Man”.
            </Article>
            <Article>
              In 2015, He debuted with the song “My Man”. In 2015, He debuted
              with the song “My Man”.
            </Article>
          </MainArticles>
        </MainContent_02>
      </MainBox_02>
      <MainBox_03>
        <MainContent_03>
          <Dday>D+2769</Dday>
        </MainContent_03>
      </MainBox_03>
      <MainBox_04>
        <GoTopButton>↑ Back to top ↑</GoTopButton>
      </MainBox_04>
    </MainWrapper>
  );
};

export default MainPage;

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
`;

const MainBox_01 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background: url(${backgroundImageUrl}) no-repeat center;
  background-size: cover;
  color: white;
  padding: 70px;
`;

const MainContent_01 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 60vh;
`;

const HomePageName = styled.h1`
  font-size: 10rem;
  font-weight: 700;
  font-style: italic;
`;

const PartName = styled.h2`
  font-size: 8rem;
  font-weight: 700;
  font-style: italic;
`;
const ArtistID = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
  color: gray;
`;

const MainBox_02 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 80px 70px;
`;

const MainContent_02 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  // height: 60vh;
`;

const MainArticles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  // border-top: 1px solid gray;
`;

const Article = styled.article`
  width: 30%;
  padding: 30px 0px;
`;

const FaceImage = styled.img.attrs({
  src: `${faceImageUrl}`,
})`
  width: 100%;
`;

const Discription_01 = styled.p`
  width: 100%;
`;

const MainBox_03 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 80px 70px;
  border-top: solid 1px white;
`;

const MainBox_04 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  padding: 0px;
  border-top: solid 1px white;
`;

const MainContent_03 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const GoTopButton = styled.button`
  width: 200px;
  font-size: 1rem;
  color: gray;
  // padding:
`;

const Dday = styled.p`
  font-weight: 700;
  font-size: 24rem;
  color: gray;
`;
