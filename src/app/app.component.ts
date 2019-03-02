import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TrovasysFrontend';
  isAnyFeedActive:boolean = false;

  constructor(private _router:Router){}

  goToPoultryFeed():void{
    this.isAnyFeedActive = true;
      this._router.navigate(['/poultry']);
  }

  goToDairyFeed():void{
    this.isAnyFeedActive = true;
    this._router.navigate(['/dairy']);
  }
}
