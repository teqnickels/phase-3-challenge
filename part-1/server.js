const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(3000, () => {
    console.log('Server Working')
});

app.get('/api/days/:day', (request, response, next) => {
    const day = request.params.day
    const daysOfWeek = { monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}
    const fail = 'request: GET ' + `${request.path}` + '\n'+ 'response: ' + `${day} is not a valid day!` + '\n'+ 'status: ' + '400' 
    const success = 'request: GET ' + `${request.path}` + '\n' + 'response: ' + `${daysOfWeek[day]}` + '\n' + 'status: ' + `${response.statusCode}`
   
    response.set('content-type', 'application/text')
    !daysOfWeek.hasOwnProperty(`${day}`) ? response.status(200).send(fail) : response.status(200).send(success)

})

app.post('/api/array/concat', (request, response, next) => {
    response.set('Content-Type', 'application/json') 
    const body = request.body

    for(var prop in body) {
        if(Array.isArray(body[prop])) {
           const result = body.array1.concat(body.array2)
            console.dir(body[prop])
            const success =  'request content type: application / json' + '\n' + 'response:  ' + '{ "result" :' + '[' + `${result}` + '] }' + '\n' + 'response content type: application / json'
            response.send(success)
        } else {
            const failCase = 'request content type: application / json' + '\n' + 'response status code: 400 ' + '\n' + 'response: {"error": "Input data should be of type Array."}'
            response.send(failCase)
        }
    }
 })
 

