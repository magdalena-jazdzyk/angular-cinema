/* tslint:disable */
import { MovieDto } from './movie-dto';
export interface VideoDto {
  id?: number;
  keyHash?: string;
  movie?: MovieDto;
  name?: string;
  site?: string;
}
