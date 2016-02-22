import { LOAD_TABS } from '../actionTypes'

export default () => ({
    type: LOAD_TABS,
    payload: [
      {
        id: 0,
        title: 'Home',
        text: 'Home is where the heart is.'
      },
      {
        id: 1,
        title: 'About',
        text: 'Lets talk about it.'
      },
      {
        id: 2,
        title: 'Knock Knock',
        text: "Who's there?"
      }
    ]
})
