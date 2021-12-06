import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EmployeeGridComponent implements AfterViewInit, OnInit {

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

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  cellsrenderer(row:any, columnfield:any, value:any, defaulthtml:any, columnproperties:any) {
    if (value < 20) {
      return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #0000ff;">' + value + '</span>';
    }
    else {
      return '<span style="margin: 4px; float: ' + columnproperties.cellsalign + '; color: #008000;">' + value + '</span>';
    }
  }
}
