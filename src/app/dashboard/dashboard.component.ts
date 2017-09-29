import { Component, OnInit } from "@angular/core";
import { DataserviceService } from "../services/dataservice.service";
import { FormsModule, NgForm } from "@angular/forms";
@Component({
    selector:'dashboard-selector',
    templateUrl:'./dashboard.component.html'
    
})
export class DashboardComponent implements OnInit{

    posts:any[];
    constructor(private service:DataserviceService)
    {
    }



ngOnInit(){
    //GET from api Employee
    return this.service.getPosts().subscribe((posts) => {
      console.log(posts);
      this.posts = posts;
    });    
 
}

//Angular Form
// oncreatePost(myform:NgForm)
// {
//     this.posts=myform.value 
//     // this.posts.splice(0, 0, this.posts);
//     //service method called
//     this.service.create(this.posts)
//         .subscribe(
//             newPost=>{
//                   myform['id']=newPost.id; 
//                   myform['name']=newPost.name; 
//                   myform['lastname']=newPost.lastname; 
//                 console.log(newPost);
//                 this.posts=newPost;     
//             });        
//  }

//twitter call
makecall(){
    this.service.makecall()
    .subscribe(posts=>{
       console.log(posts);
       this.posts = posts;
    });
}
  
//working code
createPost(input:HTMLInputElement)
{
    let post={name:input.value};
    this.posts.splice(0,0,post);
    input.value="";
   
    //service method called
return this.service.create(post)
    .subscribe(
        newPost=>{
            post['id']=newPost.id;           
            // this.posts.splice(0,0,post);  //permistic approach i.e late updadting list
          });        
 }

//not working
 updatePost(post){
   this.service.update(post)
     .subscribe(
         updatedPost =>{
          console.log(updatedPost);
     });  
}

}
