import MainIntroduce from "@/common/MainItem/introduce/introduce.container";
import * as S from "./main.styles";
import { SkillDataType, IntroduceDataType } from "@/common/data";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import MainSkill from "@/common/MainItem/skill/skill.container";
import MainProject from "@/common/MainItem/project/project.container";
import MainTil from "@/common/MainItem/TIL/til.container";

interface Props {
  skill: SkillDataType;
  introduce: IntroduceDataType;
  onClickRoute: (link: string) => void;
  onClickSkillBox: (text: string) => void;
}

export default function MainUI(props: Props) {
  return (
    <S.Wrapper>
      <MainIntroduce></MainIntroduce>
      <MainSkill></MainSkill>
      <MainProject></MainProject>
      <MainTil></MainTil>

      <S.FullPageWrapper>
        <S.SkillWrapper>
          <S.SkillTitleWrapper>
            <S.SkillTitle>My Projects</S.SkillTitle>
            <S.MoreTitleButton onClick={() => props.onClickRoute("project")}>
              More About Projects{" "}
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
