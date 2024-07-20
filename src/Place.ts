export class Place {
  private static _seq = 1;
  readonly id: number;
  readonly name: string;
  readonly timezoneOffset: number | '';

  constructor(name: string, timezoneOffset: number | '') {
    this.id = this.getId();
    this.name = name;
    this.timezoneOffset = timezoneOffset;
  }

  getId() : number {
    return Place._seq++;
  }
}


