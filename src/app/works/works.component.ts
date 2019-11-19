import { Component, OnInit } from '@angular/core';
import { DbService } from "./../db.service"
import { observable, from } from 'rxjs';
import {AngularFireDatabase} from '@angular/fire/database';
import { HttpClient } from "@angular/common/http"


@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  posts;
  datas: any;

  constructor(private db: DbService, private data: AngularFireDatabase, private http: HttpClient) { }

  ngOnInit() {
    this.db.getFire().subscribe( cv => this.posts = cv);
    this.http.post("/api/test", {}).subscribe((data) => {
      this.datas = data
      console.log(this.datas);
    })
  }

  DeletePost(ids){
    this.posts.blog = this.posts.blog.filter( it => {
      console.log(it.id, ids)
      if(it.id != ids){
        return it;
      }
    })
    this.data.object("cv_data").set(this.posts);
  }

}