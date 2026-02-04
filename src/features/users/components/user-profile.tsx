import { User } from "@/models/user";

export function UserProfile({ user }: { user: User }) {
  return (
    <div>
      <h1>{user.displayName ?? user.username}</h1>
      <img
        src={user.avatarUrl}
        alt={`${user.username}'s avatar`}
        width={100}
        height={100}
      />
      <p>
        Profile: <a href={user.profileUrl}>{user.profileUrl}</a>
      </p>
    </div>
  );
}
