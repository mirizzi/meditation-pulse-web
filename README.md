# Meditation Pulse

Respira con una guida, musica e immagini che si muovono con il respiro. Se hai un orologio o una
fascia cardio Bluetooth, vedi anche il battito.

**Apri:** https://mirizzi.github.io/meditation-pulse-web/

Funziona su iPhone, Android, Windows e Mac. Sul telefono la puoi aggiungere alla schermata Home e poi
si apre come un'app, anche senza connessione.

## Installarla

- **iPhone / iPad:** apri il link in Safari → tasto Condividi → *Aggiungi alla schermata Home*.
- **Android:** apri il link in Chrome → menu ⋮ → *Installa app* (oppure *Aggiungi a schermata Home*).
- **Windows / Mac:** apri il link in Chrome o Edge → icona di installazione nella barra dell'indirizzo.
- **Mac, come app:** scarica `Meditation-Pulse.dmg` dalla pagina
  [Releases](https://github.com/mirizzi/meditation-pulse-web/releases), aprilo e trascina l'app in
  Applicazioni. Non è firmata da Apple: al primo avvio macOS la blocca. Vai in
  *Impostazioni di Sistema → Privacy e sicurezza* e premi *Apri comunque*.

## Come si usa

Premi **Meditate**. In **Options** scegli la tecnica di respiro, la modalità (per esempio
*Guardian*, con il guardiano nel naso) e i suoni: musica, canto, suono del respiro, voce.

Con la tastiera: 1–8 modalità · O opzioni · L aspetto (cinematografico, macchina a vapore,
illustrato) · K guardiano · M musica · B respiro · Esc esci.

## Il battito (facoltativo)

Premi **Connect heart rate** e scegli il sensore. Funziona in Chrome o Edge su Android, Windows e Mac.
Su iPhone e nell'app Mac non funziona, perché lì il Bluetooth dal web non c'è.

Provato con un **Garmin Venu 3S**. Su un Garmin: *Impostazioni → Sensori → Frequenza cardiaca al
polso → Trasmetti frequenza cardiaca*.

Va bene qualsiasi dispositivo che trasmette il battito con lo standard Bluetooth Heart Rate. Se si
collega come sensore cardio a Zwift, Strava o a un tapis roulant, funziona anche qui.

- **Fasce cardio** (le più precise): Polar H10, H9, H7; Garmin HRM-Dual, HRM-Pro, HRM-Fit; Wahoo
  TICKR; Coospo, Decathlon e la maggior parte delle fasce "Bluetooth + ANT+".
- **Bracciali ottici:** Polar Verity Sense, Scosche Rhythm, Wahoo TICKR Fit, Coospo HW807.
- **Orologi** con la trasmissione del battito: quasi tutti i Garmin recenti (Venu, Forerunner, Fenix,
  vívoactive, Instinct); molti Polar (Vantage, Grit X, Pacer, Ignite); COROS (Pace, Apex, Vertix);
  vari Amazfit, Huawei, Xiaomi Smart Band e Fitbit Charge 6, con nomi diversi per l'opzione.
- **Non funzionano da soli:** Apple Watch e Samsung Galaxy Watch, perché non trasmettono il battito
  senza un'app di terze parti. Non vanno nemmeno i sensori solo ANT+.

Tranne il Venu 3S, questi dispositivi non li ho provati.

## Salvare i dati

Con un sensore collegato, **Download session** salva la sessione come file CSV: una riga per ogni
lettura del battito, con ora, battiti al minuto, intervalli tra i battiti (ms), tecnica, fase e
livello del respiro. Su iPhone, con l'app aggiunta alla schermata Home, si apre il foglio di
condivisione: *Salva su File*, Mail e così via.

La sessione si può scaricare finché la pagina è aperta, anche dopo *Stop session*; chiudendo la
pagina si perde. Le opzioni e quello che impara *Find my rhythm* restano invece nel browser.

## Privacy

Non c'è nessun account e nessun server: tutto resta nel tuo browser. Servono solo le librerie
Tone.js e three.js, scaricate da cdnjs e jsDelivr.

Non è un dispositivo medico.

---

Fatta da un amico, per gli amici. I modelli 3D del soldato e del manichino vengono dagli esempi di
three.js; il resto della grafica è disegnato nel codice. Le note della musica sono registrate da uno
strumento vero.
