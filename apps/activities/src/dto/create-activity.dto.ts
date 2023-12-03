export class CreateActivityDto {

    startDate: Date;
    endDate: Date;
    activityType: string;
    placeId: string;
    coordinates: Object;
    distance: number;
    invoiceId: string;
}
