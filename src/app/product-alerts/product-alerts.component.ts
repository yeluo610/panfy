import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

import {Product, products} from "../products";
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {

  @Input() product!: Product
  @Output() notify=new EventEmitter();
  products=products;
  share(){
    window.alert('The product has been shared!')
  }
  onNotify(){
    window.alert("You will notified when the product goes on sale!")
  }
  constructor() { }

  ngOnInit() {
  }

}