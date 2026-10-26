
export type LocationId = 'luxembourg' | 'amsterdam'

export interface JobLocation {
  id: LocationId
  city: string
  country: string
  title: string
  description: string
  detailsAvailable: boolean
  salary?: string
  period?: string
  availablePositions?: string
  jobType?: string
  benefits: string[]
  requirements: string[]
  whatsappNumber?: string
  whatsappMessage: string
  contactEmail?: string
  contactPhone?: string
}

export const jobs: Record<LocationId, JobLocation> = {
  luxembourg: {
    id: 'luxembourg',
    city: 'Luxemburg',
    country: 'Luxemburg',
    title: 'Locuri de muncă — Luxemburg',
    description:
      'Căutăm 3–4 persoane serioase și motivate, femei, bărbați sau cupluri, pentru a lucra la un stand de mâncare la Târgul de Crăciun din Luxemburg.',

    detailsAvailable: true,

    salary: '100–150 €/zi, în funcție de numărul de ore lucrate',
    period: '20 noiembrie 2026 – 5 ianuarie 2027',
    availablePositions: '3–4 persoane',
    jobType: 'Stand alimentar – Târgul de Crăciun',

    benefits: [
      'Cazare gratuită pe toată perioada șederii.',
      'Duș, toaletă și mașină de spălat.',
      'Mâncare asigurată la standul unde lucrezi.',
      'Băuturi asigurate.',
      'Preluare de la aeroport și transfer la locul de muncă și cazare.',
      'Ajutor la instalarea în apartament.',
    ],

    requirements: [
      'Persoane serioase și motivate.',
      'Sunt acceptate femei, bărbați și cupluri.',
      'Carte de identitate valabilă.',
      'Cont bancar pentru efectuarea plăților.',
      'Disponibilitate între 20 noiembrie 2026 și 5 ianuarie 2027.',
      'Cunoașterea limbii engleze.',
      'Franceza sau germana constituie un avantaj.',
    ],
    whatsappNumber: '32485229140',

    whatsappMessage:
      'Bună ziua! Sunt interesat(ă) de locurile de muncă din Luxemburg, la Târgul de Crăciun. Aș dori mai multe informații. Numărul de persoane: [număr]. Limbile vorbite: [limbi]. Mulțumesc!',
  },

  amsterdam: {
    id: 'amsterdam',
    city: 'Amsterdam',
    country: 'Țările de Jos',
    title: 'Locuri de muncă — Amsterdam',
    description:
      'Căutăm 3–4 persoane serioase și motivate, femei, bărbați sau cupluri, pentru a lucra la un stand de mâncare la Târgul de Crăciun din Amsterdam.',

    detailsAvailable: true,

    salary: '100–150 €/zi, în funcție de numărul de ore lucrate',
    period: '12 noiembrie 2026 – 5 ianuarie 2027',
    availablePositions: '3–4 persoane',
    jobType: 'Stand alimentar – Târgul de Crăciun',

    benefits: [
      'Cazare gratuită pe toată perioada șederii.',
      'Duș, toaletă și mașină de spălat.',
      'Mâncare asigurată la standul unde lucrezi.',
      'Băuturi asigurate.',
      'Preluare de la aeroport și transfer la locul de muncă și cazare.',
      'Ajutor la instalarea în apartament.',
    ],

    requirements: [
      'Persoane serioase și motivate.',
      'Sunt acceptate femei, bărbați și cupluri.',
      'Carte de identitate valabilă.',
      'Cont bancar pentru efectuarea plăților.',
      'Disponibilitate între 12 noiembrie 2026 și 5 ianuarie 2027.',
      'Cunoașterea limbii olandeze sau engleze.',
    ],
    whatsappNumber: '32485229140',

    whatsappMessage:
      'Bună ziua! Sunt interesat(ă) de locurile de muncă din Amsterdam, la Târgul de Crăciun. Aș dori mai multe informații. Numărul de persoane: [număr]. Limbile vorbite (olandeză/engleză): [limbi]. Mulțumesc!',
  },
}
