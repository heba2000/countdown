import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.scss']
})
export class LoopComponent implements OnInit {
  array  = []

  constructor(translate : TranslateService) { }

  ngOnInit() {
    this.createArray();
    console.log("dsa");
    
  }
  createArray(){
    // this.array = Array.from({length : 1000} , (item , index)=> item = index + 1 )
    this.array = [{ title: 'Zootopia', director: 'Byron Howard, Rich Moore'},
    { title: 'Batman v Superman: Dawn of Justice', director: 'Zack Snyder'},
    { title: 'Captain American: Civil War', director: 'Anthony Russo, Joe Russo'},
    { title: 'X-Men: Apocalypse', director: 'Bryan Singer'},
    { title: 'Warcraft', director: 'Duncan Jones'}]
    console.log(this.array);
   
    
  }
  onClick(){
    this.array = [...this.array,{id:6 , title: 'mohamed', director: 'hesham'}]
  }
  trackby(i , el){
    return i

  }

}
