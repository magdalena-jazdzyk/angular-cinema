/* tslint:disable */
import { ReviewDto } from './review-dto';
import { SeansDto } from './seans-dto';
export interface UserDto {
  passwordConfirmation?: string;
  age?: number;
  id?: number;
  name?: string;
  password?: string;
  email?: string;
  reviewDto?: ReviewDto;
  roles?: Array<string>;
  seansDto?: SeansDto;
  surname?: string;
  username?: string;
}
