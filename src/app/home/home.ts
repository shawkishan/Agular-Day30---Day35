import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  // constructor( private router:Router){}
  // goToProfile(){
  //   // this.router.navigate(['profile'],{queryParams:{user:'yes'}})

  // }

  user = [
    {
      id: "1",
      name: "Shaw",
      age: 50,
      email: "shaw@1223"
    },
    {
      id: "2",
      name: "kis",
      age: 20,
      email: "shaw@gmail.com"
    }
  ]

}
