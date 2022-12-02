import { useDispatch, useSelector } from 'react-redux'
import { print } from './index'

export default function Another() {
  const another = useSelector((state) => state.another.thing)
  const dispatch = useDispatch()

  return (
    <div className='grid place-content-center text-center gap-3'>
      <h1 className='text-3xl font-bold'>Another</h1>
      <button
        className='border-double border-4 border-purple-500 bg-purple-600/25 w-32 mx-auto'
        onClick={() => dispatch(print())}>
        click me
      </button>
      <p className='font-medium'>{another}</p>
    </div>
  )
}
