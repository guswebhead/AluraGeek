import { Router } from '@angular/router';
import { ProductsService } from './../../../services/products/products.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, AfterViewInit {

  isTablet: Boolean = false;
  files: any[] = [];
  file!: File

  newProd!: FormGroup


  constructor(
    private prodService: ProductsService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.adjustLabelsInput()

    const media = window.matchMedia("(min-width: 1440px)")
    this.createFormProd()

  }

  ngAfterViewInit(): void {

  }

  createFormProd() {
    this.newProd = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      descript: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required)
    })
  }

  addProd() {
    const name = this.newProd.get('name')?.value ?? '';
    const price = this.newProd.get('price')?.value ?? '';
    const descript = this.newProd.get('descript')?.value ?? '';
    const image = this.newProd.get('image')?.value ?? '';

    if (this.newProd.valid)
      this.prodService.addProd(name, price, descript, this.files[0]).subscribe((data) => {
        alert('conteudo adicionado!')
        this.route.navigate([''])
      },
        (error) => {
          alert(error)
        }
      )
      else {
        alert('dados invalidos')
      }
    // const reader = new FileReader();
    // reader.readAsDataURL(this.files[0]);
    // console.log(this.files[0])
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

  holdArchive(archive: any): void {
    const [file] = archive?.files;
    this.file = file;
    const reader = new FileReader();
    // reader.onload = (event: any) => (this.preview = event.target.result)
    reader.readAsDataURL(file);
  }



  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.files.push($event[0]);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: any) {
    const [file] = files.files;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    console.log(files)
    this.files.push(files.files[0]);

  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: any, decimals: any) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }


}
