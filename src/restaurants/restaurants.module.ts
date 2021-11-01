import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryResolver, RestaurantResolver } from './restaurants.resolver';
import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurants.service';
import { Restaurant } from './entities/restaurant.entity';

import { CategoryRepository } from './repositories/category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Restaurant, CategoryRepository])],
  providers: [RestaurantResolver, CategoryResolver, RestaurantService],
})
export class RestaurantsModule {}
