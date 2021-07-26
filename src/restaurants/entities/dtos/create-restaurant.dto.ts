import { Restaurant } from './../restaurant.entity';
import { InputType, OmitType } from '@nestjs/graphql';

@InputType()
export class CreateRestaurantDto extends OmitType(Restaurant, ['id']) {}
