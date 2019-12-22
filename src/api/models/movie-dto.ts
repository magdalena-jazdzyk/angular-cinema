/* tslint:disable */
import { DiscoverDto } from './discover-dto';
import { ImageDto } from './image-dto';
export interface MovieDto {
  description?: string;
  discoverDto?: DiscoverDto;
  duration?: number;
  genres?: Array<string>;
  id?: number;
  imageDtos?: Array<ImageDto>;
  price?: number;
  releaseDate?: string;
  title?: string;
}
