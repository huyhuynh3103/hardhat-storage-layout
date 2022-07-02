export interface StateVariable {
  name: string;
  slot: string;
  offset: number;
  type: string;
  numberOfBytes: string;
}

export interface Row {
  name: string;
  stateVariables: StateVariable[];
}

export interface Table {
  contracts: Row[];
}
