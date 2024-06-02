import * as S from "./main.styles";
import "./main.css";
import { SkillDataType, IntroduceDataType } from "@/common/data";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

interface Props {
  skill: SkillDataType;
  introduce: IntroduceDataType;
  onClickRoute: (link: string) => void;
  onClickSkillBox: (text: string) => void;
}

export default function MainUI(props: Props) {
  return (
    <S.Wrapper>
      <S.FullPageWrapper>
        <S.IntroduceWrapper>
          <S.IntroduceTitle>{props.introduce.title}</S.IntroduceTitle>
          <S.IntroduceSubject>{props.introduce.content}</S.IntroduceSubject>
          <S.MoreIntroduceButton
            onClick={() => props.onClickRoute("introduce")}
          >
            <p>More About Me</p>
            <S.MoreButtonArrow src="../../assets/arrow.svg"></S.MoreButtonArrow>
          </S.MoreIntroduceButton>
        </S.IntroduceWrapper>
      </S.FullPageWrapper>
      <S.FullPageWrapper>
        <S.SkillWrapper>
          <S.SkillTitleWrapper>
            <S.SkillTitle>SKILL</S.SkillTitle>
            <S.MoreTitleButton onClick={() => props.onClickRoute("skill")}>
              More About Skill{" "}
              <S.MoreButtonArrow src="../../assets/arrow.svg"></S.MoreButtonArrow>
            </S.MoreTitleButton>
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
      <S.FullPageWrapper>
        <S.SkillWrapper>
          <S.SkillTitleWrapper>
            <S.SkillTitle>PROJECT</S.SkillTitle>
            <S.MoreTitleButton onClick={() => props.onClickRoute("project")}>
              More About Project{" "}
              <S.MoreButtonArrow src="../../assets/arrow.svg"></S.MoreButtonArrow>
            </S.MoreTitleButton>
          </S.SkillTitleWrapper>
          <S.IntroduceSubject>{props.introduce.content}</S.IntroduceSubject>
        </S.SkillWrapper>
      </S.FullPageWrapper>
    </S.Wrapper>
  );

  //   return (
  //     <SectionsContainer {...options}>
  //       <Section>
  //         <S.BoxWrapper>
  //           <S.BoxTitle>{props.title}</S.BoxTitle>
  //           <S.BoxSubject>{props.content}</S.BoxSubject>
  //           <S.MoreButton onClick={() => props.onClickRoute("introduce")}>
  //             More About Me
  //           </S.MoreButton>
  //         </S.BoxWrapper>
  //       </Section>
  //       <Section>
  //         <S.BoxWrapper>
  //           <S.BoxTitle>{props.title}</S.BoxTitle>
  //           <S.BoxSubject>{props.content}</S.BoxSubject>
  //           <S.MoreButton onClick={() => props.onClickRoute("skill")}>
  //             More About Skill
  //           </S.MoreButton>
  //         </S.BoxWrapper>
  //       </Section>
  //       <Section>
  //         <S.BoxWrapper>
  //           <S.BoxTitle>{props.title}</S.BoxTitle>
  //           <S.BoxSubject>{props.content}</S.BoxSubject>
  //           <S.MoreButton onClick={() => props.onClickRoute("project")}>
  //             More About Project
  //           </S.MoreButton>
  //         </S.BoxWrapper>
  //       </Section>
  //     </SectionsContainer>
  //   );
}
