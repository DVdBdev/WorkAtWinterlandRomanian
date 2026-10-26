import { useEffect, useState } from 'react'

import { jobs, type LocationId } from './config/jobs'

function getLocationFromUrl(): LocationId {
  const location = new URLSearchParams(window.location.search).get('location')
  return location === 'amsterdam' ? 'amsterdam' : 'luxembourg'
}

function App() {
  const [locationId, setLocationId] = useState<LocationId>(getLocationFromUrl)
  const job = jobs[locationId]

  useEffect(() => {
    const handlePopState = () => setLocationId(getLocationFromUrl())
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  function selectLocation(nextLocation: LocationId) {
    if (nextLocation === locationId) return

    const url = new URL(window.location.href)
    url.searchParams.set('location', nextLocation)
    window.history.pushState({}, '', url)
    setLocationId(nextLocation)
  }

  const whatsappUrl = job.whatsappNumber
    ? `https://wa.me/${job.whatsappNumber}?text=${encodeURIComponent(job.whatsappMessage)}`
    : undefined

  return (
    <main className="page">
      <header className="page-header">
        <h1>Locuri de muncă</h1>
        <p className="subtitle">Oportunități de muncă în Europa</p>

        <div className="location-switcher" role="group" aria-label="Alege locația">
          <button
            type="button"
            aria-pressed={locationId === 'luxembourg'}
            className={locationId === 'luxembourg' ? 'location-option selected' : 'location-option'}
            onClick={() => selectLocation('luxembourg')}
          >
            🇱🇺 Luxemburg
          </button>
          <button
            type="button"
            aria-pressed={locationId === 'amsterdam'}
            className={locationId === 'amsterdam' ? 'location-option selected' : 'location-option'}
            onClick={() => selectLocation('amsterdam')}
          >
            🇳🇱 Amsterdam
          </button>
        </div>
      </header>

      <article className="job-content" aria-live="polite">
        <h2>{job.title}</h2>

        {job.detailsAvailable ? (
          <>
            {job.description ? <p className="job-description">{job.description}</p> : null}

            <dl className="job-facts">
              {job.salary ? (
                <div className="job-fact">
                  <dt>Salariu</dt>
                  <dd>{job.salary}</dd>
                </div>
              ) : null}
              {job.period ? (
                <div className="job-fact">
                  <dt>Perioadă</dt>
                  <dd>{job.period}</dd>
                </div>
              ) : null}
              {job.availablePositions ? (
                <div className="job-fact">
                  <dt>Locuri disponibile</dt>
                  <dd>{job.availablePositions}</dd>
                </div>
              ) : null}
              {job.jobType ? (
                <div className="job-fact">
                  <dt>Activitate</dt>
                  <dd>{job.jobType}</dd>
                </div>
              ) : null}
            </dl>

            {job.benefits.length > 0 ? (
              <section className="content-section" aria-labelledby="benefits-heading">
                <h3 id="benefits-heading">Ce oferim</h3>
                <ul>
                  {job.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}
                </ul>
              </section>
            ) : null}

            {job.requirements.length > 0 ? (
              <section className="content-section" aria-labelledby="requirements-heading">
                <h3 id="requirements-heading">Cerințe</h3>
                <ul>
                  {job.requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}
                </ul>
              </section>
            ) : null}
          </>
        ) : (
          <p className="availability-message">{job.description}</p>
        )}

        <section className="contact-section" aria-labelledby="contact-heading">
          <h3 id="contact-heading">Contact</h3>
          {whatsappUrl ? (
            <a className="contact-button" href={whatsappUrl} target="_blank" rel="noreferrer">
              Contactează-ne pe WhatsApp
            </a>
          ) : (
            <>
              <button className="contact-button" type="button" disabled>
                Contactează-ne pe WhatsApp
              </button>
              <p className="contact-note">Numărul WhatsApp al recruiterului nu este disponibil momentan.</p>
            </>
          )}
        </section>
      </article>

      <footer className="page-footer">
        <span>Locuri de muncă</span>
        {job.contactEmail ? <a href={`mailto:${job.contactEmail}`}>{job.contactEmail}</a> : null}
        {job.contactPhone ? <a href={`tel:${job.contactPhone}`}>{job.contactPhone}</a> : null}
      </footer>
    </main>
  )
}

export default App
