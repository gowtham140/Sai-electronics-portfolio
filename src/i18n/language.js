import { useSyncExternalStore } from 'react'
import { en } from '../data/site.en'
import { ta } from '../data/site.ta'

const STORAGE_KEY = 'sai-lang'
const listeners = new Set()

function readStoredLanguage() {
  if (typeof window === 'undefined') return 'en'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'ta' || stored === 'en' ? stored : 'en'
  } catch {
    return 'en'
  }
}

let current = readStoredLanguage()

function applyDocumentMeta(language) {
  if (typeof document === 'undefined') return
  const content = language === 'ta' ? ta : en
  document.documentElement.lang = language
  document.title = content.meta.title
  const description = document.querySelector('meta[name="description"]')
  if (description) description.setAttribute('content', content.meta.description)
}

function notify() {
  listeners.forEach((listener) => listener())
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

if (typeof window !== 'undefined') {
  applyDocumentMeta(current)
  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY) return
    if (event.newValue !== 'en' && event.newValue !== 'ta') return
    current = event.newValue
    applyDocumentMeta(current)
    notify()
  })
}

export function setLanguage(language) {
  if (language === current) return
  current = language
  applyDocumentMeta(language)
  try {
    window.localStorage.setItem(STORAGE_KEY, language)
  } catch {
    // Storage can be unavailable in private modes; the page still switches.
  }
  notify()
}

export function useLanguage() {
  const language = useSyncExternalStore(
    subscribe,
    () => current,
    () => 'en',
  )

  return {
    language,
    setLanguage,
    toggleLanguage: () => setLanguage(language === 'en' ? 'ta' : 'en'),
  }
}

export function useContent() {
  const { language } = useLanguage()
  return language === 'ta' ? ta : en
}
