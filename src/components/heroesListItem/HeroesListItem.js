import { useHttp } from '../../hooks/http.hook'
import { useSelector, useDispatch } from 'react-redux'
import { deleteHeroes } from '../../actions'
const HeroesListItem = ({ name, description, element }) => {
  const dispatch = useDispatch()
  const heroes = useSelector(state => state.heroes)
  const url = useSelector(state => state.url)
  const { request } = useHttp()
  function deleteHero() {
    const array = heroes.filter(hero => hero.name !== name)
    dispatch(deleteHeroes(array))
    deleteHeroFromServer(array)
  }
  function deleteHeroFromServer(array) {
    const object = { ...array }
    console.log(object)
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