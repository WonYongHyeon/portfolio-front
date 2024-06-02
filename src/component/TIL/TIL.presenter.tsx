// import { Link } from "react-router-dom";
import * as S from "./TIL.styles";
import { ChangeEventHandler, FormEvent, MouseEvent } from "react";
import Lens from "../../assets/lens.svg";

interface Props {
  page: number;
  tilList: Array<{
    id: string;
    order: string;
    title: string;
    link: string;
  }>;
  searchVisible: boolean;
  pageLength: number;
  activationDelete: boolean;

  onChange: ChangeEventHandler<HTMLInputElement>;
  onClickSearch: () => void;
  onClickSearchImg: () => void;
  onClickPage: (event: MouseEvent<HTMLUListElement>) => void;
  onClickPageArrow: (direction: number) => void;
  onClickDeleteActivation: () => void;
  onClickList: (id: string, link: string) => void;

  submitHandler: (event: FormEvent<HTMLFormElement>) => void;
}

export default function TILUI(props: Props) {
  return (
    <S.Body>
      <S.ListWrapper>
        {props.tilList &&
          props.tilList.map((el, idx) => {
            return (
              <S.List
                key={el.id}
                onClick={() => props.onClickList(el.id, el.link)}
              >
                <S.OrderWrapper>
                  <p>{el.order}</p>
                  {props.activationDelete && (
                    <S.ListDeleteButton src="../../assets/delete_x.png" />
                  )}
                </S.OrderWrapper>
                <S.DivideLine />
                <p>{el.title}</p>
              </S.List>
            );
          })}
      </S.ListWrapper>
      {props.tilList.length !== 0 || (
        <S.NoList>
          <p>검색 결과가 없습니다.</p>
        </S.NoList>
      )}
      <S.PaginationSearchWrapper>
        <S.PaginationWrapper>
          <S.PageArrow onClick={() => props.onClickPageArrow(-1)}>
            &lt;
          </S.PageArrow>
          {new Array(props.pageLength).fill(1).map((_, idx) => {
            return (
              <S.Page
                key={idx}
                onClick={props.onClickPage}
                page={props.page}
                idx={idx}
              >
                {idx + 1}
              </S.Page>
            );
          })}
          <S.PageArrow onClick={() => props.onClickPageArrow(1)}>
            &gt;
          </S.PageArrow>
        </S.PaginationWrapper>
        <S.SearchWrapper>
          {props.searchVisible && (
            <S.SearchBoxWrapper onSubmit={props.submitHandler}>
              <S.SearchInput
                type="search"
                name="search"
                onChange={props.onChange}
              ></S.SearchInput>
              <S.SearchButton type="button" onClick={props.onClickSearch}>
                검색
              </S.SearchButton>
            </S.SearchBoxWrapper>
          )}
          <S.Img src="../../assets/lens.svg" onClick={props.onClickSearchImg} />
          <a href="/TIL/registration">
            <S.Img src="../../assets/writeIcon.png"></S.Img>
          </a>
          <S.Img src={Lens} onClick={props.onClickDeleteActivation}></S.Img>
        </S.SearchWrapper>
      </S.PaginationSearchWrapper>
    </S.Body>
  );
}
