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
import { AdminUpdateManyWithoutManagersInput } from "./AdminUpdateManyWithoutManagersInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
  IsNumber,
  Min,
  Max,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ManagerUpdateInput {
  @ApiProperty({
    required: false,
    type: () => AdminUpdateManyWithoutManagersInput,
  })
  @ValidateNested()
  @Type(() => AdminUpdateManyWithoutManagersInput)
  @IsOptional()
  @Field(() => AdminUpdateManyWithoutManagersInput, {
    nullable: true,
  })
  admins?: AdminUpdateManyWithoutManagersInput;

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
  location?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  rates?: number | null;
}

export { ManagerUpdateInput as ManagerUpdateInput };
