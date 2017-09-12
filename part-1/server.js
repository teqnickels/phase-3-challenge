const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.json())

app.listen(3000, () => {
    console.log('Server Working')
});

daysOfWeek = {
    monday: 1, 
    tuesday: 2, 
    wednesday: 3, 
    thursday: 4,
    friday: 5, 
    saturday: 6, 
    sunday: 7 
}


app.get('/api/days/:day', (request, response) => {
    const day = request.params.day
    
    if(daysOfWeek.hasOwnProperty(`${day}`)) {
        response.send(`${day} is there`)
    }
});


