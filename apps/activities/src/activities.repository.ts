import { Injectable, Logger } from "@nestjs/common";
import { AbstractReository } from "@app/common";
import { ActivityDocument } from "./entities/activity.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

@Injectable()
export class ActivitiesRepository extends AbstractReository<ActivityDocument> {
    protected readonly logger = new Logger(ActivitiesRepository.name);

    constructor(
        @InjectModel(ActivityDocument.name)
        activityModel: Model<ActivityDocument>,
    ) {
        super(activityModel);
    }

}