const INIT = { name: '', email: '', password: '', uuid: '' };

const ADD_NEW_USER = 'ADD_NEW_USER';

// eslint-disable-next-line default-param-last
export default function user(state = INIT, { type, payload }) {
  if (type === ADD_NEW_USER) return { ...payload };
  return state;
}
