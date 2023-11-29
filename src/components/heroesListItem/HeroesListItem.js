import { useHttp } from '../../hooks/http.hook'
import { useSelector, useDispatch } from 'react-redux'
import { deleteHeroes, filtered } from '../../actions/actions'
import { createSelector } from "@reduxjs/toolkit"
const HeroesListItem = ({ id, name, description, element }) => {
  const reSelector = createSelector(
    state => state.filteres.filtered,
    filtered => filtered.filter(hero => hero.id !== id)
  )
  const dispatch = useDispatch()
  const heroes = useSelector(state => state.heroes.heroes)
  const filteredHeroes = useSelector(reSelector)
  const url = useSelector(state => state.heroes.url)
  const { request } = useHttp()
  function deleteHero() {
    const array = heroes.filter(hero => hero.id !== id)
    dispatch(deleteHeroes(array))
    dispatch(filtered(filteredHeroes))
    deleteHeroFromServer(array)
  }
  function deleteHeroFromServer(array) {
    const object = { ...array }
    request(url, 'PUT', JSON.stringify(object))
  }
  let elementClassName 
    switch (element) {
        case 'fire':
            elementClassName = 'bg-danger bg-gradient' 
            break 
        case 'water':
            elementClassName = 'bg-primary bg-gradient' 
            break 
        case 'wind':
            elementClassName = 'bg-success bg-gradient' 
            break 
        case 'earth':
            elementClassName = 'bg-secondary bg-gradient' 
            break 
        default:
            elementClassName = 'bg-warning bg-gradient' 
    }
    return (
        <li 
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}>
            <img src="http://www.stpaulsteinbach.org/wp-content/uploads/2014/09/unknown-hero.jpg" 
                className="img-fluid w-25 d-inline" 
                alt="unknown hero" 
                style={{'objectFit': 'cover'}}/>
            <div className="card-body">
                
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
          <button type="button" className="btn-close btn-close"
            aria-label="Close"
            onClick={deleteHero}
          >
          </button>
            </span>
        </li>
    )
}

export default HeroesListItem 