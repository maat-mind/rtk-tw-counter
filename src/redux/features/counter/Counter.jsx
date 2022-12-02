import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './index'

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

      <button
        className='col-span-3 text-xl w-72 h-10 bg-blue-500 font-bold text-white rounded'
        onClick={() => dispatch(reset())}>
        reset
      </button>
    </div>
  )
}
