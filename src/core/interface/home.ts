export default interface HomeTypes {
  q: string;
  type: "artist";
}
interface Pokedex {
  external_urls: ExternalUrls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface ExternalUrls {
  spotify: string;
}

interface Followers {
  total: number;
}

interface Image {
  height: number;
  url: string;
  width: number;
}

export interface SpotifyTypes extends Image, Followers, Pokedex {}
