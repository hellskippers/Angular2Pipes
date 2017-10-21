import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:"HSCapital"
})
export class HSCapitalPipe implements PipeTransform{
    public transform(value:any){
        const str = String(value);
        return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase();
    }
}