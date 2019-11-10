/* tslint:disable */
import { DiscoverDto } from './discover-dto';
export interface MovieDto {
  description?: string;
  discoverDto?: DiscoverDto;
  duration?: number;
  genres?: Array<string>;
  id?: number;
  price?: number;
  releaseDate?: string;
  title?: string;
}
