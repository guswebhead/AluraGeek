import { Component, HostListener, OnInit } from '@angular/core';
import { take } from 'rxjs';

import { ProductsService } from './../../../services/products/products.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  // alteração dinamica dos itens da grid para resoluções abaixo de 1024
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

  }

  // Função de requisição dos dados vindo do Service com filtros para especificos itens
  getDataProd() {
    this.prodService.getProducts().pipe(take(1)).subscribe((data) => {
      this.starData = data.filter((x: any) => x.type == "star_wars")
      this.consoleData = data.filter((x: any) => x.type == "consoles")
      this.diversosData = data.filter((x: any) => x.type == "anothers")


      this.starData = this.starData.slice(0, 6)
      this.consoleData = this.consoleData.slice(0, 6)
      this.diversosData = this.diversosData.slice(0, 6)

      this.staticChangeItems()
    })
  }

  // ajuste dos items da grid baseado no primeiro tamanho de tela recebido para resoluções abaixo de 1024
  staticChangeItems() {
    if (this.staticSizePage < 1024) {
      this.starData = this.starData.slice(0, 4)
      this.consoleData = this.consoleData.slice(0, 4)
      this.diversosData = this.diversosData.slice(0, 4)
    }
  }

  seeAll(category: string) {
    console.log(category)
    const banner = document.getElementById('banner');
    const title = document.getElementById('title-h2');
    const arrowSee = document.getElementById('see')

    // outros blocos de componentes

    const consoles = document.getElementById('consoles')
    const diversos = document.getElementById('anothers')

    if (banner && title && arrowSee && consoles && diversos) {
      banner.style.display = 'none'
      title.textContent = 'Todos os produtos'
      arrowSee.style.display = 'none'
      consoles.style.display = 'none'
      diversos.style.display = 'none'

      this.prodService.getProducts().pipe(take(1)).subscribe((data) => {
        this.starData = data
        this.consoleData = []
        this.diversosData = []
        document.documentElement.scrollTop = 0;
      })
    }


  }
}
