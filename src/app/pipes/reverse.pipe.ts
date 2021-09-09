import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(val:string): any {
    let res="";
   for (let i = 0; i < val.length; i++) {
    res =  val[i] +res;
     
     
   }


    return res;
  }

}
