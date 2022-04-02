import { AuthAdmService } from './../../../services/login/auth-adm.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  })

  constructor(
    private router: Router,
    private authService: AuthAdmService
  ) { }

  ngOnInit(): void {
    this.adjustLabelsInput()
  }

  loginSubmit() {
    if(this.loginForm.valid)
    this.authService.loginAdm(this.loginForm.value).subscribe((res)=>{
      this.router.navigate(['allProduct'])
    })
  }

  // função para corrigir o label do css input estilo material que quebra no outfocus
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
      console.log(input)
      if (input.value != null) {
        console.log(true)
        input.classList.add("is-valid");
      } else {
        console.log(false)
        input.classList.remove("is-valid");

      }
    });
  }
}
