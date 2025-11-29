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

export type Route = {
    attributes : RouteAttributes,
    id : string,
    links : {
        self : string
    }
    relationships : {
        agency : {
            data : Data
        },
        line : {
            data : Data
        },
    },
    type : string,
}

type RouteAttributes = {
    color : string,
    description : string,
    direction_destinations : string[],
    direction_names : string[],
    fare_class : string,
    listed_route: boolean,
    long_name : string,
    short_name : string,
    sort_order : number,
    text_color : string,
    type : number,
}

export type Stop = {
    attributes : StopAttributes,
    id : string,
    links : {
        self: string,
    },
    relationships : {
        parent_station : {
            data : Data | null,
        },
        zone : {
            data : Data | null,
        },
        child_stops? : Data[],
        routes? : Data[],
        facilities : {
            links : {
                related : string,
            }
        },
    },
    type : string,
}

type StopAttributes = {
    address : string | null,
    at_street : string | null,
    description : string | null,
    latitude : number,
    location_type : number,
    longitude : number,
    municipality : string | null,
    name : string,
    on_street : string | null,
    platform_code : string | null,
    platform_name : string | null,
    vehicle_type : number | null,
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