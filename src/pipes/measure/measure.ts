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
    { fromMeasure: 'g', from: 'g', to: 'oz', displayMeasure: 'oz' },
    { fromMeasure: 'l', from: 'l', to: 'fl-oz', displayMeasure: 'fl oz' }
  ]

  toMetricConvertTable = [
    { fromMeasure: 'oz', from: 'fl-oz', to: 'cl', displayMeasure: 'cl' },
    { fromMeasure: 'tsp', from: 'tsp', to: 'ml', displayMeasure: 'ml' },
    { fromMeasure: 'tblsp', from: 'tsp', to: 'ml', displayMeasure: 'ml' },
    { fromMeasure: 'qt', from: 'qt', to: 'l', displayMeasure: 'l' },
    { fromMeasure: 'cup', from: 'cup', to: 'ml', displayMeasure: 'ml' },
    { fromMeasure: 'cups', from: 'cup', to: 'ml', displayMeasure: 'ml' },
    { fromMeasure: 'pint', from: 'pnt', to: 'dl', displayMeasure: 'dl' },
    { fromMeasure: 'pints', from: 'pnt', to: 'dl', displayMeasure: 'dl' }
  ]

  availableMeasurements = this.toImperialConvertTable.concat(this.toMetricConvertTable).map(el => el.fromMeasure);

  transform(value: string, ...args) {
    try {
      let convertTable = args[0] === 'metric' ? this.toMetricConvertTable : this.toImperialConvertTable,
        split = value.toLowerCase().trim().split(' '),
        measurement = split.pop(),
        extras = '';

      while (!this.availableMeasurements.some(val => val === measurement) && split.length) {
        extras = extras + ' ' + measurement;
        measurement = split.pop();
      }
      let convertObject = convertTable.find(x => x.fromMeasure === measurement);

      return this.convert(split, convertObject.from, convertObject.to) + ' ' + convertObject.displayMeasure + extras;
    }
    catch (e) {
      return value;
    }
  }

  convert(split, from, to) {
    return Math.round(convert(eval(split.join('+'))).from(from).to(to))
  }
}
