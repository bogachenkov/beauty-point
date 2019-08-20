const initialState = [
  {
    title: 'Hairdressing department',
    specialists: [
      {
        id: 'specialist#1',
        name: 'Faadi Al Rahman',
        position: 'Specialist',
        avatar: 'https://i.pravatar.cc/86?img=18'
      },
      {
        id: 'specialist#2',
        name: 'Loni Bowcher',
        position: 'Specialist',
        avatar: 'https://i.pravatar.cc/86?img=36'
      },
    ]
  },
  {
    title: 'Manicure department',
    specialists: [
      {
        id: 'specialist#3',
        name: 'Miriam Jesus',
        position: 'Specialist',
        avatar: 'https://i.pravatar.cc/86?img=38'
      }
    ]
  },
  {
    title: 'Pedicure department',
    specialists: [
      {
        id: 'specialist#4',
        name: 'Rustem Tolstobrov',
        position: 'Specialist',
        avatar: 'https://i.pravatar.cc/86?img=67'
      }
    ]
  },
  {
    title: 'Cosmetology department',
    specialists: [
      {
        id: 'specialist#5',
        name: 'Chinmay Sarasvati',
        position: 'Specialist',
        avatar: 'https://i.pravatar.cc/86?img=35'
      },
    ]
  }
]

export default function (state = initialState, { type, payload }) {
  switch (type) {
    default:
      return state;
  }
}