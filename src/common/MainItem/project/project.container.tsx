import { useRouter } from "next/navigation";
import MainProjectUI from "./project.presenter";

export default function MainProject() {
  const router = useRouter();

  const onClickRoute = () => {
    router.push("/project");
  };

  return <MainProjectUI onClickRoute={onClickRoute}></MainProjectUI>;
}
