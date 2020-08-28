import { Component, OnInit, Input } from "@angular/core";
import { Day, getCurrentWeek, Week } from "../custom-types";
import { ScheduleService } from "../schedule.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  @Input() time = "1:00";
  // tslint:disable-next-line: variable-name
  private _selectedDay: Day;
  timeForTravel: string;
  @Input() weekCheckbox = false;

  @Input()
  set selectedDay(day: Day) {
    this._selectedDay = day;
    if (this._selectedDay) {
      this.calculateTime();
    }
  }
  get selectedDay(): Day {
    return this._selectedDay;
  }

  constructor(private scheduleService: ScheduleService) {
    this.weekCheckbox = getCurrentWeek() === Week.Even ? true : false;
  }

  weekChanged(newWeek: boolean) {
    this.scheduleService.currentWeek = newWeek ? Week.Even : Week.Odd;
    this.calculateTime();
  }

  private calculateTime() {
    if (this.timeValid) {
      const travelDuration =
        parseInt(this.time.split(":")[0], 10) * 60 * 60 +
        parseInt(this.time.split(":")[1], 10) * 60;
      const lessonsStartTime = new Date();

      lessonsStartTime.setHours(
        parseInt(this.startEndTime[0].split(":")[0], 10),
        parseInt(this.startEndTime[0].split(":")[1], 10)
      );
      const travelStartTime = new Date(
        Math.abs(lessonsStartTime.getTime() - travelDuration * 1000)
      );

      this.timeForTravel = `${travelStartTime.getHours()}:${travelStartTime
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
    }
  }

  timeChanged(newTime: string) {
    this.calculateTime();
  }

  get timeValid(): boolean {
    if (this.time && this.time.length === 4) {
      return true;
    }
    return false;
  }

  get startEndTime(): [string, string] {
    const lessons = this.scheduleService.getLessons.get(this.selectedDay);

    const lessonsByWeek = lessons.filter(
      (lsn) => this.scheduleService.getLessonDataByWeek(lsn).title !== ""
    );

    return [
      this.scheduleService.getBells[lessonsByWeek[0].num - 1].split(" - ")[0],
      this.scheduleService.getBells[
        lessonsByWeek[lessonsByWeek.length - 1].num - 1
      ].split(" - ")[1],
    ];
  }
}
