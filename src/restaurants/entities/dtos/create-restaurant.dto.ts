import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class CreateRestaurantDto {
  @Field(() => String)
  name: string;
  @Field(() => Boolean, { nullable: true })
  isVegan: boolean;
  @Field(() => Boolean, { nullable: true })
  address: string;
  @Field(() => Boolean, { nullable: true })
  ownerName: string;
}
