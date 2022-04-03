(function() {
    const checkTypeset = event => {
        console.log(event.target)
    }

    const input = document.createElement('textarea')
    input.classList.add('input')
    input.addEventListener('change', checkTypeset, false)

    const output = document.createElement('div')
    output.classList.add('output')

    const body = document.querySelector('body')
    body.appendChild(input)
    body.appendChild(output)

})()
