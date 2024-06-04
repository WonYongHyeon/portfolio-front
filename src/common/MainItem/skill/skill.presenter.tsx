import { SkillDataType } from "@/common/data";
import * as S from "./skill.styles";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

interface Props {
  skill: SkillDataType;
  onClickRoute: () => void;
}

export default function MainSkillUI(props: Props) {
  return (
    <S.FullPageWrapper>
      <S.SkillWrapper>
        <S.SkillTitleWrapper>
          <S.SkillTitle>My Skills</S.SkillTitle>
          <S.MoreSkillButton onClick={props.onClickRoute}>
            More About Skills{" "}
            <S.MoreButtonArrow src="../../assets/arrow.svg"></S.MoreButtonArrow>
          </S.MoreSkillButton>
        </S.SkillTitleWrapper>
        <S.SkillItemWrapper>
          <Tippy content={props.skill["JavaScript"]["desc"]} arrow={true}>
            <S.SkillItemBox>
              <S.SkillBoxImg src="../../assets/icon_JS.png"></S.SkillBoxImg>
              <S.SkillBoxTextWrapper>
                <S.SkillBoxTitle>JavaScript</S.SkillBoxTitle>
                <S.SkillBoxContent>Programming Language</S.SkillBoxContent>
              </S.SkillBoxTextWrapper>
            </S.SkillItemBox>
          </Tippy>
          <Tippy content={props.skill["TypeScript"]["desc"]} arrow={true}>
            <S.SkillItemBox>
              <S.SkillBoxImg src="../../assets/iconTS.svg"></S.SkillBoxImg>
              <S.SkillBoxTextWrapper>
                <S.SkillBoxTitle>TypeScript</S.SkillBoxTitle>
                <S.SkillBoxContent>JavaScript + Type</S.SkillBoxContent>
              </S.SkillBoxTextWrapper>
            </S.SkillItemBox>
          </Tippy>
          <Tippy content={props.skill["CSS"]["desc"]} arrow={true}>
            <S.SkillItemBox>
              <S.SkillBoxImg src="../../assets/icon_CSS.png"></S.SkillBoxImg>
              <S.SkillBoxTextWrapper>
                <S.SkillBoxTitle>CSS</S.SkillBoxTitle>
                <S.SkillBoxContent>User Interface</S.SkillBoxContent>
              </S.SkillBoxTextWrapper>
            </S.SkillItemBox>
          </Tippy>
          <Tippy content={props.skill["React"]["desc"]} arrow={true}>
            <S.SkillItemBox>
              <S.SkillBoxImg src="../../assets/icon_REACT.png"></S.SkillBoxImg>
              <S.SkillBoxTextWrapper>
                <S.SkillBoxTitle>React</S.SkillBoxTitle>
                <S.SkillBoxContent>Component</S.SkillBoxContent>
              </S.SkillBoxTextWrapper>
            </S.SkillItemBox>
          </Tippy>
          <Tippy content={props.skill["Nextjs"]["desc"]} arrow={true}>
            <S.SkillItemBox>
              <S.SkillBoxImg src="../../assets/iconNextjs.svg"></S.SkillBoxImg>
              <S.SkillBoxTextWrapper>
                <S.SkillBoxTitle>Next.js</S.SkillBoxTitle>
                <S.SkillBoxContent>Server-Side Rendering</S.SkillBoxContent>
              </S.SkillBoxTextWrapper>
            </S.SkillItemBox>
          </Tippy>
          <Tippy content={props.skill["Emotion"]["desc"]} arrow={true}>
            <S.SkillItemBox>
              <S.SkillBoxImg src="../../assets/iconEmotion.svg"></S.SkillBoxImg>
              <S.SkillBoxTextWrapper>
                <S.SkillBoxTitle>Emotion</S.SkillBoxTitle>
                <S.SkillBoxContent>Styled-Component</S.SkillBoxContent>
              </S.SkillBoxTextWrapper>
            </S.SkillItemBox>
          </Tippy>
          <Tippy content={props.skill["GraphQL"]["desc"]} arrow={true}>
            <S.SkillItemBox>
              <S.SkillBoxImg src="../../assets/iconGraphQL.svg"></S.SkillBoxImg>
              <S.SkillBoxTextWrapper>
                <S.SkillBoxTitle>GraphQL</S.SkillBoxTitle>
                <S.SkillBoxContent>Query Language</S.SkillBoxContent>
              </S.SkillBoxTextWrapper>
            </S.SkillItemBox>
          </Tippy>
          <Tippy content={props.skill["Git"]["desc"]} arrow={true}>
            <S.SkillItemBox>
              <S.SkillBoxImg src="../../assets/iconGithub.svg"></S.SkillBoxImg>
              <S.SkillBoxTextWrapper>
                <S.SkillBoxTitle>Github</S.SkillBoxTitle>
                <S.SkillBoxContent>Source Code Management</S.SkillBoxContent>
              </S.SkillBoxTextWrapper>
            </S.SkillItemBox>
          </Tippy>
        </S.SkillItemWrapper>
      </S.SkillWrapper>
    </S.FullPageWrapper>
  );
}
