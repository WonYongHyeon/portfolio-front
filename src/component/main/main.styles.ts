import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  /* padding: 100px; */
  overflow: auto;
  scroll-snap-type: y mandatory;
`;

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

export const IntroduceWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  background-color: white;
  width: 80vw;
  /* height: 100%; */
  padding: 100px;
  margin: auto;
  border-radius: 50px;
`;

export const IntroduceTitle = styled.h1`
  padding: 30px;
  font-size: 40px;
  font-weight: bold;
  margin: auto;
`;

export const IntroduceSubject = styled.p`
  padding: 30px;
  font-size: 25px;
  line-height: 50px;
  vertical-align: middle;
  white-space: pre-wrap;
  overflow: hidden;
  word-break: break-all;
`;

export const MoreIntroduceButton = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  font-size: 20px;
  border-radius: 30px;
  border: 1px solid #ccc;
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
`;

export const SkillWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  width: 80vw;
  /* height: 100%; */
  padding: 100px;
  margin: auto;
  border-radius: 50px;
  gap: 50px;
`;

export const SkillTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SkillTitle = styled.h1`
  padding: 30px;
  font-size: 40px;
  font-weight: bold;
  /* margin: auto; */
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

export const SkillItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, auto));
  grid-gap: 40px;
`;

export const SkillItemBox = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  padding: 30px;
  /* line-height: 30px; */
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-shadow: 5px 5px 10px -5px;
  /* cursor: pointer; */
  transform: scale(1);
  transition: transform 0.4s ease-in-out;

  :hover {
    background-color: #333;
    color: white;
    transform: scale(1.05);
    transition: transform 0.4s ease-in-out;
  }
`;

export const SkillBoxImg = styled.img`
  width: 70px;
  height: 70px;
`;

export const SkillBoxTextWrapper = styled.div`
  padding-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`;
export const SkillBoxTitle = styled.h2`
  font-size: 30px;
`;
export const SkillBoxContent = styled.p`
  font-size: 15px;
  color: #999;
  text-align: start;
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
  ${MoreIntroduceButton}:hover & {
    animation: ${Arrow} 1s infinite;
  }
`;
