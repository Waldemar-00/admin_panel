// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров
import { useSelector, useDispatch } from 'react-redux'
import { useHttp } from '../../hooks/http.hook'
import { addHeroes } from '../../actions/index'
import { v4 } from 'uuid'
const HeroesAddForm = () => {
  const heroes = useSelector(state => state.heroes)
  const url = useSelector(state => state.url)
  const dispatch = useDispatch()
  const { request }= useHttp()
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
                  <option >Я владею элементом...</option>
                  <option value="fire">Огонь</option>
                  <option value="water">Вода</option>
                  <option value="wind">Ветер</option>
                  <option value="earth">Земля</option>
              </select>
          </div>

          <button type="submit" className="btn btn-primary">Создать</button>
      </form>
  )
}

export default HeroesAddForm;