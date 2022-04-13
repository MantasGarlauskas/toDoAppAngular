import {EventEmitter, Injectable} from "@angular/core";
import {TaskModel} from "../components/model/TaskModel";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  public tasks: TaskModel[] = [];

  public onTaskChange = new EventEmitter();

  constructor() {}

  private save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  public load() {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      this.tasks = JSON.parse(data);
      console.log(this.tasks);
    }
  }

  public add(name: string, priority: string) {
    this.tasks.push({
      name: name,
      priority: priority,
    });
    this.save();
    this.onTaskChange.emit();
  }

  public delete(index: number) {
    this.tasks.splice(index, 1);
    this.save();
    this.onTaskChange.emit();
  }

  public get(index: number) {
    return this.tasks[index];
  }

  public update(index: number, name: string, priority: string) {
    this.tasks[index].name = name;
    this.tasks[index].priority = priority;
    this.save();
    this.onTaskChange.emit();
  }
  public getImportantCount() {
    let count = 0;
    this.tasks.forEach((task) => {
      if (task.priority === "Important") {
        count++;
      }
    });
    return count;
  }
  public getVeryImportantCount() {
    let count = 0;
    this.tasks.forEach((task) => {
      if (task.priority === "Very important") {
        count++;
      }
    });
    return count;
  }
  public getNotImportantCount() {
    let count = 0;
    this.tasks.forEach((task) => {
      if (task.priority === "Not important") {
        count++;
      }
    });
    return count;
  }
  public taskRutineCount() {
    let count = 0;
    this.tasks.forEach((task) => {
      if (task.priority === "Routine") {
        count++;
      }
    });
    return count;
  }
}
