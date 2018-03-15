import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImg'
})
export class NoImgPipe implements PipeTransform {

  transform(imagenes: any[]): any {

    const Noimage = 'assets/img/noimage.png';
    if (!imagenes) {
      return Noimage;
    }
    return (imagenes.length > 0)
    ? imagenes[1].url
    : Noimage;
  }

}
