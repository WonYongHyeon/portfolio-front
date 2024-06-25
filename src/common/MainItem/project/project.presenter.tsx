import * as S from "./project.styles";

interface Props {
  onClickRoute: () => void;
}

export default function MainProjectUI(props: Props) {
  return (
    <S.FullPageWrapper>
      <S.ProjectWrapper>
        <S.ProjectTitleWrapper>
          <S.ProjectTitle>My Projects</S.ProjectTitle>
          <S.MoreTitleButton onClick={props.onClickRoute}>
            More About Projects{" "}
            <S.MoreButtonArrow src="../../assets/arrow.svg"></S.MoreButtonArrow>
          </S.MoreTitleButton>
        </S.ProjectTitleWrapper>
        <S.ProjectItemWrapper>
          <S.ProjectItemBox>
            <S.ProjectItemTitle>Portfolio</S.ProjectItemTitle>
            <S.ProjectItemSubtitle>포트폴리오</S.ProjectItemSubtitle>
            <S.ProjectItemSkill>
              <p>[프론트엔드, 백엔드, 배포]</p>
              <p>Typescript, React, Next.js, Express, Axios, Emotion</p>
            </S.ProjectItemSkill>
          </S.ProjectItemBox>
          <S.ProjectItemBox>
            <S.ProjectItemTitle>
              <p>Team Project</p>
              <p>- Farm You</p>
            </S.ProjectItemTitle>
            <S.ProjectItemSubtitle>
              로컬 푸드 및 못난이 농산물 온라인 마켓 서비스
            </S.ProjectItemSubtitle>
            <S.ProjectItemSkill>
              <p>[프론트엔드, 배포]</p>
              <p>Typescript, React, Next.js, GraphQL, Emotion</p>
            </S.ProjectItemSkill>
          </S.ProjectItemBox>
          <S.ProjectItemBox>
            <S.ProjectItemTitle>
              <p>Personal Project</p>
              <p>- 기프티마켓</p>
            </S.ProjectItemTitle>
            <S.ProjectItemSubtitle>
              기프티콘 거래 마켓 서비스
            </S.ProjectItemSubtitle>
            <S.ProjectItemSkill>
              <p>[프론트엔드, 배포]</p>
              <p>Typescript, React, Next.js, GraphQL, Emotion</p>
            </S.ProjectItemSkill>
          </S.ProjectItemBox>
          <S.ProjectItemBox>
            <S.ProjectItemTitle>Scoreboard</S.ProjectItemTitle>
            <S.ProjectItemSubtitle>PL 스코어보드</S.ProjectItemSubtitle>
            <S.ProjectItemSkill>
              <p>[프론트엔드]</p>
              <p>javascript, React, Next.js, Emotion</p>
            </S.ProjectItemSkill>
          </S.ProjectItemBox>
          <S.ProjectItemBox>
            <S.ProjectItemTitle>주간 스케줄</S.ProjectItemTitle>
            <S.ProjectItemSubtitle>
              <p>주간 스케줄</p> <p>- 네이버 api를 활용한 네이버 카페 업로드</p>
            </S.ProjectItemSubtitle>
            <S.ProjectItemSkill>
              <p>[프론트엔드]</p>
              <p>javascript, React, Next.js, Emotion, 네이버api</p>
            </S.ProjectItemSkill>
          </S.ProjectItemBox>
        </S.ProjectItemWrapper>
      </S.ProjectWrapper>
    </S.FullPageWrapper>
  );
}
