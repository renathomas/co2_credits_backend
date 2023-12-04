import { Type } from "class-transformer";
import { IsDate, IsString, IsObject, IsNumber, IsNotEmpty } from "class-validator";

export class CreateActivityDto {

    @IsDate()
    @Type(() => Date)
    startDate: Date;

    @IsDate()
    @Type(() => Date)
    endDate: Date;

    @IsString()
    @IsNotEmpty()
    activityType: string;

    @IsString()
    placeId: string;

    @IsObject()
    coordinates: { lat: number; long: number };

    @IsNumber()
    distance: number;

    @IsString()
    invoiceId: string;
}
