import { GithubUserId, GithubUserResponse } from "@/lib/github/github-schema";
import { HttpApi, HttpApiEndpoint, HttpApiGroup } from "@effect/platform";

export const GitHubApi = HttpApi.make("GitHubApi").add(
  HttpApiGroup.make("Users").add(
    HttpApiEndpoint.get("getUser")`/users/${GithubUserId}`.addSuccess(
      GithubUserResponse,
    ),
  ),
);
