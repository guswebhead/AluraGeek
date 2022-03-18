import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, AfterViewInit {

  isTablet: Boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.adjustLabelsInput()

    const media = window.matchMedia("(min-width: 1440px)")

  }

  ngAfterViewInit(): void {

  }

  // função para corrigir o label do css input estilo material que quebra no outfocus
  adjustLabelsInput() {
    const inputs = document.querySelectorAll("input");
    const textarea = document.querySelectorAll("textarea");

    inputs.forEach((input: any) => {
      input.addEventListener("blur", (event: any) => {
        if (event.target.value) {
          input.classList.add("is-valid");
        } else {
          input.classList.remove("is-valid");
        }
      });
    });
    textarea.forEach((textarea: any) => {
      textarea.addEventListener("blur", (event: any) => {
        if (event.target.value) {
          textarea.classList.add("is-valid");
        } else {
          textarea.classList.remove("is-valid");
        }
      });
    });
  }




}
