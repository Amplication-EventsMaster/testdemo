/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
  IsDate,
} from "class-validator";
import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { Type } from "class-transformer";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

@InputType()
class TweetCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  author?: string | null;

  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutTweetsInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutTweetsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  content?: string | null;

  @ApiProperty({
    required: false,
    type: () => LikeCreateNestedManyWithoutTweetsInput,
  })
  @ValidateNested()
  @Type(() => LikeCreateNestedManyWithoutTweetsInput)
  @IsOptional()
  @Field(() => LikeCreateNestedManyWithoutTweetsInput, {
    nullable: true,
  })
  likes?: LikeCreateNestedManyWithoutTweetsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  timestamp?: Date | null;
}

export { TweetCreateInput as TweetCreateInput };
