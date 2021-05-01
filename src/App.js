
import './style/App.css';
import Header from './header';
import AllNews from './AllNews';

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import BestAllNews from './BestAllNews';
import TopAllNews from './TopAllNews';
import Comments from './Comments';




function App() {
  return (
    
    <Router>
        <div className="App">
          < Switch>
              <Route exact path='/'>
                  <Header></Header>
                  <div className='NewStories' id='New'>
                      <AllNews></AllNews>
                    </div>
                  <div className='BestStories' id='Best'>
                      <hr></hr>
                      <div className='News-category'>
                        <h1>Best Stories</h1>
                      </div>
                      <BestAllNews></BestAllNews>
                  </div>

                  <div className='TopStories' id='Top'>
                        <div className='News-category'>
                          <h1>Top Stories</h1>
                      </div>
                      <TopAllNews></TopAllNews>
                 </div>

              </Route>
              <Route exact path='/comments'>
                  <Comments></Comments>

              </Route>
          </Switch>
        </div>
    </Router>
   
  );
}

export default App;
