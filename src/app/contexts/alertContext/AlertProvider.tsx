import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx';
import React, { createContext, useContext, useRef, useState } from "react";

type AlertType = "error" | "success" | "info";

interface AlertContextType {
  showAlert: (message: string, title?: string, type?: AlertType) => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function useGlobalAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useGlobalAlert must be used within an AlertProvider");
  }
  return context;
}

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState<AlertType>("info");
  const timeoutRef = useRef<any>(null);

  const showAlert = (newMessage: string, newTitle: string = "Notice", newType: AlertType = "info") => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setMessage(newMessage);
    setTitle(newTitle);
    setType(newType);
    setIsVisible(true);

    timeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 4000);
  };

  const getAlertColor = () => {
    if (type === "error") return "bg-red-100";
    if (type === "success") return "";
    return "bg-white border-black text-black";
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}

      <Alert 
        className={`
          fixed top-5 left-1/2 -translate-x-1/2 z-9999 w-[90%] sm:w-fit min-w-75 text-center shadow-btn border p-4
          transition-all duration-500 ease-in-out font-alegraya
          ${getAlertColor()}
          ${isVisible ? 'translate-y-0 opacity-100 visible' : '-translate-y-20 opacity-0 invisible'}
        `}
      >
        <AlertTitle className="font-extrabold font-alegraya text-2xl">{title}</AlertTitle>
        <AlertDescription className="font-ovo text-center justify-center w-full text-base">
          {message}
        </AlertDescription>
      </Alert>
    </AlertContext.Provider>
  );
}