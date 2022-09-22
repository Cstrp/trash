import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import * as moment from 'moment';

export interface ITask {
  id?: string;
  title: string;
  date?: string;
}

interface ICreate {
  name: string;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  static url: string =
    'https://todoang-f8bed-default-rtdb.europe-west1.firebasedatabase.app/';

  constructor(public http: HttpClient) {}

  create(task: ITask): Observable<ITask> {
    return this.http
      .post<ICreate>(`${TaskService.url}/${task.date}.json`, task)
      .pipe(
        map((res) => {
          console.log('Response', task);
          return { ...task, id: res.name };
        })
      );
  }

  load(date: moment.Moment): Observable<ITask[]> {
    return this.http
      .get<ITask[]>(`${TaskService.url}/${date.format('DD-MM-YYYY')}.json`)
      .pipe(
        map((tasks) => {
          if (!tasks) return [];

          return Object.keys(tasks).map((key) => {
            return { ...tasks[<never>key], id: key };
          });
        })
      );
  }

  remove(task: ITask) {
    return this.http.delete<void>(
      `${TaskService.url}/${task.date}/${task.id}.json`
    );
  }
}
