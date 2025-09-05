import './App.css'
import Card from './components/card'
import Header from './components/header'
import { data } from '../data.ts'

function App() {

  return (
    <>
      <Header />
      <main>
        <div className="card-gallery" id='product'>
          {data.map((d: any) => (
            <Card 
              key={d.id}
              heading={d.heading}
              paragraph={d.paragraph}
              backgroundImage={d.backgroundImage}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default App
