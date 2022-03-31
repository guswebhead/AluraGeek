import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from './../../../services/products/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productId!: number
  productData: any
  similarProd: any

  constructor(
    private prodService: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((paramMap) => {
      this.productId = Number(paramMap['idProduct']);
    })

    this.getProdById()
  }

  getProdById() {
    this.prodService.getProducts().subscribe((data) => {
      let itemFiltered = data.filter((x: any) => x.id == this.productId)
      this.productData = itemFiltered[0]


      this.similarProd = data.filter((x: any) => x.type == this.productData.type)


    })
  }

  goToItem(id: number) {
    this.router.navigate(['productDetail/' + id])
    this.ngOnInit()
  }

}
