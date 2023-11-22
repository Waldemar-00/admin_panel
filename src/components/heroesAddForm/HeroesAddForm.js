//!Done!
// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров
//!Done!
import { useSelector, useDispatch } from 'react-redux'
import { getFilters } from '../../actions/index'
import { useHttp } from '../../hooks/http.hook'
import { addHeroes } from '../../actions/index'
import { v4 } from 'uuid'
import { useEffect } from 'react'
const HeroesAddForm = () => {
  const heroes = useSelector(state => state.heroes)
  const url = useSelector(state => state.url)
  const filters = useSelector(state => state.filters)
  const dispatch = useDispatch()
  const { request } = useHttp()
  useEffect(() => {
    request("https://admin-panel-fcc34-default-rtdb.firebaseio.com/filters.json")
      .then(data => {
        dispatch(getFilters(data))
      })
  }, [request, dispatch])
  function submitHero(e) {
    e.preventDefault()
    const id = v4()
    const name = document.querySelector('#name').value
    const description = document.querySelector('#text').value
    const element = document.querySelector('#element').value
    const hero = [...heroes, { id, name, description, element }]
    dispatch(addHeroes(hero))
    const heroesToServer = { ...hero }
    request(url, 'PUT', JSON.stringify(heroesToServer))
    document.querySelector('form').reset()
  }
  return (
    <form className="border p-4 shadow-lg rounded"
      onSubmit={(e) => submitHero(e)}
    >
          <div className="mb-3">
              <label htmlFor="name" className="form-label fs-4">Имя нового героя</label>
              <input 
                  required
                  type="text" 
                  name="name" 
                  className="form-control" 
                  id="name" 
                  placeholder="Как меня зовут?"/>
          </div>

          <div className="mb-3">
              <label htmlFor="text" className="form-label fs-4">Описание</label>
              <textarea
                  required
                  name="text" 
                  className="form-control" 
                  id="text" 
                  placeholder="Что я умею?"
                  style={{"height": '130px'}}/>
          </div>

          <div className="mb-3">
              <label htmlFor="element" className="form-label">Выбрать элемент героя</label>
              <select 
                  required
                  className="form-select" 
                  id="element" 
          name="element">
                {
                  filters.map(filter => {
                    return <option key={ v4() }>{ filter }</option>
                  })
                }
              </select>
          </div>

          <button type="submit" className="btn btn-primary">Создать</button>
      </form>
  )
}

export default HeroesAddForm;