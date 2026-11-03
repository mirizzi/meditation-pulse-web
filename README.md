# Meditation Pulse

Respira con una guida, musica e immagini che si muovono con il respiro. Se hai un orologio, una fascia
cardio o un saturimetro Bluetooth, vedi anche il battito.

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

All'apertura hai due scelte:

- **Connect your heart rate sensor:** colleghi l'orologio, la fascia o il saturimetro e la meditazione parte.
- **Just meditate:** parte subito, senza misurare niente.

La meditazione parte con il ritmo *Deep calm* (4-4-8-2, 3,3 respiri al minuto). Vedi solo il
cerchio che respira, e senti la musica e il suono del respiro. Non ci sono parole, numeri o disegni.

Il **ritmo del respiro** è la cosa più importante, perché decide come si muovono il cuore, la musica e
le immagini. Lo cambi da *Open the dashboard*, nel riquadro in alto, oppure in **Options** mentre
mediti; sotto c'è scritto a cosa serve ognuno. In **Options** scegli anche altre modalità (per
esempio *Guardian*, con il guardiano nel naso) e i suoni: musica, canto, suono del respiro, voce.

Con la tastiera: 1–8 modalità · O opzioni · L aspetto (cinematografico, macchina a vapore,
illustrato) · K guardiano · M musica · B respiro · Esc esci.

## Il battito (facoltativo)

Premi **Connect your heart rate sensor** all'apertura (o *Connect heart rate* nel dashboard) e
scegli il sensore. Se non compare nella lista, premi *Not in the list? Show every Bluetooth device*
(o *Any Bluetooth device* nel dashboard) e scegli il suo nome.

- **Android, Windows, Mac:** in Chrome o Edge.
- **iPhone e iPad:** Safari non ha il Bluetooth per il web. Installa il browser gratuito **Bluefy**
  dall'App Store e apri il link lì.
- **App Mac:** funziona direttamente: si collega da sola al primo sensore che trova. Al primo uso macOS
  chiede il permesso per il Bluetooth.

Provato con un **Garmin Venu 3S**. Su un Garmin: *Impostazioni → Sensori → Frequenza cardiaca al
polso → Trasmetti frequenza cardiaca*.

Va bene qualsiasi dispositivo che trasmette il battito con lo standard Bluetooth Heart Rate, e i
saturimetri con lo standard Bluetooth Pulse Oximeter. Se si collega come sensore cardio a Zwift,
Strava o a un tapis roulant, funziona anche qui.

- **Fasce cardio** (le più precise): Polar H10, H9, H7; Garmin HRM-Dual, HRM-Pro, HRM-Fit; Wahoo
  TICKR; Coospo, Decathlon e la maggior parte delle fasce "Bluetooth + ANT+".
- **Bracciali ottici:** Polar Verity Sense, Scosche Rhythm, Wahoo TICKR Fit, Coospo HW807.
- **Orologi** con la trasmissione del battito: quasi tutti i Garmin recenti (Venu, Forerunner, Fenix,
  vívoactive, Instinct); molti Polar (Vantage, Grit X, Pacer, Ignite); COROS (Pace, Apex, Vertix);
  vari Amazfit, Huawei, Xiaomi Smart Band e Fitbit Charge 6, con nomi diversi per l'opzione.
- **Saturimetri** da dito con Bluetooth che usano lo standard Pulse Oximeter.
  Molti saturimetri economici usano un formato tutto loro e non funzionano.
- **Apple Watch e Samsung Galaxy Watch** non trasmettono il battito da soli: serve un'app sull'orologio
  che lo trasmetta come sensore Bluetooth (cerca "heart rate broadcast" nell'App Store o nel Play
  Store). Poi si collegano come gli altri.
- **Non funzionano:** i sensori solo ANT+.

Tranne il Venu 3S, questi dispositivi non li ho provati.

## Salvare i dati

Con il battito collegato, **Download session** salva la sessione come file CSV: una riga per ogni
lettura del battito, con ora, battiti al minuto, intervalli tra i battiti (ms), tecnica, fase e
livello del respiro. Il file finisce nei Download. Con *Just meditate* non ci sono
letture da salvare.

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
