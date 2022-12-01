import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './index'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='grid grid-cols-3 w-60 h-32'>
      <div>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>

      <div className=''>
        <span>{count}</span>
      </div>

      <div>
        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
    </div>
  )
}
