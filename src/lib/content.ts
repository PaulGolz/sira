export type Paket = {
  name: string;
  preis: string;
  intervall: string;
  turnus: string;
  claim: string;
  highlight?: boolean;
  badge?: string;
  features: string[];
};

export const paketeHeading = "Drei Wartungspakete für Ihre Heizungsanlage";

export const pakete: Paket[] = [
  {
    name: "Basic",
    preis: "29,00 €",
    intervall: "pro Monat",
    turnus: "Wartung im jährlichen Turnus",
    claim: "Nur Wartung.",
    features: [
      "Sichtprüfung der Wärmepumpe",
      "Kontrolle auf Schäden und Leckagen",
      "Prüfung von Systemdruck und Systemtemperatur",
      "Kontrolle von Steuerung und Regelung",
    ],
  },
  {
    name: "Basic+",
    preis: "39,00 €",
    intervall: "pro Monat",
    turnus: "Wartung im jährlichen Turnus",
    claim: "Alle Leistungen aus Basic – plus digitale Betreuung.",
    features: [
      "Alle Leistungen aus Basic",
      "Onlineüberwachung",
      "Effizienzcontrolling",
    ],
  },
  {
    name: "Premium",
    preis: "59,00 €",
    intervall: "pro Monat",
    turnus: "Jährliche Fernabfrage, große Wartung alle 3 Jahre vor Ort",
    claim: "Premium Vollkasko – maximaler Schutz mit Garantie und Allgefahrenversicherung.",
    highlight: true,
    badge: "Premium Vollkasko",
    features: [
      "Alle Leistungen aus Basic+",
      "Jährliche technische Fernabfrage",
      "Onlineüberwachung",
      "Garantieverlängerung um jeweils 1 Jahr",
      "Bis zu 15 Jahre Garantie möglich",
    ],
  },
];

export type PaketDetail = {
  name: string;
  preis: string;
  intervall: string;
  highlight?: boolean;
  badge?: string;
  einleitung: string;
  gruppen: { titel: string; punkte: string[] }[];
  hinweis?: string;
};

