# Software Development Essentials PVB - 2025
## GIT / Terminal / Filehandling / Operating Systems / Webserver

Bram Schuitema

---

## Vragen
 > **Vraag 1:**

Welk commando gebruik je in een Windows Command Prompt om bestanden in een map te bekijken?

 > **Antwoord:** dir

<br><br>
---
> **Vraag 2:**

Je bent op zoek naar **alle** jpg bestanden op je computer, welke commando in de Windows Command Prompt kan dit eenvoudig voor je uitvoeren?

> **Antwoord:**  dir C:\*.jpg /s

<br><br>
---
> **Vraag 3:**

Je hebt een website gemaakt en deze in de map C:\xampp\htdocs\portfolio\ geplaatst. Je gebruik een standaard XAMPP installatie op je laptop. Hoe bereik je de hoofdpagina via je browser? Schrijf de **volledige** URL op.

> **Antwoord:** https://localhost/portfolio/

   <br><br>
---
> **Vraag 4:**

Waar of niet waar? Een webserver zoals bijvoorbeeld Apache kan maar één website tegelijk hosten. (*vergeet ook niet de 'waarom' vraag te beantwoorden*)

> **Antwoord:** niet waar

   <br><br>

> **Waarom wel / niet:** Apache kan meerde life servers runnen want je hebt localhost:80 en localhost:8080  

   <br><br>
---
> **Vraag 5:**

Je werkt aan een website voor school. Je hebt vandaag wijzigingen gemaakt aan index.html en style.css. De bestanden staan al in je Git repository. Je wilt deze wijzigingen committen en naar GitHub pushen. Zet de commando's in de juiste volgorde (met A,B,C en D)

- A: git push
- B: git commit -m "Update: verbeter homepage layout en styling"
- C: git status
- D. git add index.html style.css 

> **Antwoord:**  D,B,A,C

   <br><br>
---
 > **Vraag 6:**

Noem naast een werkende internet verbinding, 3 belangrijke gegevens die je nodig hebt om een (S)FTP-verbinding te maken.

> **Antwoord:**


   1. Host
   2. user
   3. wachtwoord

   <br><br>
---
 > **Vraag 7:**

Wat is de juiste relatie tussen een `Dockerfile`, een `Docker Image` en een `Docker Container`?

- A: Een `Image` is een template om een `Dockerfile` te maken, die vervolgens als `Container` draait.
- B: Een `Dockerfile` is een script dat een `Container` downloadt, die je vervolgens opslaat als `Image`.
- C: Een `Dockerfile` is een recept om een `Image` te bouwen. Een `Container` is een draaiende instantie van die `Image`.
- D: Een `Container` is een zip-bestand van een `Image` en een `Dockerfile`.

> **Antwoord: (A,B,C of D)**  B

<br><br>
---
> **Vraag 8:**

Waarom gebruik je een **branch** met GIT?

> **Antwoord:**    ja, weet ik eigelijk ook niet ik krijg te horen dat ik er een moet maken en doe het gewoon

   <br><br>
---
> **Vraag 9:**

Wat is de belangrijkste functie van een 'Name-based Virtual Host' op een webserver zoals bijvoorbeeld `mijnsite.local`?

- A: Het hosten van meerdere domeinnamen op één IP-adres door te kijken naar de HTTP Host header.
- B: Het automatisch registreren van nieuwe domeinnamen in de DNS-instellingen van de server.
- C: Het toewijzen van een uniek fysiek IP-adres aan elke afzonderlijke website op de server.
- D: Het versnellen van de serververbinding door domeinnamen direct naar de hardware te routeren.

> **Antwoord: (A,B,C of D)**  A

   <br><br>
---
