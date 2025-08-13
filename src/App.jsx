import {data} from "./data"

function App() {
  //tailwin styles
  const container = `grid gap-[0.5em] grid-cols-[repeat(auto-fit,minmax(150px,1fr))] 
                     grid-flow-row-dense auto-rows-[150px] m-6`
  const article = `flex items-center justify-center text-[2em] shadow-lg shadow-neutral-800/30
                   transform hover:scale-105`
  const img = `w-full h-full object-cover rounded-md`
  const wide = `col-span-2`
  const tall = `row-span-2`
  const big = `col-span-2 row-span-2`

  const imgArray = data.map(d => (
    <article className={`${article} ${d.big ? big : d.tall ? tall : d.wide ? wide : ""}`} key={d.id}>
      <img 
        src={d.img} 
        alt={d.alt} 
        className={img} 
      />
    </article>
  ))

  //

  return (
   <main className={container}>
      {imgArray}
   </main>
  )
}

export default App
