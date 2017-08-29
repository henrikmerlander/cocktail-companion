import { Pipe, PipeTransform } from '@angular/core';
import * as convert from 'convert-units';

@Pipe({
  name: 'measure',
})
export class MeasurePipe implements PipeTransform {

  transform(value: string, ...args) {
    if (args[0] === 'metric') {
      var split = value.toLowerCase().trim().split(' ');
      var measurement = split.pop();

      try {
        switch (measurement) {
          case 'oz':
            return this.ozToCl(split) + 'cl';
          default:
            return value;
        }
      }
      catch (e) {
        return value;
      }
    }
    else return value;
  }

  ozToCl(split) {
    return Math.ceil(convert(eval(split.join('+'))).from('fl-oz').to('cl'))
  }
}
