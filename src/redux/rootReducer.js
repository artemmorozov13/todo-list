import {
  CREATE_NEW_TODO,
  CREATE_TODO_POPUP_CLOSE,
  CREATE_TODO_POPUP_OPEN,
  NEW_TODO_CONTENT,
  NEW_TODO_TITLE,
  REMOVE_TODO,
  SET_NEW_TODO_LIST
} from "./types"

const initialState = {
  isCreateTodoPopupOpen: false,
  todos: [
    {
      id: 1, title: 'Быстрый гайд по приложению', content: 'Привет, я приложение заметок со мной ты всегда будьшь четко знать свой план действий. Просто нажми на кнопку <Новое дело>, запиши название в заголовке и краткое описание того, что нужно сделать, если это нужно. Можешь оставить описание пустым, если тебе так будет удобно, я не стану тебя ограничивать ни в чем) Как новый туду будет записан просто нажми на кнопку <Добавить> и твой туду отобразится в списке всех туду. Не переживай, если вдруг закроешь или перезагрузишь страницу, ничего страшного не произайдет, ведь я по прежнему буду помнить те туду которые ты записал :) Мое главное удобство для тебя заключается в том, что я не привязываюсь к конкретному аккаунту и не требую зарегестрироваться, я словно записная книжка твоего устройства и привязана только к нему.'
    }
  ],
  newTodoTitle: null,
  newTodoContent: null,
}

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case CREATE_TODO_POPUP_OPEN:
      return { ...state, isCreateTodoPopupOpen: true }

    case CREATE_TODO_POPUP_CLOSE:
      return { ...state, isCreateTodoPopupOpen: false }
      
    case NEW_TODO_TITLE:
      return { ...state, newTodoTitle: payload }

    case NEW_TODO_CONTENT:
      return { ...state, newTodoContent: payload }

    case CREATE_NEW_TODO:
      return { ...state, todos: [...state.todos, payload] }
    
    case SET_NEW_TODO_LIST:
      return { ...state, todos: [...state.todos, ...payload] }
      
    case REMOVE_TODO:
      return { ...state, todos: payload }

    default:
      return state
    }
  }

export default rootReducer;