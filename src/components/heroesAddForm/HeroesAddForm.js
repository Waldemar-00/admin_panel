import { useSelector, useDispatch } from 'react-redux'
import { getFiltersRequest } from '../../actions/actions'
import { useHttp } from '../../hooks/http.hook'
import { addHeroes } from '../../actions/actions'
import { filtered } from '../../actions/actions'
import { nanoid } from '@reduxjs/toolkit'
import { useEffect } from 'react'
const HeroesAddForm = () => {
  const heroes = useSelector(state => state.heroes.heroes)
  const filteredHeroes = useSelector(state => state.filteres.filtered)
  const url = useSelector(state => state.heroes.url)
  const url_filter = useSelector(state => state.filteres.url)
  const filters = useSelector(state => state.filteres.filters)
  const dispatch = useDispatch()
  const { request } = useHttp()
  useEffect(() => {
    dispatch(getFiltersRequest(request, url_filter))
  }, [ request, url_filter, dispatch ])
  function submitHero(e) {
    e.preventDefault()
    const id = nanoid()
    const name = document.querySelector('#name').value
    const description = document.querySelector('#text').value
    const element = document.querySelector('#element').value
    const hero = [...heroes, { id, name, description, element }]
    if ((filteredHeroes.length > 0) && (element === filteredHeroes[0].element)) {
      dispatch(filtered([...filteredHeroes, { id, name, description, element }]))
    }
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
                    return <option key={ nanoid() }>{ filter }</option>
                  })
                }
              </select>
          </div>

          <button type="submit" className="btn btn-primary">Создать</button>
      </form>
  )
}

export default HeroesAddForm;