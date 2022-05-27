import { useState, useEffect } from "react"
import { shuffle } from '../../services/util'
import Char from "../char/Char"

const Word = props => {
    const { currentWord } = props
    const [wordArr, setWordArr] = useState([])    // Array of Characters

    useEffect(() => {
        setWordArr(shuffle(currentWord.split('')))
    }, 
    [currentWord])

    return (
        <div className="word">
            {
                wordArr.map( (c, i) => <Char 
                    char={c}
                    key={i}
                />)
            }
        </div>
    )
}

export default Word