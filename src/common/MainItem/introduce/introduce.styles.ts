import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

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
  background-color: white;
  width: 80vw;
  padding: 100px;
  margin: auto;
  border-radius: 50px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
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

  ${MoreIntroduceButton}:hover & {
    animation: ${Arrow} 1s infinite;
  }
`;
