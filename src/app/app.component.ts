import { Component, OnInit } from '@angular/core';
import { UserdataService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Random Names';
  userNames: string[];

  constructor(private _randomUserService: UserdataService) { }

 ngOnInit() {
   this.userNames = this._randomUserService.getUserData();
 }
}
