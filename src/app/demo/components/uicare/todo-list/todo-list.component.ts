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
  today:Date =  new Date();
  mode:string="Save";
  submitted: boolean = false;
  toDoList: ToDoListDetails[] = [];
  ToDoListObj: ToDoListDetails = <ToDoListDetails>{};
  status: any[] = [];
  constructor() {
    this.toDoList.push({
      'id':'1001',
      "TaskName": "Yog",
      "Description": "Morning Time",
      "DueDate": new Date("2022-11-07 10:11"),
      "Time": new Date("2022-11-07 10:11"),
      "Status": "Completed",
      "CreatedBy": "Admin",
    },
      {
        'id':'1002',
        "TaskName": "Walk",
        "Description": "Evening Time",
        "DueDate": new Date("2022-11-17 5:45"),
        "Time": new Date("2022-11-17 5:45"),
        "Status": "Initiated",
        "CreatedBy": "Admin",
      },
      {
        'id':'1003',
        "TaskName": "Meditation",
        "Description": "Meditation practice",
        "DueDate": new Date("2022-11-18 5:45"),
        "Time": new Date("2022-11-18 5:45"),
        "Status": "Initiated",
        "CreatedBy": "Admin",
      },
      );

      this.status.push({"status":"Initiated"},{"status":"Completed"});
  }

  ngOnInit(): void {
  }

  saveTaskDetails() {
    if(this.ToDoListObj.id!=undefined){
      this.update();
    }
    else{
      this.ToDoListObj.id = this.createId();
      var jsonObject = {
        "id":this.ToDoListObj.id,
        "TaskName": this.ToDoListObj.TaskName,
        "Description": this.ToDoListObj.Description,
        "DueDate": this.ToDoListObj.DueDate,
        "Time": this.ToDoListObj.Time,
        "Status": this.ToDoListObj.Status,
        "CreatedBy": this.ToDoListObj.CreatedBy,
      }
      this.toDoList.push(jsonObject);
    }
  }
  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.toDoList.length; i++) {
      if (this.toDoList[i].id === id) {
        index = i;
        break;
      }
    }
    return index;
  }
  update() {
    this.mode="Save";
    if (this.ToDoListObj.TaskName?.trim()) {
      if (this.ToDoListObj.id) {
        // @ts-ignore
        //this.ToDoListObj.inventoryStatus = this.ToDoListObj.inventoryStatus.value ? this.ToDoListObj.inventoryStatus.value : this.product.inventoryStatus;
        this.toDoList[this.findIndexById(this.ToDoListObj.id)] = this.ToDoListObj;
        //this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Updated', life: 3000 });
      } else {
        this.ToDoListObj.id = this.createId();
        // @ts-ignore
        //this.ToDoListObj.inventoryStatus = this.ToDoListObj.inventoryStatus ? this.ToDoListObj.inventoryStatus.value : 'INSTOCK';
        this.toDoList.push(this.ToDoListObj);
        //this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Created', life: 3000 });
      }
      this.toDoList = [...this.toDoList];
      //this.productDialog = false;
      this.ToDoListObj = <ToDoListDetails>{};
    }
  }
  createId(): string {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
  cancelTask() {
    this.ToDoListObj = <ToDoListDetails>{};
    this.mode="Save";
  }
  editProduct(task: ToDoListDetails) {
    this.mode = 'Update';
    this.ToDoListObj = { ...task };
    // this.productDialog = true;
  }
  deleteProduct(id) {
    this.toDoList=this.toDoList.filter(f=>f.id!=id);
    this.ToDoListObj = <ToDoListDetails>{};
    //this.ToDoListObj = { ...task };
  }
  
}
