export const CONSENT_KEY = "sira-cookie-consent";
export const OPEN_SETTINGS_EVENT = "sira:open-cookie-settings";
export const CONSENT_VERSION = "1";
/** Einwilligung erneut einholen nach 12 Monaten (empfohlene Praxis). */
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export type ConsentValue = "accepted" | "necessary";

export type ConsentRecord = {
  value: ConsentValue;
  timestamp: string;
  version: string;
};

export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
  }
}

export function getConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;

    const record = JSON.parse(raw) as ConsentRecord;
    if (!record.value || !record.timestamp || record.version !== CONSENT_VERSION) {
      return null;
    }

    const age = Date.now() - new Date(record.timestamp).getTime();
    if (age > CONSENT_MAX_AGE_MS) {
      window.localStorage.removeItem(CONSENT_KEY);
      return null;
    }

    return record;
  } catch {
    window.localStorage.removeItem(CONSENT_KEY);
    return null;
  }
}

export function setConsent(value: ConsentValue): ConsentRecord {
  const record: ConsentRecord = {
    value,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
  window.localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  return record;
}

export function revokeConsent() {
  window.localStorage.removeItem(CONSENT_KEY);
}

export function hasOptionalConsent(): boolean {
  return getConsent()?.value === "accepted";
}
