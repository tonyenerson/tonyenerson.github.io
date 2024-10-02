document.getElementById("topicSearch").addEventListener("input", (e) => {
    let textFragment = document.getElementById("topicSearch").value.toLowerCase()
    console.log('searching with text fragment', textFragment)
    let elements = document.querySelectorAll('#topicList a');
    let foundCount = 0
    for (let elem of elements) {
        if (elem.textContent.toLowerCase().includes(textFragment)) {
            elem.classList.remove('hide')
            foundCount++
        }
        else {
            elem.classList.add('hide')
        }
    }
    const noMatches = document.getElementById("noMatches")
    if (foundCount === 0) {
        noMatches.classList.remove('hide')
    }
    else {
        noMatches.classList.add('hide')
    }
})