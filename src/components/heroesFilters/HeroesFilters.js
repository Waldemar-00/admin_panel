
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active

// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
// import { useSelector, useDispatch } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'
import { filtered } from '../../actions/index'
const HeroesFilters = () => {
  const filters = useSelector(state => state.filters)
  const heroes = useSelector(state => state.heroes)
  const dispatch = useDispatch()
  function filterOfHeroes(e) {
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
                  <button className="btn btn-outline-dark active" onClick={(e) => filterOfHeroes(e)}>{ filters[0] }</button>
                  <button className="btn btn-danger" onClick={(e) => filterOfHeroes(e)}>{ filters[1] }</button>
                  <button className="btn btn-primary" onClick={(e) => filterOfHeroes(e)}>{ filters[2] }</button>
                  <button className="btn btn-success" onClick={(e) => filterOfHeroes(e)}>{ filters[3] }</button>
                  <button className="btn btn-secondary" onClick={(e) => filterOfHeroes(e)}>{ filters[4] }</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;