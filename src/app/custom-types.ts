export interface LessonType {
  title: string;
  info: string;
}

export const getCurrentWeek = (): Week => {
  const instance = new Date();

  // Create a copy of this date object
  const target = new Date(instance.valueOf());

  // ISO week date weeks start on monday
  // so correct the day number
  const dayNr = (instance.getDay() + 6) % 7;

  // ISO 8601 states that week 1 is the week
  // with the first thursday of that year.
  // Set the target date to the thursday in the target week
  target.setDate(target.getDate() - dayNr + 3);

  // Store the millisecond value of the target date
  const firstThursday = target.valueOf();

  // Set the target to the first thursday of the year
  // First set the target to january first
  target.setMonth(0, 1);
  // Not a thursday? Correct the date to the next thursday
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
  }

  // The weeknumber is the number of weeks between the
  // first thursday of the year and the thursday in the target week
  const weekNumber =
    1 + Math.ceil((firstThursday - target.getTime()) / 604800000);
  return weekNumber % 2 !== 0 ? Week.Even : Week.Odd;
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
