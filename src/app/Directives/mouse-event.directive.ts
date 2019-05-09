import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appMouseEvent]'
})
export class MouseEventDirective {
  

  constructor(private el: ElementRef) { }
  @Input() defaultColor: string ;
  @Input() highlightColor: string;

  @HostListener('mouseenter')  onMouseEnter() {
    this.highLight(this.highlightColor || this.defaultColor || 'orange');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highLight(null);
  }
  private highLight(color) {
    this.el.nativeElement.style.backgroundColor= color;
  }
}
