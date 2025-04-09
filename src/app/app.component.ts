import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('childRef') child!: ElementRef
  bgColor!: string;
  textColor!: string;
  updateBg() {
    this.child.nativeElement.style.backgroundColor = this.bgColor
  }
  updateText() {
    this.child.nativeElement.style.color = this.textColor
  }
}
