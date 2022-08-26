import { Component, OnInit, Output } from '@angular/core';
import { ICustomer } from '../customer';
import { CustomerSelectedService } from '../customer-selected.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: ICustomer[] = [
    {id: 1, name: "Marco", address: "Via carbonara 30", city: "Bologna", orders: [{number: 1, total: 400, items: 14}, {number: 2, total: 190, items: 6}] },
    {id: 2, name: "Giovanni", address: "Via marsala 12", city: "Ferrara", orders: [{number: 1, total: 132, items: 4}, {number: 2, total: 700, items: 20}] }
  ];


  constructor(private _customerSelectedService: CustomerSelectedService) { }

  ngOnInit(): void {
  }

  selectedCustomer(customer: ICustomer) {
    this._customerSelectedService.sendCustomer(customer)
    console.log(customer);
    
  }
}
