const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('Server Working')
});

app.get('/api/days/:day', (request, response, next) => {
    const day = request.params.day
    response.set('content-type', 'application/text')
    
    daysOfWeek = { monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6, sunday: 7}

    const fail = 'request: GET ' + `${request.path}` + '\n'+ 'response: ' + `${day} is not a valid day!` + '\n'+ 'status: ' + '400' 
    const success = 'request: GET ' + `${request.path}` + '\n' + 'response: ' + `${daysOfWeek[day]}` + '\n' + 'status: ' + `${response.statusCode}`

    !daysOfWeek.hasOwnProperty(`${day}`) ? response.status(200).send(fail) : response.status(200).send(success)

})


