import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const FullPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  border-radius: 30px;
  margin: auto;
  scroll-snap-align: center;
`;

export const TilWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 80vw;
  padding: 100px;
  margin: auto;
  border-radius: 50px;
  gap: 50px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const TilTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TilTitle = styled.h1`
  padding: 30px;
  font-size: 40px;
  font-weight: bold;
`;

export const MoreTilButton = styled.div`
  font-size: 20px;
  border-radius: 30px;
  border: 1px solid #ccc;
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

const Arrow = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }

`;

export const MoreButtonArrow = styled.img`
  width: 20px;
  height: 20px;
  padding-left: 10px;

  ${MoreTilButton}:hover & {
    animation: ${Arrow} 1s infinite;
  }
`;

export const TilItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, auto));
  grid-gap: 40px;
`;

export const TilItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
  padding: 30px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 5px 5px 10px -5px;
  transform: scale(1);
  transition: transform 0.4s ease-in-out;
  cursor: pointer;

  :hover {
    background-color: #333;
    color: white;
    transform: scale(1.05);
    transition: transform 0.4s ease-in-out;
  }
`;

export const TilItemTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
`;

export const TilItemContent = styled.p`
  font-size: 15px;
`;
