import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import {HeaderComponent} from './Components/Header'
import {FooterView} from './Components/Footer'
import {LoginPage,CreateArticlePage,HomePage,ArticlesPage,UpdateArticlePage,UserArticlePage,UserArticlesMenu} from './Pages'
import {AuthContext} from './Common'
import './App.css'
import sync from 'css-animation-sync';

function App() {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            role: action.token.role,
            token: action.token.token,
            timeframes: action.token.userTimeFrames
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            role: action.token.role,
            token: action.token.token,
            timeframes: action.token.userTimeFrames
          };
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            isSignout: false,
            role: action.token.role,
            token: action.token.token,
            timeframes: action.token.userTimeFrames,
          };
          default:
            return null
      }
    },
    {
      isLoading: true,
      isSignout: false,
      role: null,
      token:null,
      timeframes:null
    }
  );

  console.log('State =======>', state)
  const contextFunctions = React.useMemo(
    () => ({
      signIn: data => {
        dispatch({ type: 'SIGN_IN', token: data});
      },
      signOut: async () => {
        dispatch({ type: 'SIGN_OUT', token: {
        role: null,
        token:null,
        timeframes:null } })
      },
      restore: (data) => {  
        dispatch({ type: 'RESTORE_TOKEN', token: data }) 
      }
    }),
    []
  );

  const authContext = {
    contextFunctions: contextFunctions,
    state:state,
  }
  const animation = new sync('gradient');

  
  React.useEffect(() => {
    const getSession = () => {
      // animation.stop()
      const userToken = JSON.parse(localStorage.getItem('session'));
      userToken 
        ? contextFunctions.restore(userToken)
        : console.log(null)
    };
    getSession();
  }, [contextFunctions]);


  return (
    <AuthContext.Provider value={authContext}>
    <div class="flex flex-row w-full min-h-screen bg-gray-400">
    <div class="md:w-20 bg-gray-400"></div>
    <div class="flex-col w-full  h-128 bg-white shadow-2xl">
    <Router>
        <Route path='*' component={HeaderComponent} />
        <Switch>
          <Route path='/home' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/articles' component={UserArticlesMenu} />
          <Route path='/article/:articleId' component={UserArticlePage} />
          <AuthContext.Consumer>
          {(context) => {
            console.log('Update routes for context', context) 
            if(context.state.role === 'admin') {
              return (
                <>
                  <Route exact path='/admin/articles' component={ArticlesPage} />
                  <Route path='/admin/articles/update' component={UpdateArticlePage} />
                  <Route path='/admin/articles/create' component={CreateArticlePage} />
                </>
              )
            } else {
              return (
                <Route path='*'>
                  <Redirect to='/home' />
                </Route>
              )
            }
          }}
          </AuthContext.Consumer>
      </Switch>
      <Route path='*' component={FooterView} />
    </Router>
    </div>
    <div class="md:w-20 bg-gray-400"/>

    </div>
    </AuthContext.Provider>
  );
}

export default App;
