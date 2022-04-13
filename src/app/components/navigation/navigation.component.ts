import {Component, OnInit} from "@angular/core";
import {TasksService} from "src/app/services/tasks.service";

@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.css"],
})
export class NavigationComponent implements OnInit {
  public taskImportantCount: number = 0;
  public taskVeryImportantCount: number = 0;
  public taskNotImportantCount: number = 0;
  public taskRutineCount: number = 0;
  constructor(private taskService: TasksService) {
    this.taskImportantCount = this.taskService.getImportantCount();
    this.taskVeryImportantCount = this.taskService.getVeryImportantCount();
    this.taskNotImportantCount = this.taskService.getNotImportantCount();
    this.taskRutineCount = this.taskService.taskRutineCount();
    this.taskService.onTaskChange.subscribe(() => {
      this.taskImportantCount = this.taskService.getImportantCount();
      this.taskVeryImportantCount = this.taskService.getVeryImportantCount();
      this.taskNotImportantCount = this.taskService.getNotImportantCount();
      this.taskRutineCount = this.taskService.taskRutineCount();
    });
  }

  ngOnInit(): void {}
}
