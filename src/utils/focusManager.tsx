import React from 'react';

type FocusMode = 'rails' | 'settings' | 'none';

interface FocusContextType {
  focusMode: FocusMode;
  setFocusMode: (mode: FocusMode) => void;
}

const FocusContext = React.createContext<FocusContextType>({
  focusMode: 'none',
  setFocusMode: () => {}
});

interface FocusManagerProps {
  children: React.ReactNode;
}

export const GlobalFocusManager: React.FC<FocusManagerProps> = ({ children }) => {
  const [focusMode, setFocusMode] = React.useState<FocusMode>('none');

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        event.preventDefault();
      } else if (event.key === 'Escape') {
        setFocusMode('none');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <FocusContext.Provider value={{ focusMode, setFocusMode }}>
      {children}
    </FocusContext.Provider>
  );
};

export const useFocus = () => React.useContext(FocusContext);