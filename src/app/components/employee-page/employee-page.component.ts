import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

const EMPLOYEES: any[] = [
  {legajo: 1, name: 'Fernando', lastName: 'diaz', dni: "123123", phone: "116321313"},
  {legajo: 2, name: 'Carlos', lastName: 'Helium', dni: "4.0026", phone: "4.0026"},
  {legajo: 3, name: 'Pedro', lastName: 'Lithium', dni: "6.941", phone: "6.941"},
  {legajo: 4, name: 'Pablo', lastName: 'Beryllium', dni: "9.0122", phone: "9.0122"},
  {legajo: 5, name: 'Jose', lastName: 'Boron', dni: "10.811", phone: "10.811"},
  {legajo: 6, name: 'Esteban', lastName: 'Carbon', dni: "12.0107", phone: "12.0107"},
];

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss']
})
export class EmployeePageComponent implements OnInit {
  //columnas para la lib jqxGrid
  columns = [
    { text: 'Id', datafield: 'id' },
    { text: 'Name', datafield: 'name' }
  ];
  //mock para la lib jqxGrid
  source = new jqx.dataAdapter({
    localData: [
      { id: 1, name: 'Hydrogen', cellsrenderer:this.cellsrenderer },
      { id: 2, name: 'Helium', cellsrenderer:this.cellsrenderer },
      { id: 3, name: 'Lithium', cellsrenderer:this.cellsrenderer },
      { id: 4, name: 'Beryllium', cellsrenderer:this.cellsrenderer },
      { id: 5, name: 'Boron', cellsrenderer:this.cellsrenderer },
      { id: 6, name: 'Carbon', cellsrenderer:this.cellsrenderer },
      { id: 7, name: 'Nitrogen', cellsrenderer:this.cellsrenderer },
      { id: 8, name: 'Oxygen', cellsrenderer:this.cellsrenderer },
      { id: 9, name: 'Fluorine', cellsrenderer:this.cellsrenderer },
      { id: 10, name: 'Neon', cellsrenderer:this.cellsrenderer },
      { id: 11, name: 'Sodium', cellsrenderer:this.cellsrenderer },
      { id: 12, name: 'Magnesium', cellsrenderer:this.cellsrenderer },
      { id: 13, name: 'Aluminum', cellsrenderer:this.cellsrenderer },
      { id: 14, name: 'Silicon', cellsrenderer:this.cellsrenderer },
      { id: 15, name: 'Phosphorus', cellsrenderer:this.cellsrenderer },
      { id: 16, name: 'Sulfur', cellsrenderer:this.cellsrenderer },
      { id: 17, name: 'Chlorine', cellsrenderer:this.cellsrenderer },
      { id: 18, name: 'Argon', cellsrenderer:this.cellsrenderer },
      { id: 19, name: 'Potassium', cellsrenderer:this.cellsrenderer },
      { id: 20, name: 'Calcium' }
    ]
  });

  dataSource:any = EMPLOYEES;
  selectedEmployee:any = [];
  displayedColumns: string[] = ['legajo', 'name', 'lastName', 'dni', 'phone'];
  //seleccion de elementos por ID
  @ViewChild("EmployeeList", {read: MatTable}) EmployeeList: MatTable<any>;
  @ViewChild("SelectedEmployeeList", {read: MatTable}) SelectedEmployeeList: MatTable<any>;
  
  constructor(public dialog: MatDialog) { }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
    //actualizacion de tablas
    this.EmployeeList.renderRows();
    this.SelectedEmployeeList.renderRows();
  }
  ngOnInit(): void {
  }

  cellsrenderer(row:any, columnfield:any, value:any, defaulthtml:any, columnproperties:any) {
      return '<span class="test" style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #0000ff;" cdkDrag>' + value + '</span>';
  }

  openDialog() {
    this.dialog.open(DialogEmployeeSelectedDialog, {
      data: this.selectedEmployee,
    });
  }
}


//componente modal que muestra empleados seleccionados
@Component({
  selector: './dialog-employee-selected-dialog',
  templateUrl: './dialog-employee-selected-dialog.html',
})
export class DialogEmployeeSelectedDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Array<any>) {}
}