export const paketeDetail: PaketDetail[] = [
  {
    name: "Basic",
    preis: "29,00 €",
    intervall: "pro Monat",
    einleitung:
      "Der Basic-Vertrag umfasst ausschließlich Wartung Ihrer Wärmepumpe. Enthalten sind grundlegende Prüfungen und Wartungsarbeiten. Onlineüberwachung und Effizienzcontrolling sind nicht enthalten.",
    gruppen: [
      {
        titel: "Sichtprüfung & Anlage",
        punkte: [
          "Sichtprüfung der Wärmepumpe",
          "Kontrolle auf Schäden und Leckagen",
          "Überprüfung der Opferanode im Warmwasserspeicher, falls vorhanden",
          "Beseitigung von Verschmutzungen oder Korrosion",
        ],
      },
      {
        titel: "Flüssigkeitskreislauf",
        punkte: [
          "Prüfung von Systemdruck und Systemtemperatur",
          "Kontrolle und Reinigung von Schmutzfängern und Schlammabscheidern",
          "Prüfung des Ausdehnungsgefäßes",
          "Kontrolle von Kondensatablauf und Kondensatwanne bei Luft-Wasser-Wärmepumpen",
          "Prüfung und gegebenenfalls Auffüllung der Sole bei Sole-Wasser-Wärmepumpen",
          "Kontrolle von Ventilen und Filtern auf Funktion und Dichtheit",
        ],
      },
      {
        titel: "Elektrik & Technik",
        punkte: [
          "Prüfung elektrischer Anschlüsse und Verbindungen",
          "Kontrolle von Steuerung und Regelung",
          "Prüfung der Umwälzpumpe",
          "Prüfung von Temperaturdifferenzen am Verflüssiger und Verdampfer",
          "Prüfung des Kältemittelstands",
          "Jährliche Dichtheitsprüfung bei Flüssigkeitskreisläufen über 3 kg",
        ],
      },
    ],
    hinweis:
      "Basic umfasst ausschließlich Wartung – ohne Onlineüberwachung und ohne Effizienzcontrolling. Verschleißteile und besondere Arbeitszeiten werden nach Bedarf zusätzlich berechnet.",
  },
  {
    name: "Basic+",
    preis: "39,00 €",
    intervall: "pro Monat",
    einleitung:
      "Basic+ enthält alle Leistungen aus dem Basic-Paket und erweitert diese um Onlineüberwachung und Effizienzcontrolling.",
    gruppen: [
      {
        titel: "Alles aus Basic",
        punkte: ["Sämtliche Leistungen des Basic-Pakets sind enthalten"],
      },
      {
        titel: "Zusätzlich in Basic+",
        punkte: ["Onlineüberwachung", "Effizienzcontrolling"],
      },
      {
        titel: "Service & Turnus",
        punkte: [
          "Wartung im jährlichen Turnus",
          "Persönliche technische Betreuung durch SiRa",
        ],
      },
    ],
    hinweis:
      "Verschleißteile und spezielle Arbeitszeiten werden auch im Basic+ Paket nach Bedarf berechnet.",
  },
  {
    name: "Premium",
    preis: "59,00 €",
    intervall: "pro Monat",
    highlight: true,
    badge: "Premium Vollkasko",
    einleitung:
      "Das Premium Vollkasko ist das umfangreichste Wartungs- und Schutzpaket der SiRa Service GmbH. Es umfasst alle Leistungen aus Basic+ und bietet zusätzlich eine umfassende Absicherung mit bis zu 15 Jahren Garantie.",
    gruppen: [
      {
        titel: "Alles aus Basic+",
        punkte: ["Alle Leistungen aus Basic+"],
      },
      {
        titel: "Zusätzlich im Premium Vollkasko",
        punkte: [
          "Jährliche technische Fernabfrage",
          "Onlineüberwachung",
          "Garantieverlängerung um jeweils 1 Jahr",
          "Bis zu 15 Jahre Garantie möglich",
        ],
      },
      {
        titel: "Volle Kostensicherheit",
        punkte: [
          "Alle Arbeiten im Preis enthalten",
          "Alle Verschleißteile im Preis enthalten",
          "Keine weiteren Kosten für den Wartungskunden",
          "Garantierter Handwerker-Service",
        ],
      },
      {
        titel: "Garantie & Versicherung",
        punkte: [
          "Garantieverlängerung um jeweils 1 Jahr",
          "Bis zu 15 Jahre Garantie möglich",
          "Garantie- und Allgefahrenversicherung",
          "Montageversicherung enthalten",
          "Betreiberhaftpflicht enthalten",
          "Versicherung aller Bauteile der Heizungsanlage",
        ],
      },
      {
        titel: "Abgesicherte Bauteile",
        punkte: [
          "Zubehör, Displays und Transformatoren",
          "Ausdehnungsgefäß",
          "Warmwasserspeicher und Pufferspeicher",
          "Umwälzpumpe",
        ],
      },
      {
        titel: "Service-Turnus",
        punkte: ["Große Wartung der Wärmepumpe alle 3 Jahre vor Ort"],
      },
    ],
    hinweis:
      "Ideal für Kunden, die maximale Sicherheit, planbare Kosten und einen umfassenden Schutz ihrer Wärmepumpe wünschen.",
  },
];

export const leistungsgruppen = [
  {
    titel: "Sichtprüfung",
    punkte: [
      "Kontrolle auf sichtbare Schäden",
      "Kontrolle auf Leckagen",
      "Prüfung auf Korrosion",
    ],
  },
  {
    titel: "Flüssigkeitskreislauf",
    punkte: [
      "Prüfung von Systemdruck und Temperatur",
      "Kontrolle von Schmutzfängern",
      "Prüfung des Ausdehnungsgefäßes",
    ],
  },
  {
    titel: "Elektrik",
    punkte: [
      "Prüfung elektrischer Anschlüsse",
      "Kontrolle der Steuerung",
      "Kontrolle der Regelung",
    ],
  },
  {
    titel: "Onlineüberwachung",
    punkte: [
      "Fernüberwachung der Heizungsanlage",
      "Kontrolle des Verbrauchsverhaltens",
      "Technische Fernabfrage der Wärmepumpe",
    ],
  },
];

