/* tslint:disable */
import { CardDto } from './card-dto';
import { ReviewDto } from './review-dto';
import { SeansDto } from './seans-dto';
export interface UserDto {
  passwordConfirmation?: string;
  age?: number;
  id?: number;
  loyaltyCardDto?: CardDto;
  name?: string;
  password?: string;
  email?: string;
  reviewDto?: ReviewDto;
  roles?: Array<string>;
  seansDto?: SeansDto;
  surname?: string;
  username?: string;
}
