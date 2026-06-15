# Bild-Prompts für Google AI Studio (SiRa Service GmbH)

Prompts zur Generierung der noch benötigten Fotos für die Webseite. Die Prompts sind
bewusst auf **Englisch** formuliert (Bildmodelle liefern damit konsistentere Ergebnisse),
der Kontext bleibt aber „deutsches Wohnhaus / deutscher Heizungsraum".

## Wichtig zu Dateien & Formaten

| Datei | Verwendung auf der Seite | Format / Größe | Seitenverhältnis |
|---|---|---|---|
| `h1.jpg` | Homepage-Band, Premium-Section | groß, JPG | 16:9 quer |
| `h2.jpg` | Hero, Leistungen-Band | groß, JPG | 16:10 quer |
| `h3.jpg` | Leistungen (groß), Vertrags-Band | groß, JPG | 16:9 quer |
| `h4.png` | kleine Teaser (Leistungen, Premium) | 1200×900 PNG | 4:3 |
| `h5.png` | kleine Teaser (Leistungen, Zielgruppe) | 1200×900 PNG | 4:3 |
| `h6.png` | Split-Band (Leistungen, Zielgruppe) | 1200×900 PNG | 4:3 |
| `h7.png` | Split-Band (Leistungen), Dokumentation | 1200×900 PNG | 4:3 |
| `h8.png` | Premium-Teaser | 1200×900 PNG | 4:3 |
| `h9.png` | Premium-Teaser | 1200×900 PNG | 4:3 |

> Nach dem Generieren in den `public/`-Ordner legen, exakt unter diesen Dateinamen.
> Große Bilder vor dem Livegang komprimieren (TinyPNG/Squoosh), Ziel < 400 KB.

---

## Gemeinsamer Stil (in jeden Prompt übernehmen)

> **Style baseline:** professional editorial photography, photorealistic, modern and clean,
> business-like and trustworthy. Cool desaturated color grade with deep near-black shadows
> (#0E0E0E feel) and a subtle cool-blue accent (around #4493F8). Soft natural daylight,
> high dynamic range, crisp focus, realistic materials. German residential / technical
> context. No text, no logos, no watermarks, no people's faces in focus unless specified.
>
> **Negative prompt:** text, watermark, logo, distorted geometry, extra fingers, oversaturated
> colors, HDR halos, cartoon, illustration, lens dirt, cluttered background, fisheye distortion.

---

## h1.jpg — Wärmepumpe am modernen Wohnhaus (Hero-Band)

```
Photorealistic exterior shot of a modern air-source heat pump unit standing on a concrete
base beside a contemporary German single-family house, clean render facade, neat garden
gravel, soft overcast daylight. Three-quarter angle, the heat pump sharp in the foreground,
house softly blurred behind. Cool desaturated grade, deep shadows, subtle cool-blue accent
in the highlights. Editorial architectural photography, 16:9, high detail.
```

## h2.jpg — Technische Betreuung / Fernüberwachung (Hero)

```
Photorealistic close-up of a service technician's gloved hands checking a heat pump's
control panel, a wall-mounted controller with a simple display, neat copper and insulated
piping at the edge of the frame. Utility room with clean light-grey walls. Soft directional
daylight from the side, shallow depth of field. Cool, professional color grade with a faint
blue accent glow from the display. 16:10, sharp, premium technical mood.
```

## h3.jpg — Wärmepumpe & Heizungsanlage im Betrieb (Band)

```
Photorealistic wide interior shot of a tidy German utility / heating room: indoor heat pump
unit and hot-water buffer tank with insulated pipework, pressure gauges and valves, clean
and well organised. Neutral grey concrete floor, soft even daylight. Cool desaturated grade,
deep shadows, restrained blue accent. Architectural interior photography, 16:9, crisp detail.
```

## h4.png — Sichtprüfung (Teaser)

```
Photorealistic macro detail of a gloved hand inspecting the casing of a heat pump for damage
and corrosion, fingertip pointing at a metal seam, fine textures of brushed metal and
plastic. Soft daylight, shallow depth of field, cool desaturated grade with subtle blue
accent. Clean background. 4:3 (1200x900), high detail.
```

## h5.png — Flüssigkeitskreislauf / Druckprüfung (Teaser)

```
Photorealistic close-up of an analog pressure gauge and insulated heating pipes of a heat
pump system, a hand near a valve, droplets of condensation on metal. Utility room, soft
side light, shallow depth of field. Cool color grade, deep shadows, faint blue accent on
the gauge glass. 4:3 (1200x900), sharp, technical and clean.
```

## h6.png — Elektrik / Steuerung (Split-Band)

```
Photorealistic close-up of the opened electrical control compartment of a heat pump: neat
wiring, terminal blocks and a small circuit board, a technician's hand with a screwdriver
checking a connection. Cool, even light, professional and orderly. Desaturated grade with
a subtle blue accent. 4:3 (1200x900), crisp detail, no clutter.
```

## h7.png — Onlineüberwachung / Dokumentation (Split-Band & Doku)

```
Photorealistic shot of a technician holding a tablet that shows a simple, clean monitoring
dashboard with graphs (no readable text), standing next to a heat pump unit. Soft daylight,
shallow depth of field on the tablet, the unit blurred behind. Cool professional grade,
gentle blue glow from the screen. 4:3 (1200x900), modern and trustworthy.
```

## h8.png — Garantie & Versicherung (Premium-Teaser)

```
Photorealistic close-up of two people at a clean wooden desk reviewing a service contract
document and shaking hands, focus on hands and paper (faces out of frame or blurred), a
modern bright office. Warm-neutral but cool-graded, soft daylight, shallow depth of field,
subtle blue accent. Conveys trust and security. 4:3 (1200x900), editorial business photo.
```

## h9.png — Große Wartung vor Ort (Premium-Teaser)

```
Photorealistic shot of a service technician in clean workwear kneeling beside an outdoor
heat pump unit with an open tool case, performing maintenance, focused and professional.
Residential garden setting, soft overcast daylight, cool desaturated grade with subtle blue
accent, shallow depth of field. 4:3 (1200x900), high detail, premium service mood.
```

---

## Tipps für Google AI Studio

- Modell: **Imagen / Gemini image generation**. Seitenverhältnis pro Bild explizit setzen
  (16:9, 16:10 bzw. 4:3), sonst quadratisch.
- Pro Bild 3–4 Varianten generieren und die ruhigste, am wenigsten „gestellte" wählen.
- Einheitlichkeit: bei jedem Prompt denselben „Style baseline"-Block anhängen, damit alle
  Fotos zusammenpassen (gleiche Lichtstimmung & Farbgrade).
- Falls Gesichter erkennbar werden und das nicht gewünscht ist: „faces out of frame /
  blurred" verstärken oder Bildausschnitt ohne Personen wählen.
- Reale Markennamen/Logos vermeiden (Negative Prompt nutzen).
