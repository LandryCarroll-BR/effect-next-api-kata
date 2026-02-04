import { getUser } from "@/api/get-user";
import { UserProfile } from "@/features/users/components/user-profile";
import { GithubService } from "@/services/github-service";
import { FetchHttpClient } from "@effect/platform";
import { Effect } from "effect";

export async function UserProfileStatic() {
  "use cache";

  return await Effect.runPromise(
    getUser({ username: "landrycarroll-br" }).pipe(
      Effect.andThen((data) => Effect.succeed(<UserProfile user={data} />)),
      Effect.catchTags({
        HttpApiDecodeError: () => {
          return Effect.succeed(
            <pre>{JSON.stringify("Decode Error", null, 2)}</pre>,
          );
        },

        ParseError: (error) => {
          return Effect.succeed(<pre>{JSON.stringify(error, null, 2)}</pre>);
        },

        RequestError: () => {
          return Effect.succeed(
            <pre>{JSON.stringify("Request Error", null, 2)}</pre>,
          );
        },

        ResponseError: (e) => {
          return Effect.succeed(<pre>{JSON.stringify(e, null, 2)}</pre>);
        },
      }),
      Effect.provide(GithubService.Default),
      Effect.provide(FetchHttpClient.layer),
    ),
  );
}
