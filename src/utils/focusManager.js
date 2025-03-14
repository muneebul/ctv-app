import React, { createContext, useContext, useEffect, useCallback } from 'react';

const FocusContext = createContext();

export function GlobalFocusManager({ children }) {
  const handleKeyDown = useCallback((event) => {
    const focusableElements = document.querySelectorAll('.focusable');
    const currentElement = document.activeElement;
    const currentIndex = Array.from(focusableElements).indexOf(currentElement);

    let nextIndex;
    switch (event.key) {
      case 'ArrowUp':
        nextIndex = Math.max(0, currentIndex - 1);
        break;
      case 'ArrowDown':
        nextIndex = Math.min(focusableElements.length - 1, currentIndex + 1);
        break;
      case 'ArrowLeft':
        // Handle within content rail navigation
        if (currentElement.closest('[data-rail]')) {
          const rail = currentElement.closest('[data-rail]');
          const railItems = rail.querySelectorAll('.focusable');
          const itemIndex = Array.from(railItems).indexOf(currentElement);
          if (itemIndex > 0) {
            railItems[itemIndex - 1].focus();
            return;
          }
        }
        break;
      case 'ArrowRight':
        // Handle within content rail navigation
        if (currentElement.closest('[data-rail]')) {
          const rail = currentElement.closest('[data-rail]');
          const railItems = rail.querySelectorAll('.focusable');
          const itemIndex = Array.from(railItems).indexOf(currentElement);
          if (itemIndex < railItems.length - 1) {
            railItems[itemIndex + 1].focus();
            return;
          }
        }
        break;
      default:
        return;
    }

    if (nextIndex !== undefined && focusableElements[nextIndex]) {
      focusableElements[nextIndex].focus();
      event.preventDefault();
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Set initial focus
  useEffect(() => {
    const firstFocusable = document.querySelector('.focusable');
    if (firstFocusable) {
      firstFocusable.focus();
    }
  }, []);

  return (
    <FocusContext.Provider value={{}}>
      {children}
    </FocusContext.Provider>
  );
}

export const useFocus = () => {
  const context = useContext(FocusContext);
  if (context === undefined) {
    throw new Error('useFocus must be used within a FocusProvider');
  }
  return context;
};