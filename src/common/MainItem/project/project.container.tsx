import { useRouter } from "next/navigation";

export default function MainProject() {
  const router = useRouter();

  const onClickRoute = () => {
    router.push("/skill");
  };

  return;
}
