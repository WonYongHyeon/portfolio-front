import * as S from "./til.styles";

interface Props {
  tilList: {
    id: string;
    order: string;
    title: string;
    link: string;
  }[];
  onClickItem: (link: string) => void;
}

export default function MainTilUI(props: Props) {
  return (
    <S.FullPageWrapper>
      <S.TilWrapper>
        <S.TilTitleWrapper>
          <S.TilTitle>Today I Learned</S.TilTitle>
          <S.MoreTilButton>
            More About TIL{" "}
            <S.MoreButtonArrow src="../../assets/arrow.svg"></S.MoreButtonArrow>
          </S.MoreTilButton>
        </S.TilTitleWrapper>
        <S.TilItemWrapper>
          {props.tilList.map((el) => {
            return (
              <S.TilItemBox
                key={el.id}
                onClick={() => props.onClickItem(el.link)}
              >
                <S.TilItemTitle>{el.order}</S.TilItemTitle>
                <S.TilItemContent>{el.title}</S.TilItemContent>
              </S.TilItemBox>
            );
          })}
        </S.TilItemWrapper>
      </S.TilWrapper>
    </S.FullPageWrapper>
  );
}
