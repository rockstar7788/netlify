import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AngularFireDatabase} from '@angular/fire/database'
@Injectable({
  providedIn: 'root'
})
export class DbService {

  formBlog = {
    title: "",
    img: "",
    full_text: "",
    id: "",
    prev_text: ""
  }
  data;

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }


  getFire(){
    return this.db.object('cv_data').valueChanges();
  }


  formdata(tit, im, ar ,id, prev){
    this.formBlog = {
      title: tit,
      img: im,
      full_text: ar,
      id: id,
      prev_text: prev
    }
    console.log(this.formBlog)
  }



}
