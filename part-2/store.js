const commands = process.argv[2]
const filter = process.argv[3]
const {filteredList} = require('./db')
require('console.table');
    

let runProgram = (command, filter) => {
    console.log('COMMAND', command)
    console.log('FILTER', filter)
    if(command === 'product-list') {
        filteredList(filter)
            .then(results => {
                format(results)
                process.exit(0)
            })
    }
}

const format = (result) => {
    console.log('MADE IT TO FORMAT')

    // console.table([
    //     {
    //         Product Name: 
    //         Section: 
    //     }
    // ]);

}

runProgram(commands, filter)

