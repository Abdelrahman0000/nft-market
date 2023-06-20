import Linking from './Linking.js';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import './AllStyles.css'
const queryClient = new QueryClient();

function App() {
  return (
    <div className='allStyles'>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Linking />
      </RecoilRoot>
    </QueryClientProvider>
    </div>
  );
}

export default App;
