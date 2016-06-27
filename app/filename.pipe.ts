import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({name:'filename'})
export class FileNamePipe implements PipeTransform{
    transform(value: string, args:string[]){
        if (value){
            return value.substring(0,value.indexOf("."));
        }
    }
}