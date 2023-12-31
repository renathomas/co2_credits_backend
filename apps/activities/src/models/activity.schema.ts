import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "libs/common/src";

@Schema({ versionKey: false })
export class ActivityDocument extends AbstractDocument {

    @Prop()
    timestamp: Date;

    @Prop()
    startDate: Date;

    @Prop()
    endDate: Date;

    @Prop()
    userId: string;

    @Prop()
    activityType: string;

    @Prop()
    placeId: string;

    @Prop({ type: Object })
    coordinates: { lat: number; long: number };

    @Prop()
    distance: number;

    @Prop()
    invoiceId: string;
}

export const ActivitySchema =
    SchemaFactory.createForClass(ActivityDocument);
