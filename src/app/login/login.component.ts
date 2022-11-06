import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @Output() featureSelected = new EventEmitter<string>();

  constructor() { }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
