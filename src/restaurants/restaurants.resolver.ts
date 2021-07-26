import { UpdateRestaurantDto } from './entities/dtos/update-restaurant.dto';
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
  async createRestaurant(
    @Args('input') createRestaurantDto: CreateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.createRestaurant(createRestaurantDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updateRestaurant(
    @Args('input') updateRestaurant: UpdateRestaurantDto,
  ): Promise<boolean> {
    try {
      await this.restaurantService.update(updateRestaurant);
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
