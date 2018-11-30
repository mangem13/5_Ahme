// Node.js Modul
// import * as http from 'http';
import * as path from 'path';
import * as bodyParser from 'body-parser';

// Externes Modul (via nmp installieren)
import * as express from 'express';

export class Server {

    private _port: number;
    private _server: express.Express;

    constructor (port: number) {
        const assetsPath = path.join(__dirname, '..', 'assets');
        this._port = port;
        this._server = express();
        this._server.set('views', path.join(__dirname, 'views'));
        const engine = this._server.set('view engine', 'pug');
        engine.locals.pretty = true;
        this._server.use('/public', express.static(assetsPath));
        this._server.use(bodyParser.json());
        this._server.use(bodyParser.urlencoded());
        this._server.post('/public/login.html', (req, res, next) => this.handlePostLogin(req, res, next));
        this._server.get('/liste', (req, res, next) => this.handleGetListe(req, res, next));
        this._server.get('/image.png', (req, res, next) => this.sendImage(res));
        this._server.get('/cssinternal', (req, res, next) => this.handleGetcssinternal(req, res, next));
        this._server.get('/bs', (req, res, next) => this.handleGetbs(req, res, next));
    }
// eine Anfrage wird gemacht--> händlermethode muss definiert werden damit ich die Anfrage abarbeiten kann
// (req, res, next) => this.handleGetListe(req, res, next) die funktion wird an das objekt gebunden
// datentyp überprüfung möglich
    public start () {
        this._server.listen(this.port);
        console.log('HTTP server gestartet auf port ' + this._port);
    }

    public get port () {
        return this._port;
    }

    private handlePostLogin(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body.email === 'test@test.at' &&
           req.body.password === 'geheim') {
            res.render('welcome.pug', { anrede: 'Herr', name: 'Rossi'});
        } else {
            res.status(404).send('404 NOT AUTHORIZED');
        }
    }

    private handleGetListe(req: express.Request, res: express.Response, next: express.NextFunction) {  // any = irgend ein datentyp
        // res.send('Guten Morgen, Herr Muri');
       const filePath = path.join(__dirname, '..', 'assets', 'liste.html');
       // damit wird der Dateipfad zusammengefügt/notwendig damit unsere Datei gefunden wird
        console.log(filePath);
        res.sendFile(filePath);
        // res.end(); // ende der Anfrage (Response geschickt)
        // res.end() beendet die response zu schnell das die Datei nicht mal übertragen werden kann
    }

    private handleGetcssinternal(req: express.Request, res: express.Response, next: express.NextFunction) {  // any = irgend ein datentyp
        // res.send('Guten Morgen, Herr Muri');
       const filePath = path.join(__dirname, '..', 'assets', 'cssinternal.html');
       // damit wird der Dateipfad zusammengefügt/notwendig damit unsere Datei gefunden wird
        console.log(filePath);
        res.sendFile(filePath);
        // res.end(); // ende der Anfrage (Response geschickt)
        // res.end() beendet die response zu schnell das die Datei nicht mal übertragen werden kann
    }

    private handleGetbs(req: express.Request, res: express.Response, next: express.NextFunction) {  // any = irgend ein datentyp
        // res.send('Guten Morgen, Herr Muri');
       const filePath = path.join(__dirname, '..', 'assets', 'bs.html');
       // damit wird der Dateipfad zusammengefügt/notwendig damit unsere Datei gefunden wird
        console.log(filePath);
        res.sendFile(filePath);
        // res.end(); // ende der Anfrage (Response geschickt)
        // res.end() beendet die response zu schnell das die Datei nicht mal übertragen werden kann
    }

    private sendImage(res: express.Response) {
        const filePath = path.join(__dirname, '..', 'assets', 'image.png');
        res.sendFile(filePath);
    }

    // next ist dafü da falls die Anfrage nicht sofort bearbeitet werden kann
    // und gibt sie der nächsten schicht weiter



}
