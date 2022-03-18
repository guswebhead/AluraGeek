import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.adjustLabelsInput()
  }

  adjustLabelsInput() {
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input: any) => {
      input.addEventListener("blur", (event: any) => {
        if (event.target.value) {
          input.classList.add("is-valid");
        } else {
          input.classList.remove("is-valid");
        }
      });
    });
  }
}
