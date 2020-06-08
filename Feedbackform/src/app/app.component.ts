import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLinear = false;
  productRatingForm: FormGroup;
  uxRating:string = "";
  foodOrderingRating:string = "";
  appPerformance:string = "";
  overAllRating:string = "";
  totalButtons : number[] = [1,2,3,4,5]
  finalText: string = "Click submit button to finish" ;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.productRatingForm = this._formBuilder.group({
      recommendationRadioBtn: ['yes', Validators.required],
      productFulfillmentRadioBtn: ['yes', Validators.required],
      paymentRadioBtn: ['yes', Validators.required],
      comments:['']
    });
    setTimeout(() => {
      console.log(this.productRatingForm);
      
    }, 6000);
  }
  submit() {
    this.finalText = "Thank you for spending your time on filling this form"
    const body = JSON.stringify({
      "userExperience": this.uxRating,
      "foodOrdering": this.foodOrderingRating,
      "appPerformance": this.appPerformance,
      "overAllRating": this.overAllRating,
      "familyOrFrndsRecommendation": this.productRatingForm.value.recommendationRadioBtn,
      "productFulfillment": this.productRatingForm.value.productFulfillmentRadioBtn,
      "paymentIssues": this.productRatingForm.value.paymentRadioBtn,
      "comments": this.productRatingForm.value.comments
    });
    console.log(body);    
  }
}
