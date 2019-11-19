import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"
import { DbService } from "./../db.service"
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  data;
  idPost;
  Post;
  final;
  constructor(private route: ActivatedRoute, private db: DbService, private fire: AngularFireDatabase) {
    this.route.params.subscribe( params => this.idPost = params.PostId);
  }

  ngOnInit() {
    if(this.db){
    this.db.getFire().subscribe( item => {
      this.data = item;
      this.Post = item;
      this.Post = this.Post.blog.filter( pos => {
        if(pos.id == this.idPost){
          return this.final = pos;
        }
        console.log(this.final);
      } )
    });
    }
  }

  DeletePost(ids){
    this.data.blog = this.data.blog.filter( it => {
      console.log(it.id, ids)
      if(it.id != ids){
        return it;
      }
    })
    this.fire.object("cv_data").set(this.data);
  }

}
