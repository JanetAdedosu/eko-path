
type LearningWorkspaceProps = {
  topic: string
  onBack: () => void
}

function LearningWorkspace({
  topic,
  onBack,
}: LearningWorkspaceProps) {
    const [studentAnswer, setStudentAnswer] = useState('')
    const [submittedAnswer, setSubmittedAnswer] = useState<string | null>(null)

function handleSubmitAnswer(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()

  const answer = studentAnswer.trim()
  if (!answer) return

  setSubmittedAnswer(answer)
}


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

<form className="diagnostic-form" onSubmit={handleSubmitAnswer}>
  <label htmlFor="student-answer">
    Your thoughts
  </label>

  <textarea
    id="student-answer"
    value={studentAnswer}
    onChange={(event) => setStudentAnswer(event.target.value)}
    placeholder="Write what you know, or simply say 'I'm starting from zero'..."
    rows={5}
  />

  <button type="submit" disabled={!studentAnswer.trim()}>
    Share my thoughts →
  </button>
</form>

{submittedAnswer !== null && (
  <div className="diagnostic-response">
    <p className="eyebrow">YOUR RESPONSE</p>
    <p>{submittedAnswer}</p>
    <p>
      Your response has been captured for this session.
      Next, Olùkọ́ will use it to decide where to begin.
    </p>
  </div>
)}

      </section>
    </main>
  )
}

export default LearningWorkspace
