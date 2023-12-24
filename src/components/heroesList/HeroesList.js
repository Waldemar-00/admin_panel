import { useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux' 
import { heroesAllAdd } from './heroesSlice' 
import HeroesListItem from "../heroesListItem/HeroesListItem" 
import Spinner from '../spinner/Spinner'
import { useGetHeroesQuery } from '../../api/api_Slice' 

const HeroesList = () => {
  const { data, isLoading, isSuccess, isError, Error } = useGetHeroesQuery() //! ++ isFetching, isUninitialized, refetch
  const filtered = useSelector(state => state.filters.filtered)
  const dispatch = useDispatch()  
  useEffect(() => {
    if (isSuccess) dispatch(heroesAllAdd(data))
  }, [isSuccess, dispatch, data])
  if (isLoading) {
      return <Spinner/> 
  } else if (isError) {
    console.error(Error)
      return <h5 className="text-center mt-5">Ошибка загрузки</h5>
  }

  const renderHeroesList = (arr) => {
      if (arr.length === 0) {
          return <h5 className="text-center mt-5">Героев пока нет</h5>
      }
    return arr.map(({ id, ...props }) => {
      if (id) {
          return <HeroesListItem key={id} id={id} {...props} />
      } else {
          return <h5 className="text-center mt-5">Такого героя пока нет</h5>
        }
      })
  }
  let elements
  if (filtered.length > 0 ) {
    elements = renderHeroesList(filtered)
  } else {
    elements = renderHeroesList(data)
  } 
  return (
      <ul>
          {elements}
      </ul>
  )
}

export default HeroesList 