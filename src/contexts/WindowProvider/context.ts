import React from 'react';

export interface WindowProps {
   scrollY: number;
} 

export const WindowContext = React.createContext<WindowProps>({
   scrollY: 0
});
