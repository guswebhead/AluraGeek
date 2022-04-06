import { Router } from '@angular/router';
import { ProductsService } from './../../../services/products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  prodData:any

  constructor(
    private prodService: ProductsService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts()
  }

  getAllProducts() {
    this.prodService.getProducts().subscribe((data: any) => {
      this.prodData = data
    })
  }

  goToProduct(id:number){
    this.route.navigate(['productDetail/'+id])
  }

}
