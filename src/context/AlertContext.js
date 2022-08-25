import { createContext, useEffect, useState } from "react";

export const AlertContext = createContext();

const AlertContextProvider = ({ children }) => {
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    if (alert !== null) setTimeout(() => setAlert(null), 4000);
  }, [alert]);

  return (
    <AlertContext.Provider
      value={{
        alert,
        setAlert,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
