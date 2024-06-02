"use client"; // this is a client component

import MainUI from "./main.presenter";
import { useRouter } from "next/navigation";
import { skill, introduce } from "../../common/data";
import Swal from "sweetalert2";

export default function Main() {
  const router = useRouter();

  const onClickRoute = (link: string) => {
    router.push("/" + link);
  };

  const onClickSkillBox = (text: string) => {
    Swal.fire({
      title: text,
      html: `<p style="text-align: start">${skill[text]["desc"]}</p>`,
    });
  };

  return (
    <MainUI
      skill={skill}
      introduce={introduce}
      onClickRoute={onClickRoute}
      onClickSkillBox={onClickSkillBox}
    ></MainUI>
  );
}
