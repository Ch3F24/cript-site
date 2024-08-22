// import { useState } from 'react'

import Navigation from "./Navigation"
import StoryPart from "./StoryPart"

function App() {

  return (
    <main className="h-screen flex flex-col section-bg">

      <section className="h-1/3 w-full">
        <StoryPart />
      </section>

      <section className="h-1/3 w-full">
        <Navigation />
      </section>

      <section className="h-1/3 w-full">
        
      </section>
      
    </main>
  )
}

export default App
