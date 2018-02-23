import { Directive } from '@angular/core';

@Directive({
  selector: '[appEqualheight]'
})
export class EqualheightDirective {

  constructor() { }

  createEqualHeightColumns(parent: HTMLElement, className: string) {

    const childrenArr = parent.getElementsByClassName(className);

    const itemHeights:any = [];
    childrenArr.forEach(x => itemHeights.push(x.clientHeight));

    const maxHeight = Math.max(...itemHeights);

    childrenArr.forEach((x: HTMLElement) => x.style.height = '' + maxHeight + 'px');

   // const itemHeights = childrenArr.map(x => x.height);

  }


}
