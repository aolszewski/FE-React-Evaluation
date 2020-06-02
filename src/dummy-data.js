import moment from "moment";

const Age = 30;
export const fakeInterests = [
    {
        id: 1,
        name: 'Soccer',
        type: 'Sport',
        current: true,
        detail: 'Soccer is a Sport and Sports are cool',
        color: 'primary'
    },
    {
        id: 2,
        name: 'Football',
        type: 'Sport',
        current: true,
        detail: 'Football is a Sport and Sports are physical',
        color: 'secondary'
    },
    {
        id: 3,
        name: 'Chess',
        type: 'Game',
        current: false,
        detail: 'Chess is a game and games are fun',
        color: 'success'
    },
    {
        id: 4,
        name: 'Racing',
        type: 'Sport',
        current: false,
        detail: 'Racing is a loud sport',
        color: 'danger'
    },
    {
        id: 5,
        name: 'Horseback Riding',
        type: 'Sport',
        current: true,
        detail: 'Horseback Riding is an ancient sport',
        color: 'info'
    }
];

export const fakeSkills = [
    {
        id: 1,
        name: 'Reading',
        type: 'Essential',
        dateLearned: moment().subtract(Age, 'years').add(2, 'years').format(),
        detail: 'Reading is essential and fun'
    },
    {
        id: 2,
        name: 'Writing',
        type: 'Essential',
        dateLearned: moment().subtract(Age, 'years').add(2, 'years').format(),
        detail: 'Writing is essential and fun'
    },
    {
        id: 3,
        name: 'Riding A Bike',
        type: 'Practical',
        dateLearned: moment().subtract(Age, 'years').add(5, 'years').format(),
        detail: 'Riding A Bike is not essential'
    },
    {
        id: 4,
        name: 'Driving A Car',
        type: 'Practical',
        dateLearned: moment().subtract(Age, 'years').add(16, 'years').format(),
        detail: 'Driving A Car is essential in some countries'
    },
    {
        id: 5,
        name: 'Coding',
        type: 'Professional',
        dateLearned: moment().subtract(Age, 'years').add(24, 'years').format(),
        detail: 'Coding is profitable'
    }
];

