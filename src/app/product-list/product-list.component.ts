import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productName! : string;
  @Input() productDescription! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
