import { TweetWhereUniqueInput } from "../tweet/TweetWhereUniqueInput";

export type CommentUpdateInput = {
  author?: string | null;
  content?: string | null;
  timestamp?: Date | null;
  tweet?: TweetWhereUniqueInput | null;
};
