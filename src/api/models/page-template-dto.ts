/* tslint:disable */
import { TemplateDto } from './template-dto';
import { Pageable } from './pageable';
import { Sort } from './sort';
export interface PageTemplateDto {
  numberOfElements?: number;
  content?: Array<TemplateDto>;
  first?: boolean;
  last?: boolean;
  number?: number;
  empty?: boolean;
  pageable?: Pageable;
  size?: number;
  sort?: Sort;
  totalElements?: number;
  totalPages?: number;
}
