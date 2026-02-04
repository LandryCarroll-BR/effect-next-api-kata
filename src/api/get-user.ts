import { User } from "@/models/user";
import { GithubService } from "@/services/github-service";
import { Effect, Schema } from "effect";

export const getUser = Effect.fn(function* ({
  username,
}: {
  username: string;
}) {
  return yield* GithubService.pipe(
    Effect.andThen((service) =>
      Effect.gen(function* () {
        const githubUser = yield* service.getUser({ id: username });
        return yield* Schema.decode(User)({
          id: githubUser.id,
          username: githubUser.login,
          avatarUrl: githubUser.avatar_url,
          profileUrl: githubUser.html_url,
          displayName: githubUser.name,
        });
      }),
    ),
  );
});
