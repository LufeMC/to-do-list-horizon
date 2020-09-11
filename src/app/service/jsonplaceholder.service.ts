import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JSONPlaceholderService {

	url:string;

  constructor(private http:HttpClient) {
  	this.url = "https://todo-list-luis.herokuapp.com/todos/";
  }

  getAllData():Observable<any> {
  	return this.http.get<any>(this.url);
  }

  getDataById(id:number):Observable<any> {
  	return this.http.get<any>(this.url+id);
  }

  addData(postData:Object):Observable<any> {
  	return this.http.post<any>(this.url, postData);
  }

  updateData(id:number, postData:Object):Observable<any> {
  	return this.http.patch<any>(this.url+id, postData);
  }

  deleteData(id:number):Observable<any> {
  	return this.http.delete<any>(this.url+id);
  }


}
