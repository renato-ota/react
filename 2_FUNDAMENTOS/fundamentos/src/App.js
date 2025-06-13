import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import Events from './components/Events';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos</h1>
      <FirstComponent />
      <TemplateExpressions />
      <Events />
      <ManageData />
      <ListRender />
    </div>
  );
}

export default App;
