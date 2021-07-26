import { RestaurantService } from './restaurants.service';
import { CreateRestaurantDto } from './entities/dtos/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation(() => Boolean)
  createRestaurant(
    @Args() createRestaurantInput: CreateRestaurantDto,
  ): boolean {
    console.log(createRestaurantInput);

    return true;
  }
}
