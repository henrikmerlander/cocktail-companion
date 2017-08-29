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
            return this.convert(split, 'fl-oz', 'cl') + 'cl';
          default:
            return value;
        }
      }
      catch (e) {
        return value;
      }
    }
    else if (args[0] === 'imperial') {
      var split = value.toLowerCase().trim().split(' ');
      var measurement = split.pop();

      try {
        switch (measurement) {
          case 'cl':
            return this.convert(split, 'cl', 'fl-oz') + 'oz';
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

  convert(split, from, to) {
    return Math.ceil(convert(eval(split.join('+'))).from(from).to(to))
  }
}
