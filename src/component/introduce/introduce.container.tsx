"use client"; // this is a client component

import { MouseEvent, useEffect, useState } from "react";
import IntroduceUI from "./introduce.presenter";
import axios from "axios";

interface Data {
  introduceData: {
    title: string;
    subtitle: string;
    desc: Array<string>;
  }[];
  aboutData: {
    title: string;
    desc: string;
  }[];
  etcData: {
    title: string;
    desc: string;
    link: string;
  }[];
}

export default function Introduce() {
  const [data, setData] = useState<Data | undefined>();

  const onClickLink = (event: MouseEvent<HTMLParagraphElement>) => {
    window.location.href = event.currentTarget.innerText;
  };

  useEffect(() => {
    axios
      .get("http://localhost:3002/introduce")
      .then((res) => {
        setData(res.data);
      })
      .catch(function (error) {
        // handle error
      });
  }, []);

  return <IntroduceUI data={data} onClickLink={onClickLink}></IntroduceUI>;
}
