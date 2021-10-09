import { uuid } from './utils'

const messages = [
  {
      id: uuid(),
      content: 'message 1',
      privacy: 'public'
  },
  {
      id: uuid(),
      content: 'message 2',
      privacy: 'private'
  },
  {
      id: uuid(),
      content: 'message 3',
      privacy: 'public'
  },
]
export default messages
