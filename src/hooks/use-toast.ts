import { useState, useEffect, useCallback } from 'react'

const TOAST_LIMIT = 1
let count = 0

function genId() {
  count = (count + 1) % Number.MAX_VALUE
  return count.toString()
}

type ToastActionElement = React.ReactNode

export interface Toast {
  id: string
  title?: string
  description?: string
  action?: ToastActionElement
  duration?: number
  dismiss?: () => void
}

interface State {
  toasts: Toast[]
}

type Action =
  | { type: 'ADD_TOAST'; toast: Toast }
  | { type: 'UPDATE_TOAST'; toast: Partial<Toast> & { id: string } }
  | { type: 'DISMISS_TOAST'; toastId?: string }

const memoryState: { toasts: Toast[]; listeners: Array<(state: State) => void> } = {
  toasts: [],
  listeners: [],
}

function dispatch(action: Action) {
  switch (action.type) {
    case 'ADD_TOAST':
      memoryState.toasts = [action.toast, ...memoryState.toasts].slice(0, TOAST_LIMIT)
      break
    case 'UPDATE_TOAST':
      memoryState.toasts = memoryState.toasts.map((t) =>
        t.id === action.toast.id ? { ...t, ...action.toast } : t,
      )
      break
    case 'DISMISS_TOAST':
      memoryState.toasts = memoryState.toasts.filter((t) => t.id !== action.toastId)
      break
  }
  memoryState.listeners.forEach((listener) => listener({ toasts: [...memoryState.toasts] }))
}

export function toast({ ...props }: Omit<Toast, 'id'>) {
  const id = genId()

  const update = (props: Partial<Toast>) =>
    dispatch({ type: 'UPDATE_TOAST', toast: { ...props, id } })

  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id })

  dispatch({
    type: 'ADD_TOAST',
    toast: { ...props, id, dismiss },
  })

  return { id, dismiss, update }
}

export function useToast() {
  const [state, setState] = useState<State>(memoryState)

  useEffect(() => {
    memoryState.listeners.push(setState)
    return () => {
      memoryState.listeners = memoryState.listeners.filter((l) => l !== setState)
    }
  }, [])

  const autoDismiss = useCallback(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []
    state.toasts.forEach((t) => {
      if (t.duration === Infinity) return
      const timeout = setTimeout(() => {
        t.dismiss?.()
      }, t.duration || 5000)
      timeouts.push(timeout)
    })
    return () => timeouts.forEach(clearTimeout)
  }, [state.toasts])

  useEffect(() => {
    const cleanup = autoDismiss()
    return cleanup
  }, [autoDismiss])

  return {
    toast,
    toasts: state.toasts,
  }
}
