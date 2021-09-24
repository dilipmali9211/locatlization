import React from 'react'
import { useTranslation } from "react-i18next";


function App() {
  const { t } = useTranslation();
  return (
    <div className="Container">
      <div className="d-flex flex-column align-item-start">
        <p>{t('welcome_message')}</p>
      </div>

    </div>
  );
}

export default App;
