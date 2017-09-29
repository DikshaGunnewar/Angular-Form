import { Injectable } from '@angular/core';
import { Http,Headers } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
@Injectable()
export class DataserviceService {

constructor(private http:Http) { }
 //GET 

 url="http://localhost:63174/api/UserDetails";
//  url2="http://localhost:63174/api/UserRegisters";
  getPosts() {
    return this.http.get(this.url)
      .map(res => res.json());
  }

 /* create(resource){
    return this.http.post(this.url,JSON.stringify(resource))
     .map(response=>response.json());  
  }*/
  
//dashboard form
// oncreate(resource){
//    var headers = new Headers();
//    headers.append('Content-Type', 'application/json');

//     return this.http.post(this.url,JSON.stringify(resource),{ headers: headers })
//        .map(response=>response.json());  
//   }



// //working code
 create(resource){
   var headers = new Headers();
   headers.append('Content-Type', 'application/json');

    return this.http.post(this.url,JSON.stringify(resource),{ headers: headers })
       .map(response=>response.json());  
  }

  update(resource){
    // var headers = new Headers();
    //  headers.append('Content-Type', 'application/json');
       return this.http.patch(this.url + '/' +resource.id,JSON.stringify({ isRead:true}))
        .map(response=>response.json());   
}
makecall(){
   var headers = new Headers();
   headers.append('Content-Type', 'application/X-www-form-urlencoded');
      // return this.http.get('http://localhost:63174/api/Twitter',{headers:headers})
       return this.http.get('http://localhost:55809//api/Twitter',{headers:headers})
      .map(res => res.json());
}

/*searchquery = '';
tweetsdata;
makecall() {
    var headers = new Headers();   
    headers.append('Content-Type', 'application/X-www-form-urlencoded'); 
    this.http.post(this.url, {headers: headers}).subscribe((res) => {
      console.log(res);
    })
  }
 */

  
}
