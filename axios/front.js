async function getContent() {
    try {
        const response = await fetch('http:/localhost:2000/')
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

getContent();