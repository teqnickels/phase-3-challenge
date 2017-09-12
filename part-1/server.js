const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('Server Working')
});

app.get('/api/days/:day', (request, response) => {
    const day = request.params.day
    response.set('content-type', 'application/text')
    
    daysOfWeek = {
        monday: 1, 
        tuesday: 2, 
        wednesday: 3, 
        thursday: 4,
        friday: 5, 
        saturday: 6, 
        sunday: 7 
    }
    
    if(!daysOfWeek.hasOwnProperty(`${day}`)) {
        response.status(200) 
        response.send(
            'request: GET ' + `${request.path}` + '\n'
            + 'response: ' + `${day} is not a valid day!` + '\n'
            + 'status: ' + `${response.statusCode}` 
        )
    } else {
        response.status(400)
            response.send(
                'request: GET '+ `${request.path}`+ '\n'
                + 'response: '+ `${daysOfWeek[day]}`+ '\n'
                + 'status: '+ `${response.statusCode}`
            )
    }
});


