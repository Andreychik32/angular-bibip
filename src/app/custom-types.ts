export interface LessonType {
  title: string;
  info: string;
}

export const getCurrentWeek = (): Week => {
  const date = new Date();
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7) % 2 === 0
    ? Week.Even
    : Week.Odd;
};

export class Lesson {
  firstLesson: LessonType;
  secondLesson?: LessonType;
  num: number;

  constructor(lesson: LessonType, num: number, lesson2?: LessonType) {
    this.firstLesson = lesson;
    this.num = num;
    if (lesson2) {
      this.secondLesson = lesson2;
    }
  }

  get title() {
    if (this.secondLesson) {
      return getCurrentWeek() === Week.Odd
        ? this.firstLesson.title
        : this.secondLesson.title;
    }
    return this.firstLesson.title;
  }

  get info() {
    if (this.secondLesson) {
      return getCurrentWeek() === Week.Odd
        ? this.firstLesson.info
        : this.secondLesson.info;
    }
    return this.firstLesson.info;
  }
}

export enum Day {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

export enum Week {
  Even = 1,
  Odd
}
