export interface SkillDataType {
  [name: string]: {
    title: string;
    desc: string;
  };
}

export const skill: SkillDataType = {
  JavaScript: {
    title: "JavaScript",
    desc: "ES5 이후 문법을 이해하고 있으며, 실무에 적용하는 코드를 작성할 수 있습니다. 원하는 작업을 수행하기 위해서 그에 알맞은 알고리즘을 적용하여 새로운 함수를 생성하고 적용할 수 있습니다.",
  },
  HTML: {
    title: "HTML",
    desc: "HTML5 문법을 이해하고 있으며, 알맞은 태그를 사용하여 각 요소를 디자인 된 페이지에 맞게 배치하여 구현할 수 있습니다.",
  },
  CSS: {
    title: "CSS",
    desc: "CSS3 문법을 이해하고 있으며, 페이지를 구성하는 각 요소에 CSS를 적용하여 알맞은 위치, 디자인을 구현할 수 있습니다.",
  },
  React: {
    title: "React",
    desc: "React의 JSX문법을 이해하고 있으며, React의 가장 큰 특징인 Component 기반의 코드를 작성하여 코드의 재사용성을 증가시킬 수 있습니다.",
  },
  Emotion: {
    title: "Emotion",
    desc: "Emotion을 통해 CSS-in-JS의 StyledComponents를 구현할 수 있습니다. ",
  },
  AWS: {
    title: "AWS",
    desc: "Amazon Web Service를 사용해 다른 사람이 접근할 수 있도록 보유한 웹 주소를 연동하고 배포할 수 있습니다.",
  },
  TypeScript: {
    title: "TypeScript",
    desc: "TypeScript를 사용하여 정적 타입을 명시할 수 있고, 타입 에러를 방지할 수 있습니다. 타입 지정을 통해서 다른 사람이 코드를 쉽게 이해할 수 있도록 할 수 있습니다.",
  },
  Docker: {
    title: "Docker",
    desc: "프로젝트 배포 시에 Docker의 필요성에 대해서 이해하고 있고, Docker를 사용한 배포를 AWS EC2에서 진행할 수 있습니다.",
  },
  Git: {
    title: "Git",
    desc: "Git을 사용한 프로젝트 및 협업의 중요성에 대해서 이해하고 있으며, Commit Message 및 Branch 생성 규칙에 대한 전반적인 지식을 가지고 있습니다.",
  },
  GraphQL: {
    title: "GraphQL",
    desc: "GraphQL을 사용한 서버와의 통신에서 원하는 데이터만을 요청할 수 있습니다.",
  },
  Nextjs: {
    title: "Nextjs",
    desc: "React와의 차이인 Server Side Rendering에 대해 이해하고 있으며, 파일 기반 라우팅을 구현할 수 있습니다.",
  },
};

export interface IntroduceDataType {
  title: string;
  content: string;
}

export const introduce = {
  title: `안녕하세요. 모든 사람이 쉽게 사용할 수 있는 웹을 지향하는 개발자, 원용현입니다.`,
  content: `● React, Next.js, Styled-component를 활용한 웹 개발 경험이 있습니다. 
● 대학 졸업 후 다시 한번 개발에 도전하고 싶다는 마음으로 12주 과정 웹 개발 부트캠프인 코드캠프를 수료하였습니다.
● 수료 이후에는 부트캠프에서 다루었던 프로젝트를 리팩토링 하기 위하여 더 공부하고, 배운 것을 적용한 새로운 포트폴리오를 제작하였습니다. 사람들과 소통하고, 알려주는 것을 좋아하여 팀 프로젝트를 진행하며 많은 부분에서 팀원들에게 도움을 주었습니다.`,
};
