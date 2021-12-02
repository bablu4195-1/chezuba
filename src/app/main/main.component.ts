import { Component, OnInit } from '@angular/core';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { RestapiService } from '../restapi.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  posts:any;
  searchKey: any;
  friend:any;
  showLoader : boolean;
  constructor(private api: RestapiService) { 
   this.showLoader = false; 
  }

  ngOnInit(){
    
    this.api.getData().subscribe(data => {
      console.log(data);
      this.posts = data;
    });
    this.api.status.subscribe((val) => {
      this.showLoader = val;
    });
  }
  Search(){
    if(this.searchKey == ""){
       this.ngOnInit();
     }
     else{
       this.posts = this.posts.filter((res: { title: string; }) => {
         return res.title.toLowerCase().match(this.searchKey.toLowerCase());
       });
     }
   }
   removeItem(id: number){

    this.posts = this.posts.filter((item: { id: number; }) => item.id !== id);

 }
 reset(){
  this.ngOnInit();
}

}
