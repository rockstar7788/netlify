import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datePublished'
})
export class DatePublishedPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let ret = value.split('.');
    let date_now = new Date()
    let day_now = date_now.getDate();
    let moth = date_now.getMonth() + 1;
    if(ret[1] == moth){
      console.log(day_now);
      return ret = day_now - ret[0] + ' дней назад';
    }else{
      ret = moth  - ret[1] + " месяца назад";
      return ret; 
    }
  }

}
