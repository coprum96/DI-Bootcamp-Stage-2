const formMarvel = document.forms.info
formMarvel.addEventListener ('submit' , validateData)

function validateData (e) {
    e.preventDefault() 

    const limitInfo = e.target.elements[0].value
    const queryInfo = e.target.elements[1].value
    if(queryInfo.length < 4 || limitInfo === "" || limitInfo !== 10) {
        console.log('wrong')
        e.preventDefault()
    }
}