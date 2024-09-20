

// blink the cursor
setInterval(() => {
    const cursor = document.getElementById('cursor')
    cursor.classList.toggle("blink-on")
}, 500)