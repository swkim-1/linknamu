import Image from "next/image";
import type { Profile } from "@/data/profile";

type Props = {
  profile: Profile;
};

export default function ProfileHeader({ profile }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.imageUrl}
        alt={`${profile.name} 프로필 사진`}
        width={160}
        height={160}
        priority
        unoptimized
        className="h-32 w-32 rounded-full object-cover sm:h-40 sm:w-40"
      />
      <h1 className="mt-6 text-xl font-bold sm:text-2xl">{profile.name}</h1>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 sm:text-base">
        {profile.bio}
      </p>
    </header>
  );
}
