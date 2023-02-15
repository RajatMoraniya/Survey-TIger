import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
import Logo from './logo.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import CreateSurvey from './components/CreateSurvey';
import Published from './components/Published';
import { useState } from 'react';



function App() {
  const [surveyQuestions, setSurveyQuestions] = useState([]);

  
  return (
    <>
      <div className="col-md-10 offset-md-1 col-12 text-center">
        <img className="col-md-6" alt="logo" src={Logo}/>
        <Router>
          <Routes>
            <Route exact path="/" element={<Menu/>}/>
            <Route exact path="/create" element={<CreateSurvey surveyQuestions={surveyQuestions} setSurveyQuestions={setSurveyQuestions}/>}/>
            <Route exact path="/publish" element={<Published surveyQuestions={surveyQuestions}/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;