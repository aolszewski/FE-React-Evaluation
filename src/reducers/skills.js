import { fakeSkills } from '../dummy-data';

const initialSkills = fakeSkills;

export default function skills(state = initialSkills, action) {
  switch (action.type) {
    default:
      return state;
  }
}
