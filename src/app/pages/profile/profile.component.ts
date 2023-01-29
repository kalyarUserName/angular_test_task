import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataInterface} from "./dataInterface";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  avatar="";
  picture="";
  name="";
constructor(private http : HttpClient) {
  this.getData().subscribe(data => {
    console.log(data)
    this.picture = data.results[0].picture.large;
    this.avatar = data.results[0].picture.medium;
    this.name = `${data.results[0].name.first} ${data.results[0].name.last}`
  })
}
  ngOnInit() {

  }
  getData(): Observable<DataInterface>{
    return this.http.get<DataInterface>('https://randomuser.me/api/')
  }
}
