import { Component } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'attempt4';
  decription = "demo: ";
  itemValue = '';
  items;
  
  constructor(public db: AngularFireDatabase){
    db.object('cv_data').valueChanges().subscribe( cv => this.items = cv);
  }

  console(){
    console.log(this.items);
  }
}
