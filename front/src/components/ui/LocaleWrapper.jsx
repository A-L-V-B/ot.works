import React, { createContext } from 'react';
import { useState } from 'react';

const LocaleContext = createContext();

const LocaleWrapper = ({children}) => {
  const [localeCtx, dispatch] = useState("fr-FR");
  // console.log(localeCtx)
  return (
    <LocaleContext.Provider value={{ localeCtx, dispatch }}>
      {children}
    </LocaleContext.Provider>
  );
};

// export default LocaleWrapper;
export { LocaleContext, LocaleWrapper };