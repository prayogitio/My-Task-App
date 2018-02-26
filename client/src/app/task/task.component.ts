import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../../Task';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[];
  title: string;

  constructor(private taskService: TaskService) {
    this.taskService.getTasks().subscribe(
      (data) => this.tasks = data
    );
  }

  addTask(event) {
    var newTask = {
      title: this.title,
      isDone: false
    };

    this.taskService.addTask(newTask)
      .subscribe(
        (data) => this.tasks.push(data)
      );
    this.title = '';
  }

  deleteTask(id) {
    var tasks = this.tasks;

    this.taskService.deleteTask(id).subscribe(data => {
      if (data.n == 1) {
        for (var i = 0; i < tasks.length; i++) {
          if (tasks[i]._id == id) {
            tasks.splice(i, 1);
          }
        }
      }
    });
  }

  updateStatus(task) {
    var _task = {
      _id: task._id,
      title: task.title,
      isDone: !task.isDone
    }

    this.taskService.updateStatus(_task).subscribe(data => {
      task.isDone = !task.isDone;
    });

  }

  ngOnInit() {
  }

}
