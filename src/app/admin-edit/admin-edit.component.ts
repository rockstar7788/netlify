import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DbService } from './../db.service';
import {AngularFireDatabase} from '@angular/fire/database';
@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.scss']
})
export class AdminEditComponent implements OnInit {

  profileForm = new FormGroup({
    title: new FormControl(this.db.formBlog.title),
    img: new FormControl(this.db.formBlog.img),
    articles: new FormControl(this.db.formBlog.full_text),
    preview: new FormControl(this.db.formBlog.prev_text)
  });

  data;

  constructor(private db: DbService, private fire: AngularFireDatabase) {

    db.getFire().subscribe(it => this.data = it)

   }

  ngOnInit() {
  }

  onSubmit() {
    this.go();
  }

  go(){
    if(this.db.formBlog.id == ""){
      this.db.formBlog.img = this.profileForm.value.img;
      this.db.formBlog.title = this.profileForm.value.title;
      this.db.formBlog.full_text = this.profileForm.value.articles;
      this.db.formBlog.prev_text = this.profileForm.value.preview;
      this.db.formBlog.id = this.data.blog[this.data.blog.length-1].id + 1;
      this.data.blog.push(this.db.formBlog);
      this.fire.object("cv_data").set(this.data);
    }else{
      this.data.blog[Number(this.db.formBlog.id) - 1].img = this.profileForm.value.img;
      this.data.blog[Number(this.db.formBlog.id) - 1].title = this.profileForm.value.title;
      this.data.blog[Number(this.db.formBlog.id) - 1].full_text = this.profileForm.value.articles;
      this.data.blog[Number(this.db.formBlog.id) - 1].prev_text = this.profileForm.value.preview;
      this.fire.object("cv_data").set(this.data);
    }
    // this.db.list('').set( x +"", this.formBlog);
  }

}
