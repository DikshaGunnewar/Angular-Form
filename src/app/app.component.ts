import { Component } from '@angular/core';
import { DataserviceService } from "./services/dataservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

// posts:any[];
//     constructor(private service:DataserviceService)
//     {
//     }

//   ngOnInit(){
//     //GET from api Employee
//     return this.service.getPosts().subscribe((posts) => {
//       console.log(posts);
//       this.posts = posts;
//     });    
// }

// makecall(){
//     this.service.makecall()
//     .subscribe(posts=>{
//        console.log(posts);
//        this.posts = posts;
//     });
// }

//working code
// createPost(input:HTMLInputElement)
// {
//     let post={name:input.value};
//     this.posts.splice(0,0,post);
//     input.value="";
   
//     //service method called
// return this.service.create(post)
//     .subscribe(
//         newPost=>{
//             post['id']=newPost.id;           
//             // this.posts.splice(0,0,post);  //permistic approach i.e late updadting list
//           });        
//  }

//  updatePost(post){
//    this.service.update(post)
//      .subscribe(
//          updatedPost =>{
//           console.log(updatedPost);
//      });  
// }

}
