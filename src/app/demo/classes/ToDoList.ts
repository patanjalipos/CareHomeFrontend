export interface ToDoListDetails
{
    id?: string;
    TaskName:string;
    Description:string;
    DueDate:Date;
    Time:Date;
    Status:string;
    CreatedBy:string;
}
export class PrescriptionTemplatePainAssesmentdata {
    public Id: string;
    public CaptureDate?: Date = new Date();
    public IsFromserver: boolean;
    public Rating: number;
}