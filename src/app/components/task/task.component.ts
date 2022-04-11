import {Component, OnInit} from "@angular/core";
import {TaskModel} from "../model/TaskModel";

@Component({
  selector: "app-task",
  templateUrl: "./task.component.html",
  styleUrls: ["./task.component.css"],
})
export class TaskComponent implements OnInit {
  public tasks: TaskModel[] = [];
  constructor() {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      this.tasks = JSON.parse(data);
    }
  }

  ngOnInit(): void {}

  private save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  public addNewProducts(name: HTMLInputElement, priority: HTMLSelectElement) {
    if (name.value != "" && priority.value != "") {
      this.tasks.push({
        name: name.value,
        priority: priority.value,
      });
      name.value = "";
      priority.value = "";
      this.save();
    }
  }

  public removeProduct(i: number) {
    this.tasks.splice(i, 1);
    this.save();
  }
}
