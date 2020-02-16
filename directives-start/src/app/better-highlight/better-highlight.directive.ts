import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') backGroundColor: string;
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
  // this is better because setStyle uses service workers where as the other highlight will throw error if the dom is not ready
  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backGroundColor = this.defaultColor;
  }
  // listens for when a mouse enters this element
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backGroundColor = this.highlightColor;
  }
  // listens for when a mouse leaves this element
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backGroundColor = this.defaultColor;
  }
}
