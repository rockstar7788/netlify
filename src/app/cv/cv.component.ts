import { Component, OnInit } from '@angular/core';
import { DbService } from "./../db.service"
import { from } from 'rxjs';
@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {
  items;

  constructor(public serv: DbService) {
  }

  ngOnInit() {
    this.serv.getFire().subscribe( cv => this.items = cv);
  }

}
