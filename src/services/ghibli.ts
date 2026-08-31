const BASE_URL = "https://ghibliapi.vercel.app";

export interface Film {
  id: string;
  title: string;
  image: string;
  description: string;
  director: string;
}

export const getFilms = async () => {
  const response = await fetch(`${BASE_URL}/films`);
  const data = await response.json();
  return data as Film[];
};
