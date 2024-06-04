import MainIntroduceUI from "./introduce.presenter";
import { useRouter } from "next/navigation";
import { introduce } from "../../data";

export default function MainIntroduce() {
  const router = useRouter();

  const onClickRoute = () => {
    router.push("/introduce");
  };

  return (
    <MainIntroduceUI
      introduce={introduce}
      onClickRoute={onClickRoute}
    ></MainIntroduceUI>
  );
}
