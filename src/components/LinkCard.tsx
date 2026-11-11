import type { LinkItem } from "@/data/profile";

type Props = {
  link: LinkItem;
};

export default function LinkCard({ link }: Props) {
  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-xl border border-gray-300 bg-white px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-900"
    >
      {link.title}
    </a>
  );
}
