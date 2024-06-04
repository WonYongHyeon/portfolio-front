import { skill } from "../../data";
import MainSkillUI from "./skill.presenter";
import { useRouter } from "next/navigation";

export default function MainSkill() {
  const router = useRouter();

  const onClickRoute = () => {
    router.push("/skill");
  };
  return <MainSkillUI skill={skill} onClickRoute={onClickRoute}></MainSkillUI>;
}
