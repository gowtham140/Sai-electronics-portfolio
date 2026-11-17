import { useCallback, useSyncExternalStore } from 'react'

const STORAGE_KEY = 'sai-theme'
const listeners = new Set()

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function notify() {
  listeners.forEach((listener) => listener())
}

function getSnapshot() {
  return document.documentElement.classList.contains('dark')
}

function updateDark(next) {
  document.documentElement.classList.toggle('dark', next)
  try {
    localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
  } catch {
    // localStorage can be unavailable in private mode; the class still applies.
  }
  notify()
}

if (typeof window !== 'undefined') {
  window.addEventListener('storage', (event) => {
    if (event.key !== STORAGE_KEY || event.newValue === null) return
    document.documentElement.classList.toggle('dark', event.newValue === 'dark')
    notify()
  })
}

export function useTheme() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, () => false)

  const toggle = useCallback(() => {
    updateDark(!document.documentElement.classList.contains('dark'))
  }, [])

  return { dark, toggle }
}
