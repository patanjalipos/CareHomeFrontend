import { Component, OnInit } from '@angular/core';
import { ToDoListDetails } from 'src/app/demo/classes/ToDoList';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  date1: Date;
  time1: Date;
  toDoList:ToDoListDetails[]=[];
  ToDoListObj: ToDoListDetails = <ToDoListDetails>{};
  constructor() {
    this.toDoList.push({
      "TaskName":"Yog",
      "Description":"Daily Morning",
      "DueDate":new Date("2022-11-07 10:11"),
      "Time":new Date("2022-11-07 10:11"),
      "CreatedBy":"Admin",
      });
   }

  ngOnInit(): void {
  }

  saveTaskDetails(){
    var jsonObject = {
      "TaskName":this.ToDoListObj.TaskName,
      "Description":this.ToDoListObj.Description,
      "DueDate":this.ToDoListObj.DueDate,
      "Time":this.ToDoListObj.Time,
      "CreatedBy":this.ToDoListObj.CreatedBy,
      }
    this.toDoList.push(jsonObject);
  }
  editProduct(cc){

  }
  deleteProduct(cc){

  }
}
