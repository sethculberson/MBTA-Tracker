export type Prediction = {
    attributes : PredictionAttributes,
    id : string,
    relationships : {
        route : Data,
        stop : Data,
        trip : Data,
        vehicle : Data | null,
    },
    type : string,
}

type PredictionAttributes = {
    arrival_time? : string,
    arrival_uncertainty? : number,
    departure_time? : string,
    departure_uncertainty? : number,
    direction_id : number,
    last_trip : boolean,
    revenue : string,
    schedule_relationship? : string,
    status? : string,
    stop_sequence : number,
    update_type? : string,
}

type Data = {
    id : string,
    type : string,
}