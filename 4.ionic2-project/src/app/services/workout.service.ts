import { Injectable, Inject } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Onservable } from 'rxjs/Onservable';
import "rxjs/Rx";
import 'rxjs/add/operator/map';

@Injectable()
export class WorkoutService { 
     
    urlApp: 'https://api.mlab.com/api/1/databases/my-workout-project/collections/workoutCollection';
    apiKey: 'A0RgMej3tKfrllGoRvcW9j6XuWEYwHw0';
    
    constructor( private http:Http) {};

    getWorkouts() {             
        return this.http.get('https://api.mlab.com/api/1/databases/my-workout-project/collections/workoutCollection' + '?apiKey=' + 'A0RgMej3tKfrllGoRvcW9j6XuWEYwHw0')
                        .map(res => res.json())
    }

    addWorkout(workout) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('https://api.mlab.com/api/1/databases/my-workout-project/collections/workoutCollection' + '?apiKey=' + 'A0RgMej3tKfrllGoRvcW9j6XuWEYwHw0', JSON.stringify(workout),
        {headers: headers})
                        .map(res => res.json())
    }

    deleteWorkout(id) {
         return this.http.delete('https://api.mlab.com/api/1/databases/my-workout-project/collections/workoutCollection/' + id + '?apiKey=' + 'A0RgMej3tKfrllGoRvcW9j6XuWEYwHw0', id)
                    .map(res => res.json())
}

}