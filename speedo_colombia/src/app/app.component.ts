import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
})
export class AppComponent {
  title = 'speedo_colombia';
  constructor(private router: Router) { }

  openHome(){
    console.log('entre a la funcion');
    window.open(".app/homepage.html", 'blank');
  }
}