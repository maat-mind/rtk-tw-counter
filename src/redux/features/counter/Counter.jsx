import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './index'

export default function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='grid grid-cols-3 w-80 h-32 text-center place-items-center'>
      <button
        className='text-4xl border-none w-14 h-14 bg-red-500 font-bold rounded'
        aria-label='Decrement value'
        onClick={() => dispatch(decrement())}>
        -
      </button>

      <span className='text-6xl font-bold'>{count}</span>

      <button
        className='text-4xl border-none w-14 h-14 bg-green-500 font-bold rounded'
        aria-label='Increment value'
        onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  )
}
