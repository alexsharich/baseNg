import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {
message:string = '';
items:Array<string>=['React','Redux','Redux-toolkit','Angular'];
loggedIn:boolean= true;
isCollapsed:boolean=true;
constructor(){
  setInterval(()=>{
    this.message = new Date().toLocaleTimeString();
  })
}
someFunc(){
this.loggedIn = !this.loggedIn
}
toggleIsCollapsed(){
  this.isCollapsed = !this.isCollapsed
}
ngOnInit(){}
}