export const efficiencySection = {
  headline: "62 % aller Heizungsanlagen laufen ineffizient. Ihre auch?",
  text: "Wir kümmern uns darum. Unser Mehrwert ist Ihr Ersparnis. Wir sorgen dafür, dass Ihre Wärmepumpe effizient läuft, zuverlässig arbeitet und Sie langfristig abgesichert sind.",
  expertLine: "Ihr Wartungsexperte ist immer für Sie erreichbar.",
  hours: [
    { label: "Montag bis Freitag", time: "8:00 bis 20:00 Uhr" },
    { label: "Samstag", time: "10:00 bis 20:00 Uhr" },
    { label: "Sonntag", time: "10:00 bis 20:00 Uhr" },
  ],
} as const;

export const heroTitle = {
  line1: "Ultimatives Wartungspaket",
  line2: "für Ihre Wärmepumpe.",
} as const;

export const heroClaim =
  "Wartung, technische Betreuung und Fernüberwachung für Ihre Wärmepumpenheizungsanlage.";

export const heroHighlights = [
  "Bis zu 15 Jahre Garantie im Premium Vollkasko",
  "Ab 29 € im Monat",
  "Jährliche Wartung",
] as const;

export const aboutText =
  "Die SiRa Service GmbH ist Ihr Servicepartner für Wärmepumpenheizungsanlagen. Basic umfasst nur Wartung, Basic+ ergänzt Onlineüberwachung und Effizienzcontrolling. Im Premium Vollkasko sind alle Leistungen aus Basic+ enthalten – plus Fernabfrage, Garantieverlängerung und bis zu 15 Jahre Garantie.";

export const firma = {
  marke: "SiRa Service GmbH",
  rechtsname: "SiRA zwanzigzehn GmbH",
  strasse: "Ronsdorfer Str. 53",
  plz: "40233 Düsseldorf",
  telefon: "+49 211 655020",
  telefonHref: "tel:+49211655020",
  email: "office@siraservice.de",
  emailHref: "mailto:office@siraservice.de",
  geschaeftsfuehrer: "Wolfgang Worms",
  hrb: "HRB 107951",
  registergericht: "Amtsgericht Düsseldorf",
  ustId: "DE351151402",
} as const;

