import { useSelector, useDispatch } from 'react-redux'
import { filtered } from './filtersSlice'
import { heroesSelectors } from '../heroesList/heroesSlice'
const HeroesFilters = () => {
  const filters = useSelector(state => state.filters.filters)
  const heroes = useSelector(state => heroesSelectors.selectAll(state))
  const dispatch = useDispatch()
  function filterOfHeroes(e) {
    const buttons = document.querySelectorAll('.f-r')
    buttons.forEach(btn => {
      if (btn.className.includes('active')) {
        btn.className = btn.className.slice(0, btn.className.indexOf('active'))
      } 
    })
    if (!e.target.className.includes('active')) {
      e.target.className = e.target.className + ' active'
    }
    let array
    if (e.target.innerText === 'all') {
      array = [...heroes]
    } else {
      array = heroes.filter(hero => hero.element === e.target.innerText)
    }
    if (array.length === 0) {
      array.push('empty')
    }
    dispatch(filtered(array))
  }
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                  <button className="btn btn-outline-dark f-r active" onClick={(e) => filterOfHeroes(e)}>{ filters[0] }</button>
                  <button className="btn btn-danger f-r" onClick={(e) => filterOfHeroes(e)}>{ filters[1] }</button>
                  <button className="btn btn-primary f-r" onClick={(e) => filterOfHeroes(e)}>{ filters[2] }</button>
                  <button className="btn btn-success f-r" onClick={(e) => filterOfHeroes(e)}>{ filters[3] }</button>
                  <button className="btn btn-secondary f-r" onClick={(e) => filterOfHeroes(e)}>{ filters[4] }</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters