import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => String)
  name: string;

  @Field(() => Boolean, { nullable: true })
  isVegan: boolean;
  @Field(() => Boolean, { nullable: true })
  address: string;
  @Field(() => Boolean, { nullable: true })
  ownerName: string;
}
