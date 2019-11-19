import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeRead'
})
export class TimeReadPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let text = value.split(' ').length / 2.5;
    if(text < 60){
      return Math.round(text) + " секунд"
    }
    else{
      return Math.round(text/60) + " минуты" 
    }
  }

}
