import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  isClassAdded = false;
  @Output() landingFinish = new EventEmitter<boolean>();
  @Input() public name: string = '';


  get nombre(){
    return this.name;
  }


  toggleClass(){
    this.isClassAdded = !this.isClassAdded;
    this.landingFinish.emit(this.isClassAdded);
    
  }

}
