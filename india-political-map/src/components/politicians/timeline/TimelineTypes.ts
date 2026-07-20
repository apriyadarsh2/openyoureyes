export interface TimelineEvent {

    year:number;

    title:string;

    subtitle?:string;

    type:
        | "birth"
        | "education"
        | "election"
        | "asset"
        | "criminal";

    value?:string;

}