import { Pipe, PipeTransform } from '@angular/core';
import * as convert from 'convert-units';

@Pipe({
  name: 'measure',
})
export class MeasurePipe implements PipeTransform {

  transform(value: string, ...args) {
    if (args[0] === 'imperial') {
      var split = value.toLowerCase().trim().split(' ');
      var measurement = split.pop();
      if (measurement != 'ml') return value;
      try {
        var fluidOunces = Math.ceil(convert(eval(split.join('+'))).from('ml').to('fl-oz') / 5) * 5
      }
      catch (e) {
        return value;
      }
      return fluidOunces + ' oz';
    }
    else if (args[0] === 'metric') {
      var split = value.toLowerCase().trim().split(' ');
      var measurement = split.pop();
      if (measurement != 'oz') return value;
      try {
        var milliliter = Math.ceil(convert(eval(split.join('+'))).from('fl-oz').to('ml') / 5) * 5
      }
      catch (e) {
        return value;
      }
      return milliliter + ' ml';
    }
    else return value;
  }
}
