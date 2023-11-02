<!-- Sulla colonna di Sinistra:
- Immagine Utente - Utente + FontAweasome per stato, messaggi e impostazioni
- Sotto c'è l'attivazione delle notifiche
- Sotto la ricerca utente: iniziando a scrivere una lettera, devono apparire gli utenti con nome che contengono quella lettera
- Per ciascun utente: Foto profilo + nome - affianco al nome l'orario dell'ultimo messaggio - sotto il nome c'è l'ultimo messaggio inviato
- al hover dell'utente c'è un grigio chiaro, al click c'è un grigio più scuro

Sulla Colonna di Destra
- Al click sull'utente di sinistra, vediamo la sua chat ed in alto vediamo il nome utente e il suo ultimo accesso
- Il messaggio contiene: messaggio e ora
- al click di un messaggio, c'è una freccia che ti da la possibilità di eliminare il msg ( preferiti etc...)
- sulla barra di scrittura, anche con enter, invia il messaggio alla chat , inviando il messaggio, si resetta la casella
- l'utente ti risponde al messaggio

In entrambe le colonne:
- Barra di scorrimento sia sulla chat che sulla lista utenti -->

# BOOLZAPP

# MY MILESTONES

## MILESTONE 1
Creare struttura HTML/CSS WebApp:
- un wrapper con height:100vh e width:100%
- un container che contenga la nostra app
- Suddivisione del container in sezioni (row):
 1. Colonna di Sinistra (col) (profilo utente - notifiche - searchbar - contatti)
 2. Colonna di Destra (col) (utente - chat - barra msg)
Con i relativi dati statici

Inserire contatti e messaggi (statici, da rendere poi dinamici)
aggiungere barra di scorrimento su entrambe le colonne
Assicurarsi la responsiveness staticas

## MILESTONE 2
Rendere dinamici messaggi e contatti
creare funzione per filtrare i contatti

Al click utente, appaia la chat con quest'ultimo
aggiungere invio messaggio


## MILESTONE 3
Aspetti estetici ai contatti ( Hover e Click)
Estetica barre di scorrimento
Responsiveness dinamica sotto determinata dimensione (al click contatto, appare solo la chat e viceversa)


## MILESTONE BONUS
Visualizzare ultimo messaggio sotto nome contatto
Visualizzare data sia su contatti che su messaggi
Aggiungere risposta utente
aggiungere funzione che elimini i messaggi

<br>
<br>
<br>
<br>
<br>



# EXERCISE MILESTONES

## Milestone 1

Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

## Milestone 2
Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
Click sul contatto mostra la conversazione del contatto cliccato


## Milestone 3
Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

## Milestone 4
Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

## Milestone 5 - opzionale
Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti 

### Consigli utili:
* Si possono trascurare le scrollbar verticali, sia nel pannello dei messaggi, che nella lista dei contatti
* I pulsanti e le icone possono non funzionare (a parte l’invio del messaggio)
* Per gestire le date, può essere utile la libreria Luxon
