import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";
import {TaskComponent} from "./components/task/task.component";
import {TaskItemComponent} from "./components/task/task-item/task-item.component";
import {RouterModule, Routes} from "@angular/router";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {TaskNewComponent} from "./components/task/task-new/task-new.component";

const taskRoutes: Routes = [
  {path: "", component: TaskComponent},
  {path: "new", component: TaskNewComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskItemComponent,
    NavigationComponent,
    TaskNewComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(taskRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
