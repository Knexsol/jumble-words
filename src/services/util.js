export const shuffle = arr => {
    let count = 0
    while(count < 100) {
        let i = Math.floor(Math.random() * arr.length)
        let j = Math.floor(Math.random() * arr.length)
        if (i !== j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
        ++count
    }
    
    return arr
}