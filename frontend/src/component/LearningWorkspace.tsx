
type LearningWorkspaceProps = {
  topic: string
  onBack: () => void
}

function LearningWorkspace({
  topic,
  onBack,
}: LearningWorkspaceProps) {
  return (
    <main className="learning-workspace">
      <button
        type="button"
        className="back-button"
        onClick={onBack}
      >
        ← Back to topics
      </button>

      <p className="eyebrow">YOUR LEARNING NOTEBOOK</p>

      <h1>{topic}</h1>

      <section className="learning-section">
        <h2>Let's begin with understanding.</h2>

        <p>
          Hi, I'm Olùkọ́, your learning companion.
          We're going to explore this topic together,
          one idea at a time.
        </p>

        <p>
          Before we begin, I want to understand what
          you already know.
        </p>

        <h3>What comes to mind when you think about {topic}?</h3>
      </section>
    </main>
  )
}

export default LearningWorkspace
