export interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
  species: string;
  gender: string;
  location: {
    name: string;
  };
  created: string;
}

export interface ApiResponse {
  results: Character[];
  info: {
    pages: number;
  };
}
