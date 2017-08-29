import { Pipe, PipeTransform } from '@angular/core';
import * as convert from 'convert-units';

@Pipe({
  name: 'measure',
})
export class MeasurePipe implements PipeTransform {

  toImperialConvertTable = [
    { fromMeasure: 'cl', from: 'cl', to: 'fl-oz', displayMeasure: 'fl oz' },
    { fromMeasure: 'ml', from: 'ml', to: 'fl-oz', displayMeasure: 'fl oz' },
    { fromMeasure: 'gr', from: 'g', to: 'oz', displayMeasure: 'oz' },
    { fromMeasure: 'g', from: 'g', to: 'oz', displayMeasure: 'oz' }
  ]

  toMetricConvertTable = [
    { fromMeasure: 'oz', from: 'fl-oz', to: 'cl', displayMeasure: 'cl' },
    { fromMeasure: 'tsp', from: 'tsp', to: 'ml', displayMeasure: 'ml' },
    { fromMeasure: 'tblsp', from: 'tsp', to: 'ml', displayMeasure: 'ml' },
    { fromMeasure: 'qt', from: 'qt', to: 'l', displayMeasure: 'l' },
    { fromMeasure: 'cup', from: 'cup', to: 'ml', displayMeasure: 'ml' }
  ]

  transform(value: string, ...args) {
    if (args[0] === 'metric') {
      var split = value.toLowerCase().trim().split(' ');
      var measurement = split.pop();

      try {
        var convertObject = this.toMetricConvertTable.find(x => x.fromMeasure == measurement);
        return this.convert(split, convertObject.from, convertObject.to) + ' ' + convertObject.displayMeasure;
      }
      catch (e) {
        return value;
      }
    }
    else if (args[0] === 'imperial') {
      var split = value.toLowerCase().trim().split(' ');
      var measurement = split.pop();

      try {
        var convertObject = this.toImperialConvertTable.find(x => x.fromMeasure === measurement);
        return this.convert(split, convertObject.from, convertObject.to) + ' ' + convertObject.displayMeasure;
      }
      catch (e) {
        return value;
      }
    }
    else return value;
  }

  convert(split, from, to) {
    return Math.round(convert(eval(split.join('+'))).from(from).to(to))
  }
}
