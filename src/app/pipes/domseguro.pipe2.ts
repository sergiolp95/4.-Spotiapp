import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro2'
})
export class DomseguroPipe2 implements PipeTransform {

  constructor(private domSanitizer: DomSanitizer) {

  }

  transform(value: string, url: string, url2: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value + url2);
  }

}
