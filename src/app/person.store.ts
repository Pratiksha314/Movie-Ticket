import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";

export interface PeopleState {
  person: string;
}

const initialState = {
  person: '',
}

@Injectable({ providedIn: 'root', })
export class PeopleStore extends ComponentStore<PeopleState> {
  constructor() {
    super(initialState);
  }

  readonly personData$ = this.select((state: PeopleState) => state.person);

  readonly addPersonType = this.updater((state, person: string) => ({
    ...state, person: person
  }));

}