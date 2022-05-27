import { useState, useEffect } from 'react';
import './App.css';
import Word from './components/word/Word';
import Control from './components/control/Control';

function App() {
  const [words, setWords] = useState([])
  const [wordIndex, setWordIndex] = useState(0)
  const [status, setStatus] = useState({ msg: '', status: '' })

  useEffect(() => {
    const url = 'data/words.json'
    
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setWords(res)
      })
  }, 
  [])

  const check = guessedWord => {
    if(guessedWord.toLowerCase() === words[wordIndex].toLowerCase()) {
      setStatus({ msg: 'Correct !!!', status: 'success'})
    }
    else {
      setStatus({msg: 'Sorry... Please try again...', status: 'error'})
    }
  }

  const show = () => {
    setStatus({msg: 'The word is = ' + words[wordIndex], status: 'info' } )
  }

  const next = () => {
    let newWordIndex = (wordIndex+1) < words.length ? wordIndex+1 : 0
    setWordIndex(newWordIndex)
    setStatus({ msg: '', status: '' })
  }
  return (
    <div className="App">

        <h1 className='header'>Jumble Words</h1>

        {
          words.length === 0 && <h2>Loading ...</h2>
        }
        {
          words.length > 0 &&
        
          <div className='main'>
            <Word currentWord={words[wordIndex]} />
            <Control 
              next={next}
              check={check}
              show={show}
            />

            { 
              status.msg && 
              <div className={'status ' + status.status}>
                {status.msg}
              </div>
            }
          </div>
        }
    </div>
  );
}

export default App;
