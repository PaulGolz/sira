# SiRa Webseite — Design-Konzept & Designregeln

> Verbindliche Gestaltungsvorgaben für die Umsetzung. Inhalte siehe `inhalt.md`,
> Projektübersicht siehe `README.md`.

---

## OFFENE FRAGEN (Design)

Keine offenen Designfragen. Alle Vorgaben sind geklärt und können umgesetzt werden.

---

## WICHTIG: Business & klassisch (Grundhaltung)

Die Seite soll **modern** wirken, aber genauso **seriös, business und klassisch**. Sie ist
das Aushängeschild eines Serviceunternehmens für Wärmepumpen, kein verspieltes Startup.
Das bedeutet konkret:

- Ruhige, vertrauenswürdige Anmutung. Klare Struktur, viel Ordnung, gute Lesbarkeit.
- Zurückhaltender Einsatz von Effekten. Modernität entsteht über Typografie, Raster und
  Kontrast, nicht über Spielereien.
- Klassische Gestaltungsmittel: präzise Linien, saubere Spalten, eindeutige Hierarchie.
- Der „sanfte Brutalismus" und die Diagonalität sind **Akzente**, die das klassische,
  geschäftliche Bild auflockern, es aber nie dominieren oder unseriös wirken lassen.
- Im Zweifel: lieber klassisch und solide als experimentell.

---

## Grundprinzipien (aus dem Briefing, verbindlich)

1. **Dunkel & modern, zugleich business und klassisch** (siehe Abschnitt oben).
   Hintergrundfarbe der gesamten Seite: `#0E0E0E`.
2. **Weißer Text auf dunklem Hintergrund.**
3. **Nur `h1` und `h2` als Überschriften-Tags.** Keine `h3`–`h6` verwenden. Tiefere
   Hierarchien optisch über Schriftgewicht/Größe/Farbe lösen, nicht über Heading-Tags.
4. **Kein "gesperrter" Text.** Keine künstlichen Abstände zwischen Buchstaben
   (kein `letter-spacing`), normaler Fließtext.
5. **Schrift: Manrope auf der gesamten Seite.** Lokal aus `public/Manrope/` einbinden
   (Variable Font `Manrope-VariableFont_wght.ttf` oder statische Schnitte aus
   `public/Manrope/static/`).
6. **Keine Striche/Minuszeichen im sichtbaren Text** (wirkt AI-generiert). Konkret: keine
   Gedankenstriche (— / –) als Satzzeichen. Stattdessen Sätze umformulieren, Komma oder
   Punkt verwenden.
   (Ausnahme: korrekte Wort-Bindestriche wie "Luft-Wasser-Wärmepumpe" und der
   Produktname "Basic+" bleiben erhalten.)
7. **Abwechslung statt Monotonie.** Auf keinen Fall eine komplett schwarze oder durchgehend
   dunkelgraue Seite. Variation über abgesetzte Section-Hintergründe, Bilder, Akzentfarbe,
   diagonale Flächen, Karten und Kontraste schaffen.
8. **Sanfter Brutalismus.** Große Headlines, CAPS, harte Kanten und klare Struktur, aber
   insgesamt modern und zurückhaltend. Nicht alles quadratisch oder in 90-Grad-Winkeln:
   Diagonalität bewusst einsetzen (siehe Abschnitt Brutalismus).
9. **Einheitliche Max-Width.** Eine über die ganze Seite identische maximale Content-Breite,
   fluid und responsiv skaliert (siehe Layout). **Jede Section füllt diese Max-Width von
   links bis rechts** (Bündigkeit/Einheitlichkeit).
10. **Mobile First.** Höchste Priorität: mobile Optimierung, inkl. Navigation mit
    **Burger-Menü**. Layout zuerst für kleine Screens, dann nach oben skalieren.

---

## Farbpalette

### Basis

- **Hintergrund (Basis):** `#0E0E0E`
- **Sektions-Abhebung 1:** `#141414` (leicht heller, für abwechselnde Abschnitte)
- **Sektions-Abhebung 2 / Karten:** `#1A1A1A`
- **Rahmen / Linien:** `#2A2A2A`
- **Text primär:** `#FFFFFF`
- **Text sekundär (gedämpft):** `#B5B5B5`

### Akzentfarbe (Blau, recherchiert & festgelegt)

Auf `#0E0E0E` wirken gedämpfte Blautöne schnell matschig. Bewährte Dark-Mode-Palette:
leicht höhere Sättigung/Helligkeit als im Light Mode, damit Akzente klar lesbar bleiben
(Referenz: GitHub Arctic Link Blue auf `#0D1117`, LaunchDarkly Signal Blue auf `#0E0E0E`,
Modern SaaS Blue `#3B82F6` / `#60A5FA`).

**Gewähltes Blau für SiRa:**

