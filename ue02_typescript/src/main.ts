import { Server } from './server';

// import {Person} from './person';

//// tslint:disable-next-line:prefer-const
// let p: Person = new Person ('Lorenzo', 'Muri', 2000);
// console.log(p.vorname, p.nachname, p.birthYear);

class Main {

    public static main () {
        const server = new Server(4711);
        server.start();
    }
}

Main.main();
