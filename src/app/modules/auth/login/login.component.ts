import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/core/services/user.service';
import { LoginDto } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loading: boolean;
  viewPassword: boolean = false;
  emailFormControl = new FormControl({ value: undefined, disabled: this.loading }, [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl({ value: undefined, disabled: this.loading }, [
    Validators.required,
  ]);
  errorMessage: string;

  constructor(
    private router: Router,
    private userService: UserService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }



  login() {
    this.errorMessage = undefined;
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:prefer-const
   // let body: LoginDto;
   // body.username = '${encodeURIComponent(this.emailFormControl.value)}';
   // body.password = '${encodeURIComponent(this.passwordFormControl.value)}';
  //  console.log(body);
    //const body = `username=${encodeURIComponent(this.emailFormControl.value)}&password=${encodeURIComponent(this.passwordFormControl.value)}`;
    this.loading = true;
    this.userService.login({ username: encodeURI(this.emailFormControl.value),
      password: encodeURI(this.passwordFormControl.value)}).subscribe(
      data => {
    this.router.navigate(['/home']);
       // this.userService.getLoggedInUserDetails().subscribe(
         // data => {
          //  this.userService.GetUserImage(data.ApplicationUserId).subscribe((imgdata) => {
            //  if (imgdata) { localStorage.afrimartUserProfilePicture = "data:image/jpeg;base64," + imgdata.ImageData; }
         // this.userService.successfulLoginFuncs(data);
         // this.loading = false;
           // }, error => { this.userService.successfulLoginFuncs(data); this.loading = false; })
         // }, error => {
          //  this.loading = false;
       //   }
       // );
       this.loading = false;
      },
      error => {
        this.errorMessage = error.error_description || error || 'Something went wrong';
        this.loading = false;
      });
  }

  requestAccountActivationLink() {
    if (this.emailFormControl.hasError('required') || this.emailFormControl.hasError('email')) {
      this.errorMessage = 'You must enter a valid email to request for an activation link';
    } else {
      this.errorMessage = undefined;
      this.loading = true;
      this.userService.requestAccountActivationLink(this.emailFormControl.value).subscribe(
        data => {
          this.toastr.success("Check your email for a link to activate your account");
          this.loading = false;
        },
        error => {
          this.errorMessage = error || "Something went wrong";
          this.loading = false;
        }
      );
    }
  }
}
