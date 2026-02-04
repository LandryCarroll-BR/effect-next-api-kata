import { UserProfileDynamic } from "@/features/users/components/user-profile-dynamic";
import { UserProfileStatic } from "@/features/users/components/user-profile-static";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <UserProfileDynamic />
      </Suspense>
      <UserProfileStatic />
    </div>
  );
}
