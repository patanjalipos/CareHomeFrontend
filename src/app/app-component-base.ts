import { Injectable } from "@angular/core";
import { UnsubscriberContainerComponent } from "./utility/unsubscriber-container/unsubscriber-container.component";

@Injectable()
export class AppComponentBase {
  unsubscribe = new UnsubscriberContainerComponent();

  ngOnDestroy() {
    this.unsubscribe.dispose();
  }
  
  dateRangeValidation(fromDate, toDate, validationdays): boolean {
    var days = Math.floor((toDate - fromDate) / (1000 * 60 * 60 * 24)) // Convert milliseconds to days
    if (days <= validationdays)
      return true;
    else
      return false;

  }
  // Validate Function End

}
 
