import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from "../../app/services/workout.service";
import { WorkoutDetailsPage } from "../workout-details/workout-details"

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage {
  workouts = [];
  constructor(public navCtrl: NavController,
              private service: WorkoutService
              ) {}

  ngOnInit(){
    this.service.getWorkouts().subscribe(
      workouts => this.workouts = workouts
    )
  }

  workoutSelected(event, workout) {
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    })
  }

}
