import {Injectable} from "@angular/core";
import {TaskModel} from "../components/model/TaskModel";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  public tasks: TaskModel[] = [];

  constructor() {}

  private save() {
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }

  public load() {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      this.tasks = JSON.parse(data);
    }
  }

  public add(name: string, priority: string) {
    this.tasks.push({
      name: name,
      priority: priority,
    });
    this.save();
  }

  public delete(index: number) {
    this.tasks.splice(index, 1);
    this.save();
  }

  public get(index: number) {
    return this.tasks[index];
  }

  public update(index: number, name: string, priority: string) {
    this.tasks[index].name = name;
    this.tasks[index].priority = priority;
    this.save();
  }
}
