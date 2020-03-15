import { Component, OnInit, Input } from "@angular/core";
import { Day } from "../custom-types";
import { ScheduleService } from "../schedule.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  @Input() time: string;
  @Input() selectedDay: Day;
  timeForTravel: string;

  constructor(private scheduleService: ScheduleService) {}

  timeChanged(newTime: string) {
    if (this.timeValid) {
      this.timeForTravel = "4:77";
    }
  }

  get timeValid(): boolean {
    if (this.time.length === 4) {
      return true;
    }
    return false;
  }

  get startEndTime(): [string, string] {
    const lessons = this.scheduleService.getLessons.get(this.selectedDay);

    const lessonsKeys = Object.keys(lessons);
    const firstLessonIndex = lessonsKeys[0];
    const lastLessonIndex = lessonsKeys[lessonsKeys.length - 1];
    return [
      (this.scheduleService.getBells[firstLessonIndex] as string).split(
        " - "
      )[0],
      (this.scheduleService.getBells[lastLessonIndex] as string).split(" - ")[1]
    ];
  }
}
