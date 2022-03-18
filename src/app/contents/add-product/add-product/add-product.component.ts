import { AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit, AfterViewInit {

  isTablet: Boolean = false;
  files: any[] = [];


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



  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files: any) {
    this.prepareFilesList(files.files);
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
   * Convert Files list to normal array list
   * @param files (Files List)
   */
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
    }
    this.uploadFilesSimulator(0);
  }

  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes:any, decimals:any) {
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
