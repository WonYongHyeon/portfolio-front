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

export const ProjectWrapper = styled.div`
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
`;

export const ProjectTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProjectTitle = styled.h1`
  padding: 30px;
  font-size: 40px;
  font-weight: bold;
`;

export const MoreTitleButton = styled.div`
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

  ${MoreTitleButton}:hover & {
    animation: ${Arrow} 1s infinite;
  }
`;

export const ProjectItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, auto));
  grid-gap: 40px;
`;

export const ProjectItemBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  font-size: 30px;
  padding: 30px;
  /* text-align: center; */
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 5px 5px 10px -5px;
  transform: scale(1);
  transition: transform 0.4s ease-in-out;

  :hover {
    background-color: #333;
    color: white;
    transform: scale(1.05);
    transition: transform 0.4s ease-in-out;
  }
`;

export const ProjectItemTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const ProjectItemSubtitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const ProjectItemSkill = styled.p`
  font-size: 15px;
  display: flex;
  flex-direction: column;
  color: #999;
`;

export const ProjectItemContent = styled.div``;
