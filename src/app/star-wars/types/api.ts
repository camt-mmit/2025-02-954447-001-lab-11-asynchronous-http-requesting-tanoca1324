export interface ResourceItem {
readonly created: string;
readonly edited: string;
readonly url: string;
}
export interface ResultsList<T> {
readonly count: number;
readonly previous: string | null;
readonly next: string | null;
readonly results: readonly T[];
}
export interface ResultsListParams {
readonly search?: string;
readonly page?: string;
}
export interface Person extends ResourceItem {
readonly name: string;
readonly birth_year: string;
readonly eye_color: string;
readonly gender: string;
readonly hair_color: string;
readonly height: string;
readonly mass: string;
readonly skin_color: string;
readonly homeworld: string|null;
readonly films: readonly string[];
readonly species: readonly string[];
readonly starships: readonly string[];
readonly vehicles: readonly string[];
}

export interface Film extends ResourceItem {
  readonly title: string; // The title of this film
  readonly episode_id: number; // The episode number of this film.
  readonly opening_crawl: string; // The opening paragraphs at the beginning of this film.
  readonly director: string; // The name of the director of this film.
  readonly producer: string; // The name(s) of the producer(s) of this film. Comma separated.
  readonly release_date: string; // The ISO 8601 date format of film release at original creator country.
  readonly species: readonly string[]; // An array of species resource URLs that are in this film.
  readonly starships: readonly string[]; // An array of starship resource URLs that are in this film.
  readonly vehicles: readonly string[]; // An array of vehicle resource URLs that are in this film.
  readonly characters: readonly string[]; // An array of people resource URLs that are in this film.
  readonly planets: readonly string[]; // An array of planet resource URLs that are in this film.
}

export interface Planet extends ResourceItem {
  readonly name: string; // The name of this planet.
  readonly diameter: string; // The diameter of this planet in kilometers.
  readonly rotation_period: string; // The number of standard hours it takes for this planet to complete a single rotation on its axis.
  readonly orbital_period: string; // The number of standard days it takes for this planet to complete a single orbit of its local star.
  readonly gravity: string; //  A number denoting the gravity of this planet, where "1" is normal or 1 standard G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
  readonly population: string; // The average population of sentient beings inhabiting this planet.
  readonly climate: string; // The climate of this planet. Comma separated if diverse.
  readonly terrain: string; // The terrain of this planet. Comma separated if diverse.
  readonly surface_water: string; // The percentage of the planet surface that is naturally occurring water or bodies of water.
  readonly residents: readonly string[]; // An array of People URL Resources that live on this planet.
  readonly films: readonly string[]; // An array of Film URL Resources that this planet has appeared in.
}
