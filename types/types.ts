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

export type Stop = {
    attributes : StopAttributes,
    id : string,
    relationships : {
        parent_station : Data | null,
        zone : Data | null,
        child_stops : Data[] | null,
        routes : Data[] | null,
        facilities : Data[] | null,
    },
    type : string,
}

type StopAttributes = {
    address? : string,
    description? : string,
    latitude : number,
    longitude : number,
    municipality? : string,
    name : string,
    platform_code? : string,
    platform_name? : string,
    wheelchair_boarding : number,
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