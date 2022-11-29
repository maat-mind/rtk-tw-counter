import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './index'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}>
          Decrement
        </button>

        <span>{count}</span>

        <button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}>
          Increment
        </button>
      </div>
    </>
  )
}
