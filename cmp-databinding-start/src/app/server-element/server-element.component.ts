import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges,
  DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // emulated says apply all css within this component to its properties
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // input decorator allows element variable to bound from outside to parent component
  @Input() element: {type: string, name: string, content: string};
  @Input() name: string;
  @ViewChild('heading', {static: false}) header: ElementRef;
  @ContentChild('contentParagraph', {static: false}) paragraph: ElementRef;

  constructor() {
    console.log('constructor was called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges is called');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit is called');
  }

  ngDoCheck() {
    console.log('ngDoCheck is called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit is called!');
    console.log('Text Content of paragraph:' + this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit is called!');
    console.log('Text Content in view init:' + this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
