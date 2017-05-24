import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WorkoutService } from "../../app/services/workout.service";

import { WorkoutsPage } from '../workouts/workouts';

@Component({
  selector: 'add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {

  constructor(public navCtrl: NavController,
              private workoutService: WorkoutService) {}

  title = '';
  note = '';
  type;

  result;

  onSubmit() {
    let workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }

    this.workoutService.addWorkout(workout).subscribe(
      res => this.result = res
    )

    this.navCtrl.setRoot(WorkoutsPage)
  }
}
