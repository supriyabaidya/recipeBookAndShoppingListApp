import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements OnInit {
  // @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('class.open') isOpen: boolean;

  @HostListener('click') click() {
    this.isOpen = !this.isOpen;
    // console.log('click');
  }

  ngOnInit() {
    this.isOpen = false;
  }
}
