import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {TaskModel} from "../../model/TaskModel";

@Component({
  selector: "app-task-item",
  templateUrl: "./task-item.component.html",
  styleUrls: ["./task-item.component.css"],
})
export class TaskItemComponent implements OnInit {
  @Input() public task: TaskModel = {name: "", priority: ""};
  @Input() public index: number = 0;
  @Output() public afterRemoveTask = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}
  public deleteTask() {
    this.afterRemoveTask.emit(this.index);
  }
}
