import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {TasksService} from "src/app/services/tasks.service";
import {TaskModel} from "../../model/TaskModel";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"],
})
export class TaskItemComponent implements OnInit {
  @Input() public task: TaskModel = {name: "", priority: ""};
  @Input() public index: number = 0;
  constructor(private taskService: TasksService) {}

  ngOnInit(): void {}
  public deleteTask() {
    this.taskService.delete(this.index);
  }
}
