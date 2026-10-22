'use client'

import { useEffect, useRef, useState, useSyncExternalStore } from 'react'
import styles from './CookieNotice.module.css'

// An acknowledgement only; this does not grant consent to optional tracking.
const STORAGE_KEY = 'chanel-portfolio-cookie-notice-v1'
const MAX_AGE = 180 * 24 * 60 * 60 * 1000

function readAcknowledgement() {
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || 'null')
    return saved?.version === 1 && typeof saved.expiresAt === 'number' && saved.expiresAt > Date.now()
      ? 'acknowledged'
      : 'unseen'
  } catch {
    return 'unseen'
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange)
  return () => window.removeEventListener('storage', onChange)
}

export default function CookieNotice() {
  const saved = useSyncExternalStore(subscribe, readAcknowledgement, () => null)
  const [dismissed, setDismissed] = useState(false)
  const [reopened, setReopened] = useState(false)

  const noticeRef = useRef<HTMLElement>(null)
  const reopenRef = useRef<HTMLButtonElement>(null)
  const moveFocus = useRef(false)
  useEffect(() => {
    if (!moveFocus.current) return
    if (reopened) noticeRef.current?.focus()
    else reopenRef.current?.focus()
    moveFocus.current = false
  }, [reopened, dismissed])

  function acknowledge() {
    moveFocus.current = true
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        version: 1,
        expiresAt: Date.now() + MAX_AGE,
      }))
    } catch {
      // Still dismiss for this visit when browser storage is unavailable.
    }
    setDismissed(true)
    setReopened(false)
  }

  if (saved === null) return null

  if (!reopened && (dismissed || saved === 'acknowledged')) {
    return (
      <button type="button" ref={reopenRef} className={styles.reopen} onClick={() => { moveFocus.current = true; setReopened(true) }}>
        Cookie notice
      </button>
    )
  }

  return (
    <section ref={noticeRef} tabIndex={-1} className={styles.notice} aria-label="Cookies and privacy">
      <strong className={styles.title}>Cookies &amp; privacy</strong>
      <p className={styles.copy}>This site stores your acknowledgement of this notice in your browser. Information you send through the contact form is used to respond to your message.</p>
      <details className={styles.details}>
        <summary>About this notice</summary>
        <p>
          “Got it” remembers this notice for 180 days. It does not opt you into
          advertising or analytics. You can reopen this notice using “Cookie notice”
          and clear stored information in your browser settings.
        </p>
      </details>
      <div className={styles.actions}>
        
        <button type="button" onClick={acknowledge}>Got it</button>
      </div>
    </section>
  )
}

