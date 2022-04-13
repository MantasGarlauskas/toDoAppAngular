import {Component, OnInit} from "@angular/core";
import {TasksService} from "src/app/services/tasks.service";
import {TaskModel} from "../model/TaskModel";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  public tasks: TaskModel[] = [];
  constructor(private taskService: TasksService) {
    this.tasks = taskService.tasks;
  }

  ngOnInit(): void {}
}