export const headerNavItems = [
  { label: "Home", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Pakete", href: "/pakete" },
  { label: "Vertrag", href: "/#vertrag" },
] as const;

export const navItems = [
  ...headerNavItems,
  { label: "Kontakt", href: "/kontakt" },
] as const;

export const premiumIntro =
  "Wir garantieren Ihre Effizienz für bis zu 15 Jahre – inklusive Onlineüberwachung und Notdienst.";

export const premiumHighlightsHeading = "Unsere Highlights";

export const premiumVorteile = [
  {
    titel: "Allgefahrenversicherung",
    text: "Umfangreicher Schutz für die Wärmepumpe und wichtige Bauteile der Heizungsanlage – von technischen Schäden bis zur Betreiberhaftpflicht.",
  },
  {
    titel: "Keine Zusatzkosten",
    text: "Alle Arbeiten und Verschleißteile sind im Preis enthalten. Maximale Kostensicherheit ohne unerwartete Zusatzkosten.",
  },
  {
    titel: "Große Wartung alle 3 Jahre",
    text: "Umfassende Prüfung, Wartung und Dokumentation Ihrer Anlage direkt vor Ort.",
  },
  {
    titel: "Jährliche Fernabfrage",
    text: "Regelmäßige Kontrolle von Verbrauch, Heizverhalten und technischen Werten Ihrer Wärmepumpe.",
  },
];

export const zielgruppen = [
  "Betreiber/Eigentümer von Wärmepumpen",
  "Luft-Wasser-Wärmepumpen",
  "Sole-Wasser-Wärmepumpen",
  "Wasser-Wasser-Wärmepumpen",
  "Kunden mit Wunsch nach regelmäßiger Wartung",
  "Kunden mit technischer Fernüberwachung",
  "Kunden mit planbaren Wartungskosten",
];

export const vertragsdetails = [
  {
    titel: "Vertragslaufzeit",
    text: "Die Vertragslaufzeit beträgt zunächst 36 Monate. Die Mindestlaufzeit für alle Pakete beträgt 3 Jahre. Danach verlängert sich der Vertrag automatisch um jeweils 12 Monate, sofern keine Kündigung erfolgt. Die maximale Vertragslaufzeit beträgt 15 Jahre. Die Kündigungsfrist beträgt 6 Monate zum Vertragsende.",
  },
  {
    titel: "Zahlung",
    text: "Die monatliche Wartungsgebühr richtet sich nach dem gewählten Paket. Die Zahlung erfolgt per SEPA-Lastschrift, der Einzug bis zum 15. des laufenden Monats.",
  },
  {
    titel: "Zugang zur Anlage",
    text: "Für Wartungs- und Reparaturtermine benötigen wir Zugang zur Wärmepumpe. Ist kein Zugang möglich, vereinbaren wir einen Ersatztermin.",
  },
  {
    titel: "Gewährleistung",
    text: "Basic und Basic+ umfassen ausschließlich Wartung ohne Garantie. Bis zu 15 Jahre Garantie gibt es nur im Premium Vollkasko, sofern die Wärmepumpe regelmäßig und fachgerecht gemäß Wartungsvertrag gewartet wird. Im Premium Vollkasko erhalten Sie von uns eine Versicherungspolice.",
  },
];

export const paketOptionen = [
  "Basic",
  "Basic+",
  "Premium",
  "Noch unentschieden",
];

export const leistungsbereiche = [
  {
    titel: "Sichtprüfung",
    text: "Regelmäßige visuelle Kontrolle der Wärmepumpe und der wichtigen Anlagenbereiche.",
    punkte: [
      "Kontrolle der Wärmepumpe auf sichtbare Schäden",
      "Kontrolle auf Leckagen",
      "Überprüfung von Verschmutzungen",
      "Prüfung auf Korrosion",
      "Kontrolle wichtiger Anlagenbereiche",
    ],
  },
  {
    titel: "Flüssigkeitskreislauf",
    text: "Prüfung von Druck, Temperatur und der hydraulischen Komponenten Ihrer Anlage.",
    punkte: [
      "Prüfung von Systemdruck",
      "Prüfung von Systemtemperatur",
      "Kontrolle von Schmutzfängern",
      "Reinigung von Schlammabscheidern",
      "Prüfung des Ausdehnungsgefäßes",
      "Kontrolle des Trinkwasserausdehnungsgefäßes",
      "Prüfung von Kondensatablauf und Kondensatwanne",
      "Prüfung und Nachfüllung der Sole bei Bedarf",
    ],
  },
  {
    titel: "Ventile und Filter",
    text: "Funktions- und Dichtheitskontrolle aller Ventile und Filter.",
    punkte: [
      "Kontrolle auf Funktion",
      "Kontrolle auf Dichtheit",
      "Reinigung bei Bedarf",
      "Austausch bei Bedarf",
    ],
  },
  {
    titel: "Elektrik",
    text: "Überprüfung der elektrischen Anschlüsse, der Steuerung und der Regelung.",
    punkte: [
      "Prüfung elektrischer Anschlüsse",
      "Prüfung elektrischer Verbindungen",
      "Kontrolle der Steuerung",
      "Kontrolle der Regelung",
    ],
  },
  {
    titel: "Spezifische Prüfungen",
    text: "Auf den jeweiligen Wärmepumpentyp abgestimmte technische Kontrollen.",
    punkte: [
      "Reinigung von Zu- und Abluftkanälen bei Innenaufstellung",
      "Prüfung von Grundwasserbrunnen bei Wasser-Wasser-Wärmepumpen",
      "Prüfung auf Ablagerungen und Blockaden",
      "Kontrolle der Temperaturdifferenz an Verflüssiger und Verdampfer",
      "Prüfung des Überströmventils",
      "Kontrolle der Einstellungen der Umwälzpumpe",
    ],
  },
  {
    titel: "Kältemittelkreislauf",
    text: "Kontrolle des Kältemittels inklusive gesetzlich vorgeschriebener Dichtheitsprüfung.",
    punkte: [
      "Prüfung des Kältemittelstands",
      "Nachfüllung bei Bedarf",
      "Jährliche Dichtheitsprüfung bei Flüssigkeitskreisläufen über 3 kg",
    ],
  },
  {
    titel: "Onlineüberwachung",
    text: "Fernüberwachung und Effizienzcontrolling für planbaren, zuverlässigen Betrieb.",
    punkte: [
      "Fernüberwachung der Heizungsanlage",
      "Kontrolle des Verbrauchsverhaltens",
      "Kontrolle des Heizverhaltens",
      "Technische Fernabfrage der Wärmepumpe",
    ],
  },
];

export const leistungenIntro =
  "Von der Sichtprüfung bis zur Fernüberwachung – technische Prüfung und Wartung Ihrer Wärmepumpe, je nach gewähltem Paket.";

export const dokumentationText =
  "Nach jeder Wartung oder Reparatur erstellen wir einen schriftlichen Bericht. Darin werden die durchgeführten Arbeiten, Prüfungen und Änderungen dokumentiert. Bei Premiumverträgen kann die Dokumentation zusätzlich über die Fernüberwachung bereitgestellt werden.";

export type WizardOption = {
  value: string;
  label: string;
  beschreibung?: string;
  icon: string;
};

export type WizardStep = {
  id: string;
  frage: string;
  untertitel: string;
  options: WizardOption[];
};

export const wizardSteps: WizardStep[] = [
  {
    id: "paket",
    frage: "Welches Paket interessiert Sie?",
    untertitel: "Sie können sich später noch umentscheiden.",
    options: [
      {
        value: "Basic",
        label: "Basic",
        beschreibung: "Nur Wartung, 29,00 € / Monat",
        icon: "shield",
      },
      {
        value: "Basic+",
        label: "Basic+",
        beschreibung: "Onlineüberwachung & Effizienzcontrolling, 39,00 € / Monat",
        icon: "shieldPlus",
      },
      {
        value: "Premium",
        label: "Premium",
        beschreibung: "Premium Vollkasko mit bis zu 15 Jahren Garantie, 59,00 € / Monat",
        icon: "crown",
      },
      {
        value: "Noch unentschieden",
        label: "Noch unentschieden",
        beschreibung: "Wir beraten Sie gerne passend zu Ihrer Anlage.",
        icon: "question",
      },
    ],
  },
  {
    id: "typ",
    frage: "Welchen Wärmepumpentyp haben Sie?",
    untertitel: "So können wir die passenden Prüfungen einplanen.",
    options: [
      {
        value: "Luft-Wasser-Wärmepumpe",
        label: "Luft-Wasser",
        beschreibung: "Entzieht der Außenluft Wärme.",
        icon: "air",
      },
      {
        value: "Sole-Wasser-Wärmepumpe",
        label: "Sole-Wasser",
        beschreibung: "Nutzt Erdwärme über Sole-Kreisläufe.",
        icon: "ground",
      },
      {
        value: "Wasser-Wasser-Wärmepumpe",
        label: "Wasser-Wasser",
        beschreibung: "Nutzt Grundwasser als Wärmequelle.",
        icon: "water",
      },
      {
        value: "Unbekannt",
        label: "Weiß ich nicht",
        beschreibung: "Kein Problem, wir klären das gemeinsam.",
        icon: "question",
      },
    ],
  },
  {
    id: "alter",
    frage: "Wie alt ist Ihre Anlage?",
    untertitel: "Das Alter hilft uns bei der Einschätzung des Wartungsbedarfs.",
    options: [
      {
        value: "Neu (unter 2 Jahre)",
        label: "Unter 2 Jahre",
        beschreibung: "Neuwertige Anlage.",
        icon: "sparkle",
      },
      {
        value: "2 bis 10 Jahre",
        label: "2 – 10 Jahre",
        beschreibung: "Etablierte Anlage im Betrieb.",
        icon: "clock",
      },
      {
        value: "Über 10 Jahre",
        label: "Über 10 Jahre",
        beschreibung: "Ältere Anlage mit höherem Wartungsbedarf.",
        icon: "calendar",
      },
      {
        value: "Unbekannt",
        label: "Weiß ich nicht",
        beschreibung: "Wir finden es gemeinsam heraus.",
        icon: "question",
      },
    ],
  },
  {
    id: "anliegen",
    frage: "Was ist Ihr Anliegen?",
    untertitel: "Damit wir Ihre Anfrage richtig einordnen.",
    options: [
      {
        value: "Regelmäßige Wartung",
        label: "Regelmäßige Wartung",
        beschreibung: "Planbare Betreuung im Wartungsvertrag.",
        icon: "wrench",
      },
      {
        value: "Akutes Problem",
        label: "Akutes Problem",
        beschreibung: "Es gibt eine Störung oder einen Defekt.",
        icon: "alert",
      },
      {
        value: "Beratung gewünscht",
        label: "Beratung",
        beschreibung: "Ich möchte mich erst informieren.",
        icon: "chat",
      },
    ],
  },
];
