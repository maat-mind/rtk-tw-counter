import { useDispatch, useSelector } from 'react-redux'
import { print } from './index'

export default function Another() {
  const another = useSelector((state) => state.another.thing)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>Another</h1>
      <button onClick={() => dispatch(print())}>click me</button>
      <span>{another}</span>
    </div>
  )
}
