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

export const pakete: Paket[] = [
  {
    name: "Basic",
    preis: "29,00 €",
    intervall: "pro Monat",
    turnus: "Wartung im jährlichen Turnus",
    claim: "Die zuverlässige Basiswartung für Ihre Wärmepumpe.",
    features: [
      "Sichtprüfung der Wärmepumpe",
      "Kontrolle auf Schäden und Leckagen",
      "Prüfung von Systemdruck und Systemtemperatur",
      "Kontrolle von Steuerung und Regelung",
      "Onlineüberwachung und Effizienzcontrolling",
    ],
  },
  {
    name: "Basic+",
    preis: "39,00 €",
    intervall: "pro Monat",
    turnus: "Wartung im jährlichen Turnus",
    claim: "Erweiterte Kontrollen für eine genauere technische Prüfung.",
    features: [
      "Alle Leistungen aus Basic",
      "Erweiterte Kontrolle der Anlage",
      "Intensivere Prüfung nach Checkliste",
      "Besondere Prüfungen je nach Wärmepumpentyp",
      "Zusätzliche Kontrolle wichtiger Anlagenbereiche",
    ],
  },
  {
    name: "Premium",
    preis: "59,00 €",
    intervall: "pro Monat",
    turnus: "Jährliche Fernabfrage, große Wartung alle 3 Jahre vor Ort",
    claim: "Maximaler Schutz mit Garantie und Allgefahrenversicherung.",
    highlight: true,
    badge: "Umfassendster Schutz",
    features: [
      "Alle Leistungen aus Basic und Basic+",
      "Alle Arbeiten und Verschleißteile im Preis enthalten",
      "Garantie und Allgefahrenversicherung",
      "Jährliche technische Fernabfrage",
      "Große Wartung alle 3 Jahre vor Ort",
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
      "Der Basic-Vertrag umfasst die Basiswartung Ihrer Wärmepumpe. Enthalten sind grundlegende Prüfungen und Wartungsarbeiten, damit Ihre Anlage regelmäßig kontrolliert und technisch betreut wird.",
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
      {
        titel: "Onlineüberwachung",
        punkte: [
          "Onlineüberwachung und Effizienzcontrolling",
          "Kontrolle von Verbrauchs- und Heizverhalten",
        ],
      },
    ],
    hinweis:
      "Verschleißteile und besondere Arbeitszeiten werden nach Bedarf zusätzlich berechnet.",
  },
  {
    name: "Basic+",
    preis: "39,00 €",
    intervall: "pro Monat",
    einleitung:
      "Basic+ enthält alle Leistungen aus dem Basic-Paket und erweitert diese um zusätzliche Kontrollen und intensivere Prüfungen. Geeignet für Kunden, die über die Basiswartung hinaus eine genauere technische Überprüfung ihrer Anlage wünschen.",
    gruppen: [
      {
        titel: "Alles aus Basic",
        punkte: ["Sämtliche Leistungen des Basic-Pakets sind enthalten"],
      },
      {
        titel: "Zusätzlich in Basic+",
        punkte: [
          "Erweiterte Kontrolle der Anlage",
          "Intensivere Prüfung nach Checkliste",
          "Besondere Prüfungen bei Luft-Wasser-Wärmepumpen",
          "Besondere Prüfungen bei Sole-Wasser-Wärmepumpen",
          "Zusätzliche technische Kontrolle wichtiger Anlagenbereiche",
        ],
      },
      {
        titel: "Service & Turnus",
        punkte: [
          "Wartung im jährlichen Turnus",
          "Onlineüberwachung und Effizienzcontrolling inklusive",
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
    badge: "Umfassendster Schutz",
    einleitung:
      "Das Premium-Paket ist das umfangreichste Wartungs- und Schutzpaket der SiRa Service GmbH. Es umfasst alle Leistungen aus Basic und Basic+ und bietet zusätzlich eine umfassende Absicherung der Wärmepumpenheizungsanlage.",
    gruppen: [
      {
        titel: "Alles aus Basic & Basic+",
        punkte: [
          "Alle Leistungen aus Basic",
          "Alle Leistungen aus Basic+",
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
          "Garantie mit Wartungspaket",
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
        punkte: [
          "Jährliche technische Fernabfrage der Wärmepumpe",
          "Große Wartung der Wärmepumpe alle 3 Jahre vor Ort",
        ],
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

export const heroClaim =
  "Wartung, technische Betreuung und Fernüberwachung für Ihre Wärmepumpenheizungsanlage.";

export const aboutText =
  "Die SiRa Service GmbH ist Ihr Servicepartner für Wärmepumpenheizungsanlagen. Je nach gewähltem Paket übernehmen wir die regelmäßige Kontrolle, Wartung, technische Prüfung und Absicherung Ihrer Anlage. So erhalten Betreiber mehr Sicherheit, planbare Kosten und zuverlässigen Service.";

export const firma = {
  marke: "SiRa Service GmbH",
  rechtsname: "SiRA zwanzigzehn GmbH",
  strasse: "Ronsdorfer Str. 53",
  plz: "40233 Düsseldorf",
  telefon: "+49 211 651137",
  telefonHref: "tel:+49211651137",
  email: "info@hallo-sira.de",
  emailHref: "mailto:info@hallo-sira.de",
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
  "Eigentümer von Wärmepumpen",
  "Betreiber von Wärmepumpenheizungsanlagen",
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
    text: "Die Vertragslaufzeit beträgt zunächst 12 Monate. Danach verlängert sich der Vertrag automatisch um jeweils 12 Monate, sofern keine Kündigung erfolgt. Die maximale Vertragslaufzeit beträgt 15 Jahre. Die Kündigungsfrist beträgt 6 Monate zum Vertragsende.",
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
    text: "Garantieleistungen bestehen, wenn die Wärmepumpe regelmäßig und fachgerecht gemäß Wartungsvertrag gewartet wird. Im Premiumvertrag sind die Leistungen vollständig integriert.",
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
        beschreibung: "Zuverlässige Basiswartung, 29,00 € / Monat",
        icon: "shield",
      },
      {
        value: "Basic+",
        label: "Basic+",
        beschreibung: "Erweiterte Prüfungen, 39,00 € / Monat",
        icon: "shieldPlus",
      },
      {
        value: "Premium",
        label: "Premium",
        beschreibung: "Rundumschutz mit Versicherung, 59,00 € / Monat",
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
