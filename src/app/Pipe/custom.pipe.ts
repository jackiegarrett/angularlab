import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(val): string {
    console.log(val)
    return val 
  }

}
