import { IntroduceDataType } from "@/common/data";
import * as S from "./introduce.styles";

interface Props {
  introduce: IntroduceDataType;
  onClickRoute: () => void;
}

export default function MainIntroduceUI(props: Props) {
  return (
    <S.FullPageWrapper>
      <S.IntroduceWrapper>
        <S.IntroduceTitle>{props.introduce.title}</S.IntroduceTitle>
        <S.IntroduceSubject>{props.introduce.content}</S.IntroduceSubject>
        <S.MoreIntroduceButton onClick={props.onClickRoute}>
          <p>More About Me</p>
          <S.MoreButtonArrow src="../../assets/arrow.svg"></S.MoreButtonArrow>
        </S.MoreIntroduceButton>
      </S.IntroduceWrapper>
    </S.FullPageWrapper>
  );
}
