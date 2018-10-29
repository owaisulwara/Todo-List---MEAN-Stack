import { Component } from '@angular/core';
import { TodoService } from './todo.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'My App';
  mydata = [];
  constructor( private TodoService: TodoService){}
  ngOnInit(){
    this.TodoService.getData().subscribe(data => {this.mydata = data;});
  }
  postData(ID, Title:String){
    var newData = {
       id : ID,
       title : Title
    }
    this.TodoService.insertData(newData).subscribe(newData => {this.mydata.push(newData)});
  }
}
