import { AfterContentInit, ContentChild, Directive, ElementRef, HostListener, Input } from '@angular/core';
@Directive({
  selector: '[appViewPassword]'
})
export class ViewPasswordDirective implements AfterContentInit {
  @ContentChild('passwordLabel') passwordLabel!: ElementRef;
  @ContentChild('passwordCheckBox') passwordCheckBox!: ElementRef;
  @ContentChild('passwordField') passwordField!: ElementRef;
  @ContentChild('repeatPasswordField') repeatPasswordField!: ElementRef;

  shouldShow = false;

  constructor(private el: ElementRef) { }

  ngAfterContentInit() {
    const check = this.passwordCheckBox.nativeElement;

    check.addEventListener('click', () => {
      this.toggle();
    });
  }

  toggle() {
    const field = this.passwordField.nativeElement;
    const repeatField = this.repeatPasswordField?.nativeElement;
    const label = this.passwordLabel.nativeElement;

    this.shouldShow = !this.shouldShow;

    if (this.shouldShow) {
      field.setAttribute('type', 'text');
      repeatField?.setAttribute('type', 'text');
      label.innerHTML = label.innerHTML.replace('Show', 'Hide');
    } else {
      field.setAttribute('type', 'password');
      repeatField?.setAttribute('type', 'password');
      label.innerHTML = label.innerHTML.replace('Hide', 'Show');
    }
  }

}
