const initialState = {
  services: [
    {
      title: 'Wash, haircut & style',
      price: 30,
      durationInHours: 2
    },
    {
      title: 'Haircut only',
      price: 22,
      durationInHours: 1
    },
    {
      title: 'Wash & style',
      price: 25,
      durationInHours: 1
    },
    {
      title: 'Clipper cut',
      price: 18,
      durationInHours: 1.5
    },
    {
      title: 'Beard cut',
      price: 12,
      durationInHours: 1
    },
    {
      title: 'Kids hair cut',
      price: 15,
      durationInHours: 1
    },
    {
      title: 'Manicure',
      price: 15,
      durationInHours: 1
    },
    {
      title: 'Pedicure',
      price: 15,
      durationInHours: 1
    },
    {
      title: 'Manicure & Pedicure',
      price: 30,
      durationInHours: 2
    },
  ]
};

export default function(state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}