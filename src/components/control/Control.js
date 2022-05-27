import { useState } from "react"


const Control = props => {
    const { check, next, show } = props 
    const [guessedWord, setGuessedWord] = useState('')

    return (
        <div className="control">
            <div>
                <input type="text" 
                    value={guessedWord} 
                    onChange={e => setGuessedWord(e.target.value)}
                />
            </div>
            <div className="mt-15">
                <button type="button" className="mr-15" onClick={() => check(guessedWord)}>Check</button>
                <button type="button" className="mr-15" onClick={show}>Show</button>
                <button type="button" onClick={next}>Next</button>
            </div>
        </div>
    )
}

export default Control