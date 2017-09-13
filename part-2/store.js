const commands = process.argv[2]
const filter = process.argv[3]


let runProgram = (command, filter) => {
    switch (commands) {
        case ('product-list'): 
            filteredList(filter)
            break;
        
        case('shopper-order'):
            shopperOrder(filter)
            break;

        case('real-shoppers'):
            shoppers()
            break;
    };

}


runProgram(commands, filter)

