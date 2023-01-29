import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

export interface UserInterface {
  email: string,
  password: string,
  avatar: string,
  name: string
}
@Component({
  selector: 'app-second-register-step',
  templateUrl: './second-register-step.component.html',
  styleUrls: ['./second-register-step.component.css']
})
export class SecondRegisterStepComponent {
  public email: string;
  private user: UserInterface
  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras.state;
    this.user = state?.['user'];
    this.email = this.user.email;
  }
  onSubmit(){
    this.router.navigate(["profile"])
  }
}
