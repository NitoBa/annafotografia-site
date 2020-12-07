export interface PackDetails {
    quantity: string;
    delivery: string;
    looks: string;
    brind: string;
}

export interface Pack {
    id: string;
    icon: string;
    title: string;
    price: string;
    path: string;
    details: PackDetails;
}