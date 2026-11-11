import Image from "next/image";
import type { Profile } from "@/data/profile";

type Props = {
  profile: Profile;
};

export default function ProfileHeader({ profile }: Props) {
  return (
    <header className="flex flex-col items-center text-center text-white">
      {/* 흰 링 + 아래로 떨어지는 그림자 + 은은한 광으로 입체감 */}
      <div className="rounded-full bg-gradient-to-br from-white/90 to-white/30 p-1.5 shadow-[0_18px_40px_rgba(8,47,73,0.35),0_0_60px_rgba(255,255,255,0.35)]">
        <Image
          src={profile.imageUrl}
          alt={`${profile.name} 프로필 사진`}
          width={160}
          height={160}
          priority
          unoptimized
          className="h-32 w-32 rounded-full object-cover shadow-inner sm:h-40 sm:w-40"
        />
      </div>
      <h1 className="mt-7 text-2xl font-bold tracking-tight drop-shadow-md sm:text-3xl">
        {profile.name}
      </h1>
      <p className="mt-2 text-sm font-medium text-white/85 sm:text-base">
        {profile.bio}
      </p>
    </header>
  );
}
