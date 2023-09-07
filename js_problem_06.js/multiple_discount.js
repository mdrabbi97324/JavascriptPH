function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restRate = 70;
    const upperOf500Rate = 50;
    if (ticketQuantity <= 100) {
        const first100Price = first100Rate * ticketQuantity;
        return first100Price;
    }

    else if (ticketQuantity  <= 200) {
        const first100Price = first100Rate * 100;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketRate = second100Rate * restTicketQuantity;
        const totalTicketRate = first100Price + restTicketRate;
        return totalTicketRate;
    }
    else if(ticketQuantity <= 500) {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const restTicket = ticketQuantity - 200;
        const restTicketPrice = restTicket * restRate;
        const totalTicketPrice = first100Price + second100Price + restTicketPrice;
        return totalTicketPrice;
    }
    else {
        const first100Price = 100 * first100Rate;
        const second100Price = 100 * second100Rate;
        const rest300Price = 300 * restRate;
        const rest300UpperTicketQuantity =  ticketQuantity - 500;
        const rest300UpperTicketPrice = rest300UpperTicketQuantity * upperOf500Rate;
        const totalTicketPrice = first100Price + second100Price + rest300Price + rest300UpperTicketPrice;
        return totalTicketPrice;
    }
}

const totalTicketPrice = ticketPrice(700);
console.log(totalTicketPrice);