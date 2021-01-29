Per usare correttamente l'applicazione:

1) Scrivi questo codice nel terminale: "npm i -g @angular/cli ; cd client/ ; npm i ; npm i cors ; npm i angular-google-charts ; cd ../server ; npm i ; npm i cors ; npm i mongodb ; npm i express" (installa le librerie) ad un certo punto chiede di digitare un "y" oppure un "n", schiacciare "n"

2) avviare il server con "npm start" e salvarsi l'url una volta caricata la apgina

3) aprire il file sdg16-api.service.ts dentro "client/src/app"

4) sostituire il valore della variabile "serverURL" con l'url ottenuto prima, togliendo l'ultima barra a fine stringa prima del secondo doppio apice di chiusura

5) assicurarsi di essere nella cartella del client e digitare "ng serve" per avviare il client
