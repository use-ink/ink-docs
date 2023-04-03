import { useContext } from 'react'
import { UIContext } from '../contexts/UIContext/context'

export const useUI = () => useContext(UIContext)
