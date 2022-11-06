import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {

  @Output() featureSelected = new EventEmitter<string>();

  openDialog() {
    alert('opened');
  }

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
  }

}
