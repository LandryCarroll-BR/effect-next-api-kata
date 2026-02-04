import { HttpApiSchema } from "@effect/platform";
import { Schema } from "effect";

export const GithubUserId = HttpApiSchema.param("id", Schema.String);

export const GithubUserResponse = Schema.Struct({
  login: Schema.String,
  id: Schema.Number,
  node_id: Schema.String,

  avatar_url: Schema.String,
  gravatar_id: Schema.String,

  url: Schema.String,
  html_url: Schema.String,
  followers_url: Schema.String,
  following_url: Schema.String,
  gists_url: Schema.String,
  starred_url: Schema.String,
  subscriptions_url: Schema.String,
  organizations_url: Schema.String,
  repos_url: Schema.String,
  events_url: Schema.String,
  received_events_url: Schema.String,

  type: Schema.String, // typically "User"
  user_view_type: Schema.String, // e.g. "public"
  site_admin: Schema.Boolean,

  name: Schema.NullOr(Schema.String),
  company: Schema.NullOr(Schema.String),
  blog: Schema.String, // empty string is possible; GitHub often returns "" when unset
  location: Schema.NullOr(Schema.String),
  email: Schema.NullOr(Schema.String),
  hireable: Schema.NullOr(Schema.Boolean),
  bio: Schema.NullOr(Schema.String),
  twitter_username: Schema.NullOr(Schema.String),

  public_repos: Schema.Number,
  public_gists: Schema.Number,
  followers: Schema.Number,
  following: Schema.Number,

  // ISO strings in the GitHub REST response
  created_at: Schema.String,
  updated_at: Schema.String,
});

export type GithubUserResponse = Schema.Schema.Type<typeof GithubUserResponse>;
