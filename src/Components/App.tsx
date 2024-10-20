// import { useState } from 'react'
import { VideoProvider } from '../Context/VideoContext';

import Navigation from "./Navigation"
import StoryPart from "./StoryPart"

function App() {

  return (
    <main className="flex flex-col section-bg relative h-screen" style={{minHeight: '3716px'}} onContextMenu={(e) => e.preventDefault()} onDrag={(e) => e.preventDefault()}>
      <VideoProvider>
        
        
        <section className="h-1/3 w-full">
          <StoryPart />
        </section>

        <section className="h-1/3 w-full">
          <Navigation />
        </section>

        <section className="h-1/3 w-full">
          
        </section>

      </VideoProvider>
      
    </main>
  )
}

export default App
