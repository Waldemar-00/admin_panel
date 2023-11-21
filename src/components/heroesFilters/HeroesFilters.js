
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом
// import { useSelector, useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
const HeroesFilters = () => {
  const filters = useSelector(state => state.filters)
    return (
        <div className="card shadow-lg mt-4">
            <div className="card-body">
                <p className="card-text">Отфильтруйте героев по элементам</p>
                <div className="btn-group">
                  <button className="btn btn-outline-dark active">{ filters[0] }</button>
                  <button className="btn btn-danger">{ filters[1] }</button>
                  <button className="btn btn-primary">{ filters[2] }</button>
                  <button className="btn btn-success">{ filters[3] }</button>
                  <button className="btn btn-secondary">{ filters[4] }</button>
                </div>
            </div>
        </div>
    )
}

export default HeroesFilters;