// 보여주기용 더미 데이터입니다. 실제 내용은 나중에 이 파일만 수정하면 됩니다.

export type Profile = {
  name: string;
  bio: string;
  imageUrl: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
  emoji: string;
};

export const profile: Profile = {
  name: "홍길동",
  bio: "풀스택 개발자 지망 | AI 활용 개발 학습 중",
  imageUrl: "https://placehold.co/160x160/orange/white",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://github.com/", emoji: "🐙" },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/",
    emoji: "💼",
  },
  { id: "blog", title: "Blog", url: "https://example.com/", emoji: "✍️" },
];
