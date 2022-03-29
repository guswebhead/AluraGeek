import { ProductsService } from './../../../services/products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getDataProd()
  }


  getDataProd(){
    this.prodService.getProducts().subscribe((data)=>{
      console.log(data)
    })
  }
}
