import { Component, HostListener, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { ProductsService } from './../../../services/products/products.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  // alteração dinamica dos itens da grid
  @HostListener('window:resize', ['$event'])
  onResize(event?: any) {
    this.windowSize = window.innerWidth;
    if (this.windowSize < 1024) {
      this.starData = this.starData.slice(0, 4)
      this.consoleData = this.consoleData.slice(0, 4)
      this.diversosData = this.diversosData.slice(0, 4)
    } else {
      this.getDataProd()
    }
  }

  starData: any
  consoleData: any
  diversosData: any
  windowSize: any
  staticSizePage: any = window.screen.width;

  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit(): void {
    this.getDataProd()
    this.staticChangeItems()

  }

  // Função de requisição dos dados vindo do Service com filtros para especificos itens
  getDataProd() {
    this.prodService.getProducts().pipe(take(1)).subscribe((data) => {
      this.starData = data.filter((x: any) => x.type == "star_wars")
      this.consoleData = data.filter((x: any) => x.type == "consoles")
      this.diversosData = data.filter((x: any) => x.type == "anothers")
    })
  }

  // ajuste dos items da grid baseado no primeiro tamanho de tela recebido
  staticChangeItems() {
    console.log(this.starData)
    console.log(this.staticSizePage)
    if (this.staticSizePage < 1024) {
      this.starData = this.starData.slice(0, 4)
      this.consoleData = this.consoleData.slice(0, 4)
      this.diversosData = this.diversosData.slice(0, 4)
    }
  }
}
