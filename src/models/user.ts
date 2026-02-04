import { Schema } from "effect";

export const UserId = Schema.Number; // or branded number
export const Username = Schema.String;

export const User = Schema.Struct({
  id: UserId,
  username: Username,
  avatarUrl: Schema.String,
  profileUrl: Schema.String,
  displayName: Schema.NullOr(Schema.String),
});
export type User = Schema.Schema.Type<typeof User>;
