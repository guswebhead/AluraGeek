import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactUsService } from './../../../services/contactUs/contact-us.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import 'animate.css';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.min(3)),
    message: new FormControl('', Validators.min(40)),
  })

  constructor(
    private contactService: ContactUsService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  sendMessage() {
    if (this.contactForm.valid)
      this.contactService.postMessage(this.contactForm.value).subscribe((res) => {
        Swal.fire({
          title: 'Mensagem enviada com sucesso',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        }).then(() => {
          // resetar os valores
        })
      })
  }
}
