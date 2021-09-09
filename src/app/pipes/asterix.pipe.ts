import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {
  transform(val:any): any {
    let result="";
    for (let i = 0; i < val.length; i++) {
       if( (val[i]=="a") || (val[i]=="e") || (val[i]=="i") || (val[i]=="o") || (val[i]=="u")  ){
        result= result +  "*";
         

       }
       else{
        result = result + val[i];

       }
    }
    return result;
  }

}
