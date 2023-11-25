import {useHttp} from '../../hooks/http.hook' 
import { useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux' 

import { fetchHeroes } from '../../actions/actions' 
import HeroesListItem from "../heroesListItem/HeroesListItem" 
import Spinner from '../spinner/Spinner' 

//!Done!
// Задача для этого компонента:
// При клике на "крестик" идет удаление персонажа из общего состояния
// Усложненная задача:
// Удаление идет и с json файла при помощи метода DELETE
//!Done!

const HeroesList = () => {
  const heroes = useSelector(state => state.heroes.heroes) 
  const filtered = useSelector(state => state.filteres.filtered)
  const heroesLoadingStatus = useSelector(state => state.heroes.heroesLoadingStatus)
  const url = useSelector(state => state.heroes.url)
  const dispatch = useDispatch() 
  const {request} = useHttp() 

  useEffect(() => {
    dispatch(fetchHeroes(request, url)) 
  }, [dispatch, request, url]) 

  if (heroesLoadingStatus === "loading") {
      return <Spinner/> 
  } else if (heroesLoadingStatus === "error") {
      return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  const renderHeroesList = (arr) => {
      if (arr.length === 0) {
          return <h5 className="text-center mt-5">Героев пока нет</h5>
      }

    return arr.map(({ id, ...props }) => {
      if (id) {
          return <HeroesListItem key={id} {...props} />
      } else {
          return <h5 className="text-center mt-5">Такого героя пока нет</h5>
        }
      })
  }
  let elements
  if (filtered.length > 0 ) {
    elements = renderHeroesList(filtered)
  } else {
    elements = renderHeroesList(heroes)
  } 
  return (
      <ul>
          {elements}
      </ul>
  )
}

export default HeroesList 