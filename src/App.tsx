import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Index from '@acweb/pages/Index';
import Terms from '@acweb/pages/Terms';
import Privacy from '@acweb/pages/Privacy';
import Cookies from '@acweb/pages/Cookies';
import EULA from '@acweb/pages/EULA';
import PublicJobs from '@acweb/pages/PublicJobs';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" richColors />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/eula" element={<EULA />} />
        <Route path="/jobs" element={<PublicJobs />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
