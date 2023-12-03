import { Injectable, Logger } from "@nestjs/common";
import { AbstractReository } from "libs/common/src";
import { ActivityDocument } from "./entities/activity.schema";

@Injectable()
export class ActivitiesRepository extends AbstractReository<ActivityDocument> {
    protected readonly logger: Logger;
}