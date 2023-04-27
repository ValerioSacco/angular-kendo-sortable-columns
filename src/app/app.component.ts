import { Component, OnInit } from '@angular/core';
import { orders } from './data';
import { ProductionOrder } from './model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent implements OnInit {
  public gridData: ProductionOrder[] = orders;
  public gridView: ProductionOrder[] | undefined;

  ngOnInit(): void {
    this.gridView = this.gridData;
  }
}
