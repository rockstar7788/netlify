import { Component, OnInit } from '@angular/core';
import { DbService } from "./../db.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
items;

  constructor(public serv: DbService) { }

  ngOnInit() {
    this.serv.getFire().subscribe( cv => this.items = cv);
  }

}
