import inquirer from "inquirer";
class Client {
    name;
    constructor(n) {
        this.name = n;
    }
}
class Person {
    clients = [];
    addClient(obj) {
        this.clients.push(obj);
    }
}
const persons = new Person();
const programmStrat = async (persons) => {
    do {
        console.log("Welcome Guest");
        const ans = await inquirer.prompt({
            type: "list",
            message: "Ap kiss say bat Karna Chahaingay...",
            name: "select",
            choices: ["khud say:Self", "Client"],
        });
        if (ans.select == "khud say:Self") {
            console.log(`Hello M Talking with Myself`);
            console.log(`Now I am Fine`);
        }
        if (ans.select == "Client") {
            const ans = await inquirer.prompt({
                type: "input",
                message: "Ap ko kis Client say baat karni hay.",
                name: "Client",
            });
            const client = persons.clients.find(val => val.name == ans.Client);
            if (!client) {
                const name = new Client(ans.Client);
                persons.addClient(name);
                console.log(`Hello i am ${name.name}, Now I am Fine`);
                console.log(persons.clients);
            }
            if (client) {
                console.log(`Hello i am ${client.name}, Now I am Fine...........`);
                console.log(persons.clients);
            }
        }
    } while (true);
};
programmStrat(persons);
