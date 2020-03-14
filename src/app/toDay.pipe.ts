import { Pipe, PipeTransform } from "@angular/core";
import { Day } from "./custom-types";

@Pipe({
  name: "toDay"
})
export class ToDayPipe implements PipeTransform {
  transform(value: Day): string {
    switch (value) {
      case Day.Monday:
        return "понеділок";
      case Day.Tuesday:
        return "вівторок";
      case Day.Wednesday:
        return "середа";
      case Day.Thursday:
        return "четвер";
      case Day.Friday:
        return "п'ятниця";
      case Day.Saturday:
        return "субота";
      case Day.Sunday:
        return "неділя";
      default:
        return "unknown day";
    }
  }
}
