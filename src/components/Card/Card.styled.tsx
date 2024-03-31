import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  color: white;
  cursor: pointer;

  @media (min-width: 720px) {
    width: 48.5%;
  }

  @media (min-width: 1280px) {
    width: 31.5%;
    &:nth-child(n + 4) {
      margin-top: calc((35 / 1280) * 100vw);
    }
  }

  @media (min-width: 1440px) {
    width: 100%;

    &:nth-child(n + 4) {
      margin-top: calc((40 / 1920) * 100vw);
    }
  }
`;

export const CardImage = styled.img`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  border-radius: 16px;
  height: 220px;
  display: flex;

  @media (min-width: 1280px) {
    height: calc((200 / 1280) * 100vw);
  }
  @media (min-width: 1920px) {
    width: calc((500 / 1920) * 100vw);
    height: calc((300 / 1920) * 100vw);
  }
`;

export const TextCardWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleCard = styled.div`
  font-size: 26px;
`;

export const DescriptionCard = styled.div`
  font-size: 18px;
`;

export const Description = styled.p`
  position: relative;
  font-size: 26;
  margin: 80px;
`;

export const DescriptionWrapper = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
`;

export const Point = styled.div`
  width: 6px;
  height: 6px;
  background: white;
  margin-left: calc((20 / 1920) * 100vw);
  margin-right: calc((20 / 1920) * 100vw);
  border-radius: 25px;
  display: flex;
  align-self: center;
`;
