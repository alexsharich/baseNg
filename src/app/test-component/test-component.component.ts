import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit{
  text:string='some text for test-component'
  visibility:boolean=true
constructor (){}
showBlock(){
this.visibility=!this.visibility
}
ngOnInit(){}
}