| Rolle | Hex | Verwendung |
|---|---|---|
| **Akzent primär** | `#4493F8` | CTAs, Links, Premium-Hervorhebung, Icons, Fokus-Ringe |
| **Akzent hell** | `#6CB4FF` | Hover, aktive Zustände, dezente Highlights |
| **Akzent gedämpft** | `#2F6FDB` | Pressed/Active, dunklere Akzentflächen |
| **Akzent transparent** | `rgba(68, 147, 248, 0.15)` | Hintergrund-Glows, Karten-Akzente, Badges |

**Warum `#4493F8`:** Klarer Electric Blue mit hohem Kontrast zu `#0E0E0E` und `#FFFFFF`,
wirkt technisch und vertrauenswürdig (passend zu Wärmepumpen-Service), nicht neon-aggressiv.
Gut lesbar auf dunklem Grund, harmonisch zu Weiß, professionell statt verspielt.

> Abwechslung entsteht über Section-Wechsel (`#0E0E0E` / `#141414`), Bildflächen,
> diagonale weiße Flächen, Akzentblau und Kartenkontraste.

---

## Brutalismus (sanft, mit Diagonalität)

**Charakter:** Modern-dunkel mit brutalistischen Akzenten, nicht roh oder kantig bis zur
Härte. Große Typo und klare Kanten ja, aber insgesamt ruhig und hochwertig.

**Umsetzung:**

- **Große Headlines:** h1 und h2 deutlich größer als Fließtext, ExtraBold/Bold.
- **CAPS:** h1 und h2 in Großbuchstaben (`text-transform: uppercase`). Fließtext und
  Paketnamen (Basic, Basic+, Premium) in normaler Schreibweise.
- **Harte Kanten:** Karten, Header, Info-Blöcke mit `border-radius: 0` oder max. 2px.
  Keine weichen Pill-Buttons als Standard.
- **Diagonalität (wichtig):** Nicht alles rechtwinklig. Bewusst einsetzen:
  - **Diagonale weiße Flächen** als Section-Trenner oder Akzent-Bänder
    (`clip-path: polygon(...)` oder schräge Pseudo-Elemente).
  - **Buttons mit schräger Kante:** z. B. rechte untere Ecke diagonal abgeschnitten
    (`clip-path`) oder schräger farbiger Streifen am Button-Rand.
  - **Hero / CTA:** dezente diagonale Overlays über Bildern (nicht nur horizontale Bänder).
  - **Premium-Card:** optional leichter diagonaler Akzent-Streifen in `#4493F8`.
- **Nicht übertreiben:** 1–2 diagonale Elemente pro Section reichen. Der Rest bleibt klar
  und strukturiert, damit die Seite nicht unruhig wirkt.

---

## Logo

- **Datei:** `public/logo-sira-service.jpeg`
- **Header:** Logo links, klickbar (Scroll to Top / Startseite), Höhe ca. 36–44px mobil,
  48–56px Desktop. Seitenverhältnis beibehalten.
- **Footer:** optional kleinere Variante desselben Logos.

---

## Typografie

- **Font-Familie:** Manrope (überall).
- **Schnitte:** Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800)
  stehen lokal bereit.
- **h1:** sehr groß, ExtraBold/Bold, CAPS, enge Zeilenhöhe (~1.05–1.15).
  Mobil ~2.25–2.75rem, Desktop ~3.5–5rem (fluid via `clamp()`).
- **h2:** groß, Bold/SemiBold, CAPS, für Section-Titel.
  Mobil ~1.75–2rem, Desktop ~2.5–3.25rem (fluid via `clamp()`).
- **Pseudo-Unterüberschriften** (statt h3): Fließtext-Element mit SemiBold + ggf.
  Akzentfarbe `#4493F8`, **kein** Heading-Tag.
- **Fließtext:** Regular, gut lesbare Größe (Basis ~16px mobil, ~17–18px Desktop),
  angenehme Zeilenhöhe (~1.6).
- **Kein `letter-spacing`.** Normale Laufweite (CAPS über `text-transform`, nicht über
  gesperrte Buchstaben).

---

## Layout & Responsive Max-Width

Die Seite muss auf allen gängigen Viewports funktionieren: Mobil, 1K-Laptop (~1366–1920px
logisch), 16"-MacBook 2K (~1512–1728px logisch) und 4K (~3840px). Auf 4K darf der Inhalt
**nicht** die volle Breite einnehmen, sondern bleibt zentriert und lesbar.

### Container-System (einheitlich für alle Sections)

```css
/* Referenzwerte für die Umsetzung */
.container {
  width: 100%;
  max-width: min(1600px, 100% - 2 * clamp(1.25rem, 4vw, 3rem));
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 4vw, 3rem);
}
```

**Erklärung:**

| Viewport | Verhalten |
|---|---|
| **Mobil (< 640px)** | Volle Breite minus ~20px Gutter je Seite |
| **Tablet (640–1024px)** | Fluid, Gutter wächst mit Viewport |
| **1K Laptop (~1280–1440px)** | Content nutzt fast die volle Breite, max. ~1360px nutzbar |
| **2K MacBook 16" (~1512–1728px)** | Content füllt breiter als klassische 1200px-Sites, bis 1600px |
| **4K (~2560–3840px)** | Cap bei **1600px**, zentriert, großzügige Außenränder |

