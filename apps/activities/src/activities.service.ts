import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ActivitiesRepository } from './activities.repository';

@Injectable()
export class ActivitiesService {
  constructor(
    private readonly activitiesRepository: ActivitiesRepository,
  ) {

  }

  create(createActivityDto: CreateActivityDto) {
    return this.activitiesRepository.create({
      ...createActivityDto,
      timestamp: new Date(),
      userId: '1243',
    });
  }

  findAll() {
    return this.activitiesRepository.find({});
  }

  findOne(_id: string) {
    return this.activitiesRepository.findOne({ _id });
  }

  update(_id: string, updateActivityDto: UpdateActivityDto) {
    return this.activitiesRepository.findOneAndUpdate(
      { _id },
      { $set: updateActivityDto }
    );
  }

  remove(_id: string) {
    return this.activitiesRepository.findOneAndDelete({ _id });
  }
}
