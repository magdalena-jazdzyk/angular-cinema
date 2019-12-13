import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const strings = value.split(':');
    return strings[0].concat(':').concat(strings[1]);
  }

}
