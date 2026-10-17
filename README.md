# Hundpensionatet Tassen – Examination

En webbplats byggd för Hundpensionatet Tassen som visar öppettider live, låter besökaren skicka bokningsförfrågningar samt visar kundomdömen.

---

## 1. Hur man kör projektet (G)
* **Metod 1 (Github):** Se sidan live på github pages: https://jul3s02.github.io/frontend1-individuell-examination/
* **Metod 2 (Lokal fil):** Dubbelklicka på `index.html` eller öppna den direkt i valfri webbläsare.
* **Metod 3 (Live Server):** Högerklicka på `index.html` i VS Code och välj **Open with Live Server** 

---

## 2. Reflektion & Lärdomar 

### Vad var svårast?

Det klurigaste var de fel som inte var uppenbara t.ex. när saker fungerade lokalt men inte på github pages, när saker såg olika ut i olika webbläsare eller när något såg annorlunda ut i mobil emulatorn i webbläsaren än på en vanlig telefon. 

---

### Vad har jag lärt mig?

Jag har lärt mig mycket om JS, bland annat hur man kan skapa klockor med hjälp av timeout och mycket om rekursiva funktioner både genom klockan och med logiken i recensions slumparen. Jag har även lärt mig mycket om hur man kan separera koden genom att splitta upp den i många olika funktioner som kallar på varandra.  I css har jag också lärt mig om verktyg som css variabler för att underlätta när man använder förbestämda färgpaletter för att få en konsekvent design. 

---

## 3. Felsökning & Bugghantering 

### Bugg jag fastnade på

CSS: Det uppstod en bugg specifikt i chromium webbläsare där gradient övergången på bakgrunden i intro sektionen skapade en svart linje längst ned. Denna linje fanns inte alls i Firefox som jag utvecklade i men när jag testade i Brave eller Chrome fanns den alltid där. Jag vet fortfarande inte varför den är där men jag löste det genom att sätta background-color på sektionen under och flytta upp den 1 pixel med margin-top:-1px. 

HTML: När jag i slutet gick igenom final checks, på pages såg jag ett error meddelande i konsolen om att den fick hämta filer från “file:///” men allting funkade så jag hade inga ledtrådar men efter mycket letande hittade jag tillslut längst ner i footer en ut-kommenterad bildlänk med absolut sökväg. Den låg kvar från tidigt i projektet då jag lagt in bilder på sociala medier för att senare länka men sedan valt att ta bort dem. 

Github pages / vs code: vs code har en funktion då den autocompletear css variabler men för att den ska se de måste de finnas i samma fil, därför la jag in en temp klass som aldrig användes längst upp i varje css fil med css variablerna men när jag startade github pages visade det sig att det helt och hållet döda resten av css filerna på github. Efter lite research fick jag fram att en fil med namnet .nojekyll skulle lösa problemet vilket det inte gjorde men det löste sig sedan när jag tog bort temp klasserna. 

---

## 4. Kodstruktur & Motiveringar

### Scope & Context (`this`)

Vald funktion/klass: createLi() i klassen Booking 

I denna funktion pekar this på den specifika bookning instansen som den anropas på och eftersom en arrow funktion inte har något eget this utan bara ärver det från den övergripande createLi följer Booking instansens id med in och kan skickas med vidare till deleteBooking där det istället flyttas in i deleteId. 

---

### Val av Layout (Flexbox vs Grid)

Jag har använt en blandning av flex och grid. Det tydligaste exemplet är introsektionen där jag i desktopvyn har valt grid då innehållet är avancerat placerat i 2 dimensioner medan mobilvyn av samma del är i flex då allting bara är placerat på höjden alltså i en dimension.  

---

### Val av Loop / Iterationsmetod

Jag valde forEach() över en vanlig for loop för att den kan hålla räkningen själv så att säga utan att behöva plocka ut längden på arrayen själv. Jag valde bort map() för att jag inte ville skapa en ny array utan bara visa upp den jag hade och jag valde bort for…of för att jag inte behöver extra funktionalitet som break eller return och forEach därför är simplare. 

