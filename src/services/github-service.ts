import { GitHubApi } from "@/lib/github/github-client";
import { makeTestLayer } from "@/utils/layer";
import { HttpApiClient } from "@effect/platform";
import { Effect } from "effect";

export class GithubService extends Effect.Service<GithubService>()(
  "GithubService",
  {
    effect: Effect.succeed({
      getUser: Effect.fn("services/github-service")(function* ({
        id,
      }: {
        id: string;
      }) {
        const client = yield* HttpApiClient.make(GitHubApi, {
          baseUrl: "https://api.github.com",
        });

        return yield* client.Users.getUser({
          path: {
            id,
          },
        });
      }),
    }),
  },
) {
  static Test = makeTestLayer(GithubService)({});
}
