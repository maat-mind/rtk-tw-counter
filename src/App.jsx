import '../index.css'
import Another from './redux/features/another/Another.jsx'
import Counter from './redux/features/counter/Counter.jsx'

export default function App() {
  return (
    <div className='grid place-content-center min-h-screen bg-indigo-300'>
      <Counter />
      <Another />
    </div>
  )
}
