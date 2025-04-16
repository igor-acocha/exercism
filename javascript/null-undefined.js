export function createVisitor(name, age, ticketId) {
  return {
    name: name,
    age: age,
    ticketId: ticketId,
  };
}

const visitor = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};
export function revokeTicket(visitor) {
  visitor.ticketId = null;
  return visitor;
}

const tickets = {
  "0H2AZ123": null,
  "23LA9T41": "Verena Nardi",
};

export function ticketStatus(tickets, ticketId) {
  if (!(ticketId in tickets)) {
    return "unknown ticket id";
  } else if (tickets[ticketId] === null) {
    return "not sold";
  } else {
    return `sold to ${tickets[ticketId]}`;
  }
}

export function simpleTicketStatus(tickets, ticketId) {
  if (ticketId in tickets && tickets[ticketId] !== null) {
    return tickets[ticketId];
  } else {
    return "invalid ticket !!!";
  }
}

const visitorNew = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
  gtc: {
    signed: true,
    version: "2.1",
  },
};

const visitorOld = {
  name: "Verena Nardi",
  age: 45,
  ticketId: "H32AZ123",
};

export function gtcVersion(visitor) {
  if (visitor && visitor.gtc && visitor.gtc.version) {
    return visitor.gtc.version;
  }
}
