import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newTask: string = '';
  tasks: { title: string, isEditing: boolean }[] = [];

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ title: this.newTask, isEditing: false });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleEditTask(task: any) {
    task.isEditing = !task.isEditing;
  }
}
