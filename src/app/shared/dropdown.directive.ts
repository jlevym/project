import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
  }

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}

