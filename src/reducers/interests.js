import { fakeInterests } from '../dummy-data';

const initialInterests = fakeInterests;

export default function interest(state = initialInterests, action) {
  switch (action.type) {
    default:
      return state;
  }
}
