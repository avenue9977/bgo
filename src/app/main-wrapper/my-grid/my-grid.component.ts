import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrls: ['./my-grid.component.css']
})
export class MyGridComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'action'];
  data = [
    {id: 1, title: 'Hydrogen'},
    {id: 2, title: 'Helium'},
    {id: 3, title: 'Lithium'},
    {id: 4, title: 'Beryllium'},
    {id: 5, title: 'Boron'},
    {id: 6, title: 'Carbon'},
    {id: 7, title: 'Nitrogen'},
    {id: 8, title: 'Oxygen'},
    {id: 9, title: 'Fluorine'},
    {id: 10, title: 'Neon'},
    {id: 11, title: 'Sodium'},
    {id: 12, title: 'Magnesium'},
    {id: 13, title: 'Aluminum'},
    {id: 14, title: 'Silicon'},
    {id: 15, title: 'Phosphorus'},
    {id: 16, title: 'Sulfur'},
    {id: 17, title: 'Chlorine'},
    {id: 18, title: 'Argon'},
    {id: 19, title: 'Potassium'},
    {id: 20, title: 'Calcium'},
  ];
  dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  onRemove(id) {
    const selected = this.data.find((element) => {
      return element.id === id;
    });

    const index = this.data.indexOf(selected);

    this.data.splice(index, 1);

    this.dataSource = new MatTableDataSource(this.data);
  }
}
