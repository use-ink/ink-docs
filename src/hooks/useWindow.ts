import { useContext } from 'react';
import { WindowContext } from '../contexts/WindowProvider/context';

export const useWindow = () => useContext(WindowContext);