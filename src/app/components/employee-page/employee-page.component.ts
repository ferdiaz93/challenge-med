import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {

  constructor() { }
  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog'
  ];

  columns = [
    { text: 'Id', datafield: 'id' },
    { text: 'Name', datafield: 'name' }
  ];

  source = new jqx.dataAdapter({
    localData: [
      { id: 1, name: 'Hydrogen' },
      { id: 2, name: 'Helium' },
      { id: 3, name: 'Lithium' },
      { id: 4, name: 'Beryllium' },
      { id: 5, name: 'Boron' },
      { id: 6, name: 'Carbon' },
      { id: 7, name: 'Nitrogen' },
      { id: 8, name: 'Oxygen' },
      { id: 9, name: 'Fluorine' },
      { id: 10, name: 'Neon' },
      { id: 11, name: 'Sodium' },
      { id: 12, name: 'Magnesium' },
      { id: 13, name: 'Aluminum' },
      { id: 14, name: 'Silicon' },
      { id: 15, name: 'Phosphorus' },
      { id: 16, name: 'Sulfur' },
      { id: 17, name: 'Chlorine' },
      { id: 18, name: 'Argon' },
      { id: 19, name: 'Potassium' },
      { id: 20, name: 'Calcium' }
    ]
  });

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
  ngOnInit(): void {
  }

}
