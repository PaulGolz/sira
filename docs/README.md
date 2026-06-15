# SiRa Webseite — Projektübersicht

> Diese Datei ist die zentrale Übersicht. Die Detailinhalte stehen in `inhalt.md`, das
> Design und die verbindlichen Designregeln in `design.md`.

---

## OFFENE FRAGEN (bitte vor der Implementierung klären)

1. **Bilderzuordnung:** Freie Verteilung oder feste Zuordnung? Annahme: frei (siehe `design.md`).
2. **Bindestrich-Regel:** Gedankenstriche vermeiden, Wort-Bindestriche und "Basic+" behalten.
   Annahme bestätigt, so umsetzen.

**Geklärt:** Firmenname (Logo: SiRa, Text: SiRa Service GmbH, Impressum: SiRA zwanzigzehn GmbH),
Kontaktdaten, CTA/Kontaktformular (UI only, keine Sende-Logik vorerst), Datenschutz (siehe
`inhalt.md`), anfängliche Laufzeit 12 Monate mit Verlängerung, maximale Laufzeit 15 Jahre, Sprache Deutsch, Preise ohne MwSt-Hinweis, Garantie allgemein.

---

## Ziel des Projekts

Eine moderne, dunkle, mobil-optimierte Marketing-Webseite für die SiRa Service GmbH,
Servicepartner für Wärmepumpenheizungsanlagen. Im Mittelpunkt stehen die drei
Wartungspakete (Basic, Basic+, Premium) sowie Vertrauen, Servicequalität und planbare Kosten.

## Tech Stack (bereits im Repo vorhanden)

- **Next.js** (Preview 16.x, App Router) — `src/app/`
- **React 19**
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **TypeScript**
- Schrift: **Manrope** (lokal unter `public/Manrope/`, statische Schnitte unter
  `public/Manrope/static/`)
- Bilder: `public/h1.jpg`–`h3.jpg`, `public/h4.png`–`h9.png`

> Hinweis (aus `AGENTS.md`): Diese Next.js-Version kann Breaking Changes haben. Vor der
> Implementierung die relevanten Guides unter `node_modules/next/dist/docs/` lesen.

## Geplante Seitenstruktur

**Startseite (Landingpage)** mit Anker-Navigation. Zusätzlich eigene Seiten für
**Kontakt**, **Impressum** und **Datenschutz**.

Das **Kontaktformular** erscheint am Ende jeder Seite (vor dem Footer) und vollständig
auf der Kontaktseite. CTAs scrollen zu `#kontakt` oder verlinken auf `/kontakt`.
Vorerst nur UI, keine Sende-Logik.

Sticky-Header mit Burger-Menü auf Mobile. Jede Section füllt die einheitliche Max-Width
von links nach rechts (siehe Designregeln).

1. **Header / Navigation** — Sticky, Logo, Anker-Links, Burger-Menü (mobile), CTA → Kontakt.
2. **Hero** — Headline, Kurzclaim, CTA, großes Bild (`h1.jpg`).
3. **Über SiRa** — Wer wir sind, was wir bieten (Wartung, Betreuung, Fernüberwachung).
4. **Wartungspakete** — Drei Preis-Cards: Basic / Basic+ / Premium (Premium hervorgehoben).
5. **Leistungen im Überblick** — Gruppierte Wartungsleistungen.
6. **Premium-Vorteile** — Allgefahrenversicherung, keine Zusatzkosten, große Wartung
   alle 3 Jahre, jährliche Fernabfrage.
7. **Dokumentation & Berichte**
8. **Für wen geeignet** — Zielgruppen-Liste.
9. **Vertragsdetails** — Laufzeit, Zahlung (SEPA), Zugang, Gewährleistung, Datenschutz.
10. **Kontaktformular** — Am Ende jeder Seite (`#kontakt`), vollständig auf `/kontakt`.
11. **Footer** — Logo (SiRa), Kurzinfo, Kontaktdaten, Rechtslinks (Impressum, Datenschutz).

## Vorgehen / Reihenfolge der Umsetzung (nach Freigabe)

1. Globale Basis: Manrope einbinden, Farben/Tokens, Max-Width-Container, Tailwind-Setup.
2. Layout-Grundgerüst: Header mit Burger-Menü, Footer, Section-Wrapper.
3. Inhalts-Sections von oben nach unten gemäß `inhalt.md`.
4. Bilder einbinden (Optimierung beachten, Dateien sind aktuell sehr groß).
5. Feinschliff Mobile, Accessibility, Performance.

## Umsetzungsstand

**Hauptseite:** `/` (Version 2, Bold Brutalist), refactored in `src/components/`.

**Prototypen:** `/1`, `/3`–`/8` bleiben erreichbar. `/2` leitet auf `/` weiter.
**Versionsübersicht:** `/versionen` (mit Links zu allen Prototypen).

### Projektstruktur

```
src/
  app/
    page.tsx                  # Hauptseite (Version 2)
    versionen/page.tsx        # Prototyp-Übersicht
    1/ … 8/                   # Einzelne Design-Prototypen
    impressum/page.tsx        # Impressum
    datenschutz/page.tsx      # Datenschutzerklärung
    barrierefreiheit/page.tsx # Barrierefreiheitserklärung
  components/
    home/                 # Hero, About, DiagonalDivider, Pakete, Leistungen,
                          #   Premium, Audience, Contract, Contact
    layout/               # SiteHeader, SiteFooter, LegalPage
    ui/                   # Wordmark, CutButton
    cookies/              # CookieBanner, CookieSettingsButton, consent.ts
    prototypes/           # VersionSwitcher (nur Prototyp-Seiten)
  lib/
    content.ts            # Texte & Daten (inkl. Firma, Vertrag, Premium)
    icons.tsx             # SVG-Icons
    styles.ts             # Shared Styles (diagonal cuts, cutClass)
```

Code: Hauptseite nutzt `src/components/home/*`, `SiteHeader` und `SiteFooter`.
Rechtsseiten nutzen `LegalPage` (gemeinsames Layout). Der `CookieBanner` liegt im
Root-Layout und ist damit auf allen Seiten aktiv; „Cookie-Einstellungen" im Footer
öffnet ihn erneut (über ein Window-Event). Prototyp-Seiten nutzen weiterhin
`@/lib/content` und `VersionSwitcher`.

### Buttons & diagonale Kanten

Diagonale Buttons laufen über `CutButton` (`variant: primary | outline | light`).
Die `outline`-Variante nutzt eine Zwei-Lagen-Technik (äußerer weißer Layer + innerer
dunkler Layer mit 2 px Versatz), damit der Rand der diagonalen Schnittkante sauber
folgt und die Ecke geschlossen wirkt.

## Logo (Hinweis)

`public/logo-sira-service.jpeg` ist schwarz auf weiß (Wortmarke „S/RA" mit blauem
Schrägstrich). Auf dunklem Grund würde das JPEG einen weißen Kasten erzeugen. Für die
Prototypen wird die Wortmarke daher als Text nachgebaut (`src/components/ui/Wordmark.tsx`),
inklusive blauem Diagonal-Schrägstrich. **Empfehlung:** ein weißes/transparentes Logo als
SVG oder PNG bereitstellen, dann kann die echte Datei verwendet werden.

## Bekannte technische To-dos

- **Bildgrößen:** Die Originalbilder sind sehr groß (mehrere MB). Vor dem Livegang
  komprimieren / über `next/image` ausliefern.
- `h4`–`h9` liegen nur in 1200x900 vor → nicht als vollflächige, hochauflösende
  Hero-Bilder verwenden, sondern in kleineren/mittleren Flächen.