- **Max-Width Cap: 1600px** (deutlich breiter als ursprüngliche 1200–1280px-Vorschläge).
- **Fluid Gutter:** `clamp(1.25rem, 4vw, 3rem)` passt Seitenabstände automatisch an.
- **Jede Section** nutzt denselben Container, Inhalte bündig links/rechts.
- **Vertikaler Rhythmus:** großzügige Section-Abstände via `clamp(3.5rem, 8vw, 7.5rem)`.
- **Grid:** Paket-Cards 1 Spalte (mobil) → 3 Spalten (ab ~1024px). Leistungs-Gruppen
  responsiv 1 → 2 → 3 Spalten.

### Breakpoints (Orientierung, mobile first)

- **Base:** 0–639px (Mobil)
- **sm:** 640px+
- **md:** 768px+
- **lg:** 1024px+ (Desktop-Navigation statt Burger, 3-Spalten-Grids)
- **xl:** 1280px+
- **2xl:** 1536px+ (größere Typo-Skalierung, mehr Whitespace)

---

## Komponenten / Sections (Designhinweise)

- **Header:** sticky, dunkel (`#0E0E0E`), dünne untere Linie (`#2A2A2A`). Logo links
  (`logo-sira-service.jpeg`), Anker-Links rechts. Mobil: Burger-Icon → Vollflächen-Overlay.
  Aktiver Link in `#4493F8`.
- **Hero:** große h1 (CAPS) + Claim + CTA-Button (diagonale Kante). Bild `h1.jpg` als
  Hintergrund mit dunklem Overlay. Optional diagonale weiße Fläche als Akzent.
- **Paket-Cards (Basic / Basic+ / Premium):** harte Kanten, Preis groß, Leistungsliste,
  CTA. **Premium hervorgehoben** (Akzentrahmen `#4493F8`, leicht hellere Karte `#1A1A1A`,
  optional diagonaler Blau-Streifen). Paketnamen als große fette Textelemente, kein Heading-Tag.
- **Leistungen im Überblick:** Karten-Grid; Gruppentitel SemiBold (kein h3), Bullet-Marker
  in Akzentblau.
- **Premium-Vorteile:** abwechselnde Bild/Text-Blöcke (Zickzack), Bilder `h4`–`h9`.
  Diagonale Section-Trenner zwischen Blöcken möglich.
- **Vertragsdetails:** ruhiger Info-Block, klare Trennung, ggf. Akkordeon.
- **CTA-Abschluss:** kräftiger Block, Akzent `#4493F8`, diagonal geschnittener Button.
- **Footer:** dunkel, Logo + Kurzinfo + Rechtslinks.

---

## Bilder

- Verfügbar: `public/h1.jpg`, `h2.jpg`, `h3.jpg` (große Fotos) sowie `public/h4.png`–`h9.png`
  (jeweils **1200×900**).
- **Verwendung:**
  - `h1.jpg`: Hero (vollflächig).
  - `h2.jpg`, `h3.jpg`: große Section-/Bandbilder.
  - `h4`–`h9`: mittlere Flächen (Zickzack, Teaser), nicht über 1200px Breite skalieren.
- **Auslieferung:** `next/image` mit responsiven `sizes`. Originaldateien vor Livegang
  komprimieren (mehrere MB pro Datei).
- **Lesbarkeit:** dunkles Overlay/Gradient auf Bildern mit Text.

---

## Accessibility & Qualität

- Kontrast: Weiß auf `#0E0E0E` und `#4493F8` auf `#0E0E0E` prüfen (WCAG AA).
- Tastatur-Bedienbarkeit, sichtbarer Fokus-Ring in `#4493F8`.
- Sinnvolle `alt`-Texte für alle Bilder.
- Logische Dokumentstruktur: eine h1, h2 je Section; visuelle Unterhierarchien ohne h3–h6.
- `prefers-reduced-motion` respektieren.

---

## Zusätzliche Designregeln (für einheitliches, modernes Bild)

1. **Spacing-System:** 4/8px-Schritte, Section-Abstände fluid via `clamp()`.
2. **Ecken:** harte Kanten (0–2px) als Standard. Ausnahme: diagonale Schnitte statt runde Ecken.
3. **Eine Akzentfarbe** (`#4493F8`-Familie), sparsam für CTAs, Premium, Hover, Fokus.
4. **Buttons:** primär (Akzentblau, diagonal geschnitten) + sekundär (Outline weiß/blau).
5. **Bullet-Listen einheitlich**, Marker in Akzentblau.
6. **Keine Schlagschatten** für Tiefe; Flächenkontrast, Rahmen, diagonale Elemente.
7. **Hover/Transitions dezent** (150–250ms, einheitliches Easing).
8. **Bildbehandlung konsistent:** gleiches Overlay, gleicher Zuschnitt-Stil.
9. **Section-Aufbau einheitlich:** h2 (CAPS) + Einleitung + Inhalt.
10. **Texte:** Sie-Ansprache, keine Gedankenstriche, klare Sätze.
