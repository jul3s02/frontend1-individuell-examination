# Hundpensionatet Tassen – Examination

En webbplats byggd för Hundpensionatet Tassen som visar öppettider live, låter besökaren skicka bokningsförfrågningar samt visar [kundomdömen / väder].

---

## 1. Hur man kör projektet (G)

* **Metod 1 (Lokal fil):** Dubbelklicka på `index.html` eller öppna den direkt i valfri webbläsare.
* **Metod 2 (Live Server):** Högerklicka på `index.html` i VS Code och välj **Open with Live Server** *(krävs om du valt Spår B: Väder)*.

---

## 2. Reflektion & Lärdomar (G)

### Vad var svårast?

[Fyll i 2–4 meningar om vad som var mest utmanande, t.ex. hanteringen av `localStorage`, att hålla `this`-context rätt i klassen, eller villkorslogiken för öppettiderna.]

### Vad har jag lärt mig?

[Fyll i 2–4 meningar om nya insikter du fått under arbetet med HTML, CSS, JavaScript eller felsökning.]

---

## 3. Felsökning & Bugghantering (G)

### Bugg jag fastnade på

* **Vad som hände:** [T.ex. Bokningarna försvann vid sidladdning / klockan stod stilla / `localStorage` sparade `[object Object]`].
* **Hur jag hittade felet:** [T.ex. Granskade DevTools Console, källa med `console.log()`, eller satte breakpoints i skriptet].
* **Hur det löstes:** [3–5 meningar som förklarar orsaken till felet och hur din kodaändring löste det].

---

## 4. Kodstruktur & Motiveringar (VG)

### Scope & Context (`this`)

* **Vald funktion/metod:** [Namnge metoden eller funktionen, t.ex. `laggTill()` i klassen `Bokningslista` eller en eventlyssnare].
* **Förklaring (3–5 meningar):** [Förklara hur `scope` eller `this` beter sig i denna funktion. Beskriv vad `this` pekar på och varför (t.ex. om du använde en arrow function för att behålla förälderns context eller hur klassmetoden kommer åt `this.bokningar`)].

### Val av Layout (Flexbox vs Grid)

* **Val och motivering:** [Förklara varför du valde t.ex. CSS Grid för tjänstekorten och Flexbox för nav/header. Varför passar det valet för mobila respektive större skärmar?].

### Val av Loop / Iterationsmetod

* **Vald metod:** [T.ex. `forEach()`, `map()`, eller `for...of` för att rendera bokningslistan].
* **Motivering:** [Förklara varför du valde just denna iterationsmetod framför andra alternativ när du ritar ut arrayen i DOM:en].
