import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {TasksService} from "src/app/services/tasks.service";

@Component({
  selector: "app-task-edit",
  templateUrl: "./task-edit.component.html",
  styleUrls: ["./task-edit.component.css"],
})
export class TaskEditComponent implements OnInit {
  public index: number = 0;
  public name: string = "";
  public priority: string = "";

  constructor(
    private taskService: TasksService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.index = this.route.snapshot.params["index"];
    const task = this.taskService.get(this.index);
    this.name = task.name;
    this.priority = task.priority;
  }
  public update() {
    this.taskService.update(this.index, this.name, this.priority);
    this.router.navigate(["/"]);
  }
}
