import m from 'moment';
import uuid from 'uuid/v4';
import Types from '../types';

const initialState = [
  {
    id: uuid(),
    specialist: 'specialist#1',
    clientName: 'Kimberly G. Hooper',
    clientPhone: '(123) 456-78-90',
    date: m().set({ hour: 10, minute: 0, second: 0 }),
    duration: 1.5,
    isCanceled: true,
    isPayed: false,
    comment: 'Did not come',
    services: [
      {
        title: "Wash, haircut & style", 
        price: 30, 
        durationInHours: 1.5
      },
      {
        title: 'Clipper cut',
        price: 18,
        durationInHours: .5
      },
    ]
  },
  {
    id: uuid(),
    specialist: 'specialist#1',
    clientName: 'Stephen J. Cooney',
    clientPhone: '(123) 456-78-90',
    date: m().set({ hour: 12, minute: 30, second: 0 }),
    duration: 1.5,
    isCanceled: false,
    isPayed: false,
    comment: '',
    services: [
      {
        title: "Wash, haircut & style", 
        price: 30, 
        durationInHours: 1.5
      },
      {
        title: "Wash & style", 
        price: 25, 
        durationInHours: 1
      }
    ]
  },
  {
    id: uuid(),
    specialist: 'specialist#1',
    clientName: 'Stephen K. Lachance',
    clientPhone: '(123) 456-78-90',
    date: m().set({ hour: 15, minute: 30, second: 0 }),
    duration: 1.5,
    isCanceled: false,
    isPayed: false,
    comment: '',
    services: [
      {
        title: "Wash & style", 
        price: 25, 
        durationInHours: 1
      },
      {
        title: 'Clipper cut',
        price: 18,
        durationInHours: .5
      },
    ]
  },
  {
    id: uuid(),
    specialist: 'specialist#2',
    clientName: 'Alicia A. Grabowski',
    clientPhone: '(123) 456-78-90',
    date: m().set({ hour: 9, minute: 30, second: 0 }),
    duration: 1.5,
    isCanceled: false,
    isPayed: false,
    comment: '',
    services: [
      {
        title: "Wash & style", 
        price: 25, 
        durationInHours: 1
      }
    ]
  },
  {
    id: uuid(),
    specialist: 'specialist#2',
    clientName: 'Barbara T. McClellan',
    clientPhone: '(123) 456-78-90',
    date: m().set({ hour: 13, minute: 30, second: 0 }),
    duration: 1.5,
    isCanceled: false,
    isPayed: false,
    comment: '',
    services: [
      {
        title: "Wash & style", 
        price: 25, 
        durationInHours: 1
      }
    ]
  },
  {
    id: uuid(),
    specialist: 'specialist#2',
    clientName: 'Oralia J. Maguire',
    clientPhone: '(123) 456-78-90',
    date: m().set({ hour: 16, minute: 0, second: 0 }),
    duration: 1.5,
    isCanceled: false,
    isPayed: false,
    comment: '',
    services: [
      {
        title: "Wash & style", 
        price: 25, 
        durationInHours: 1
      },
      {
        title: 'Beard cut',
        price: 12,
        durationInHours: .5
      },
    ]
  },
  {
    id: uuid(),
    specialist: 'specialist#3',
    clientName: 'Stephanie C. Cruce',
    clientPhone: '(123) 456-78-90',
    date: m().set({ hour: 9, minute: 0, second: 0 }),
    duration: 1.5,
    isCanceled: false,
    isPayed: false,
    comment: '',
    services: [
      {
        title: 'Manicure & Pedicure',
        price: 30,
        durationInHours: 2
      },
    ]
  },
  {
    id: uuid(),
    specialist: 'specialist#4',
    clientName: 'Ann B. Roberts',
    clientPhone: '(123) 456-78-90',
    date: m().set({ hour: 11, minute: 0, second: 0 }),
    duration: 1.5,
    isCanceled: false,
    isPayed: false,
    comment: '',
    services: [
      {
        title: "Wash & style", 
        price: 25, 
        durationInHours: 1
      },
      {
        title: 'Manicure',
        price: 15,
        durationInHours: 1
      },
    ]
  },
  {
    id: uuid(),
    specialist: 'specialist#5',
    clientName: 'Shirley J. Herring',
    clientPhone: '(123) 456-78-90',
    date: m().set({ hour: 12, minute: 0, second: 0 }),
    duration: 1.5,
    isCanceled: false,
    isPayed: false,
    comment: '',
    services: [
      {
        title: "Wash & style", 
        price: 25, 
        durationInHours: 1
      },
      {
        title: 'Clipper cut',
        price: 18,
        durationInHours: .5
      },
    ]
  },
  {
    id: uuid(),
    specialist: 'specialist#5',
    clientName: 'Barbara J. Carver',
    clientPhone: '(123) 456-78-90',
    date: m().set({ hour: 16, minute: 0, second: 0 }),
    duration: 1.5,
    isCanceled: false,
    isPayed: false,
    comment: '',
    services: [
      {
        title: "Wash & style", 
        price: 25, 
        durationInHours: 1
      },
      {
        title: 'Manicure',
        price: 15,
        durationInHours: 1
      },
    ]
  },
]


export default function(state = initialState, { type, payload }) {
  switch (type) {
    case Types.ADD_RECORD:
      return [...state, payload.record];
    case Types.UPDATE_RECORD:
      return state.map(record => {
        if (record.id === payload.id) return payload.record;
        return record;
      })
    case Types.DELETE_RECORD:
      return state.filter(record => record.id !== payload.id);
    case Types.PAY_RECORD:
      return state.map(record => {
        if (record.id === payload.id) return {...record, isPayed: true};
        return record;
      })
    default:
      return state;
  }
};

export const selectRecordsBySpecialistAndDate = (store, date, id) => store.filter(rec => rec.date.isSame(date, 'day') && rec.specialist === id);
