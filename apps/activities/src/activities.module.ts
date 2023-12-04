import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { DatabaseModule, LoggerModule } from '@app/common';
import { ActivitiesRepository } from './activities.repository';
import { ActivityDocument, ActivitySchema } from './entities/activity.schema';

@Module({
  imports: [
    DatabaseModule,
    DatabaseModule.forFeature([
      { name: ActivityDocument.name, schema: ActivitySchema }
    ]),
    LoggerModule,
  ],
  controllers: [ActivitiesController],
  providers: [ActivitiesService, ActivitiesRepository],
})
export class ActivitiesModule { }
