import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import MainTilUI from "./til.presenter";

export default function MainTil() {
  const router = useRouter();
  const [tilList, setTilList] = useState<
    Array<{
      id: string;
      order: string;
      title: string;
      link: string;
    }>
  >([]);

  const onClickItem = (link: string) => {
    router.push(link);
  };

  /** 서버에서 TIL 리스트를 받아오는 함수 */
  const getTilList = () => {
    axios
      .get("http://localhost:3002/main/TIL")
      .then(function (response) {
        const tilList = response.data.tilList;
        setTilList(tilList);
        console.log(tilList);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  };

  useEffect(() => {
    getTilList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <MainTilUI tilList={tilList} onClickItem={onClickItem}></MainTilUI>;
}
