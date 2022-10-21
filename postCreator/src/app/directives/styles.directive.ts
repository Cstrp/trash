import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyles]',
})
export class StylesDirective {
  // @Input('appStyles') color: string = 'blue';
  // @Input() dStyles!: {
  //   border: string;
  //   fontWeight?: string;
  //   borderRadius?: string;
  //   padding: string;
  //   transition: string;
  // };
  constructor(private elemRef: ElementRef, private renderer: Renderer2) {}

  // @HostBinding('style.color') color: string | null = null;
  @HostListener('click', ['$event.target'])
  onClick(evt: Event) {
    console.log(evt);
  }

  @HostListener('mouseenter') mouseMove() {
    // this.color = 'blue';
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   'fontWeight',
    //   this.dStyles.fontWeight
    // );
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   'border',
    //   this.dStyles.border
    // );
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   'borderRadius',
    //   this.dStyles.borderRadius
    // );
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   'padding',
    //   this.dStyles.padding
    // );
    // this.renderer.setStyle(
    //   this.elemRef.nativeElement,
    //   'transition',
    //   this.dStyles.transition
    // );
  }

  @HostListener('mouseleave') mouseLeave() {
    // this.color = null;
    // this.renderer.setStyle(this.elemRef.nativeElement, 'color', null);
    // this.renderer.setStyle(this.elemRef.nativeElement, 'fontWeight', null);
    // this.renderer.setStyle(this.elemRef.nativeElement, 'border', null);
    // this.renderer.setStyle(this.elemRef.nativeElement, 'borderRadius', null);
    // this.renderer.setStyle(this.elemRef.nativeElement, 'padding', null);
    // this.renderer.setStyle(this.elemRef.nativeElement, 'transition', null);
  }
}
