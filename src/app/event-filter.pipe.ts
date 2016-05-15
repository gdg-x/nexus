import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'eventFilter'
})
export class EventFilter implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.replace(/<img[^>]*>/g,"");
  }

}
