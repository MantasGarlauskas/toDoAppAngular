import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {TasksService} from "src/app/services/tasks.service";

@Component({
  selector: "app-task-new",
  templateUrl: "./task-new.component.html",
  styleUrls: ["./task-new.component.css"],
})
export class TaskNewComponent implements OnInit {
  constructor(private taskService: TasksService, private router: Router) {}

  ngOnInit(): void {}

  public addNewProducts(name: HTMLInputElement, priority: HTMLSelectElement) {
    if (name.value != "" && priority.value != "") {
      this.taskService.add(name.value, priority.value);
      name.value = "";
      priority.value = "";
      this.router.navigate(["/"]);
    }
  }
}
