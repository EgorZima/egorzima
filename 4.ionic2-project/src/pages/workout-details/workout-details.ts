import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from "../../app/services/workout.service";
import { WorkoutsPage } from '../workouts/workouts';

@Component({
  selector: 'workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
  constructor(
      private nav: NavController,
      private navParams: NavParams,
      private workoutService: WorkoutService
  ) {}

   workout = this.navParams.get('workout');
   result;
   

   deleteWorkout(id) {
     this.workoutService.deleteWorkout(id).subscribe(
      res => this.result = res
    )

    this.nav.setRoot(WorkoutsPage)
   }
   

    

}
