interface Dictionary<T> {
  [name: string]: T;
}

export class Split {
  name: String;
  amount: number;
  paidBy: String;
  splitBetween: Dictionary<string>;
  
  constructor() {
    this.name = "";
    this.amount = 0.0;
    this.paidBy = "";
  }
}
