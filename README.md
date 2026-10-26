# Locuri de muncă în Europa

Pagină informativă în limba română despre oportunități de muncă în Luxemburg și Amsterdam. Aplicația folosește React, TypeScript, Vite și Tailwind CSS.

## Pornire locală

```bash
npm install
npm run dev
```

## Build și verificări

```bash
npm run build
npm run lint
```

## Locații

Informațiile fiecărei locații sunt definite separat în `src/config/jobs.ts`. Luxemburg este selectat implicit; Amsterdam va afișa doar mesajul de disponibilitate până când detaliile sale sunt confirmate.

Pagina acceptă linkuri directe:

- `?location=luxembourg`
- `?location=amsterdam`

Schimbarea locației actualizează URL-ul fără reîncărcarea paginii, iar butoanele înainte/înapoi ale browserului schimbă locația afișată.

## Contact și QR code

Numărul WhatsApp nu este încă configurat. Adăugați numărul real pentru locația respectivă în `src/config/jobs.ts` (format internațional, doar cifre) pentru a activa linkul de contact.

Pentru a genera un QR code SVG către site-ul publicat:

```bash
SITE_URL="https://domeniul-dvs-real" npm run generate:qr
```

Comanda scrie `public/qr-code.svg`. Nu generați un QR code de publicare către localhost sau către un domeniu neconfirmat.

## Înainte de publicare

- Furnizați și confirmați numărul WhatsApp al recruiterului.
- Confirmați condițiile pentru Luxemburg, inclusiv datele exacte, salariul brut/net și beneficiile.
- Adăugați informațiile verificate pentru Amsterdam înainte de a afișa oferta respectivă.
