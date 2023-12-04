import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "libs/common/src";

@Schema({ versionKey: false })
export class UserDocument extends AbstractDocument {


    @Prop()
    email: string;

    @Prop()
    password: string;

    @Prop()
    firstName: string;

    @Prop()
    lastName: string;
}

export const UserSchema =
    SchemaFactory.createForClass(UserDocument);
