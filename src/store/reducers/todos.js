const INITIAL_STATE = [
  { id: 1, text: 'Fazer café.' },
  { id: 2, text: 'Pegar Õnibus.' },
  { id: 3, text: 'Começar o trabalho.' },
];

export default function todos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Math.random(), text: action.payload.text }];
    default:
      return state;
  }
}
