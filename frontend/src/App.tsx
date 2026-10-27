import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import './App.css'
import LearningWorkspace from './component/LearningWorkspace'


function App() {
  const [topic, setTopic] = useState('')
  const [activeTopic, setActiveTopic] = useState<string | null>(null)

  function handleStartLearning() {
    const selectedTopic = topic.trim()

    if (activeTopic !== null) {
  return (
    <div className="app">
      <LearningWorkspace
        topic={activeTopic}
        onBack={() => setActiveTopic(null)}
      />
    </div>
  )
}
    

    if (!selectedTopic) return

    setActiveTopic(selectedTopic)

    // // Temporary action until we build the learning workspace.
    // alert(`Olùkọ́ will help you understand ${selectedTopic}.`)
  }

  return (
    <div className="app">
      <header className="header">
        <div className="brand">
          <img
            src="/images/eko-logo.png"
            alt="Ẹ̀kọ́ Path logo"
            className="brand-logo"
          />
          <span className="brand-name">ẹ̀kọ́ path.</span>
        </div>

        <span className="header-caption">
          Learning made intuitive
        </span>
      </header>

      <main className="hero">
        <p className="eyebrow">YOUR SPACE TO UNDERSTAND</p>

        <h1>
          What would you like to
          <span> understand today?</span>
        </h1>

        <p className="description">
          No perfect prompts. No complicated setup.
          Just begin.
        </p>

        <form
          className="topic-form"
          onSubmit={(event) => {
            event.preventDefault()
            handleStartLearning()
          }}
        >
          <label htmlFor="topic" className="sr-only">
            Topic you want to learn
          </label>

          <input
            id="topic"
            type="text"
            placeholder="e.g. Taylor series, Newton's laws, Python basics..."
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
          />

          <button type="submit" disabled={!topic.trim()}>
            Start learning <span aria-hidden="true">→</span>
          </button>
        </form>

        <p className="helper-text">
          Your learning journey begins with one topic.
        </p>
      </main>
    </div>
  )
}

export default App