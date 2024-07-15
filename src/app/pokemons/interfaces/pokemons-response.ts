
export interface Result{
    name:string;
    url: string;
}

export interface PokemonsResponse {
    count: number;
    nextPage: number;
    previous:null;
    results: Result[];
}
