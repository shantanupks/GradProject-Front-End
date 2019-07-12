import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks = [
    {
      id: 1,
      name: "Task 1",
      status: "In Progress",
      member: "Member 1",
      description: "Description",
      duration: "5 days"
    },
    {
      id: 2,
      name: "Task 2",
      status: "In Progress",
      member: "Member 2",
      description: "Description",
      duration: "5 days"
    },
    {
      id: 3,
      name: "Task 3",
      status: "In Progress",
      member: "Member 3",
      description: "Description",
      duration: "5 days"
    }
  ]

  taskStream:Subject<any>=new Subject();

  getTaskStream(){
    return this.taskStream;
  }

  getTasks(){
    return this.tasks;
  }

  constructor() { }
}
