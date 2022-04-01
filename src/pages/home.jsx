import React from 'react';
import CreateTaskContainer from '../components/create-task-container';
import Header from '../components/header';

function Home() {
  return (
  <div>
    <Header />
    <CreateTaskContainer />
  </div>
  );
}

export default Home;
