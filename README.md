        ------ Redux Implementaion for React Application ------
- As part of this application, We implemented the Redux state manager and integrated with React application.
- We are moving the state management into a Redux Store for this React Application.
- To create a Redux Store, We just need to call createStore() function with main Reducer as an argument. See the store.js file.

- To create a Reducer, we just need to define a pure function which takes initial state and action as an arguments and return the new state(which is Updated State). See the reducers.js file.

- Used the Redux Store in BookList component.

- Redux application is nothing without actions. Redux uses dispatch() function which is available on the Store to allow the componets to trigger actions.

- Once Actions performed it will be notified to the Reducers and update the application state based on the action data.

- We subscribe the store in componentDidMount() life cycle method and unsubscribe it in componentWillUnmount() life cycle method.

- Applied Redux Promise Middleware by importing redux-promise package and passing it as an arugement into createStore method in store.js file.

- Implemented delete book action with redux - But not working ,
    -- Failing with
    BookList.js:56 Uncaught TypeError: Cannot read property 'dispatch' of undefined(…)


          -------Use Case Specification -----
As part of this application, we made read operation to pull books/authors data from server endpoints.
- Moved data to API server and made available through endpoints.
- then we use native fetch() call to bring data to React Application.
- Look at fetch API specification from https://github.com/github/fetch
- Slightly improve the shape of the Data that effects the quality of front end code.
- Provide the Event Handling feature to remove the record(Of course, Data not persisted).

  -- Execution Steps
    - npm install
    - node server.js
    - test below endpoint in browser to check server call works without any issues, http://localhost:8000/api/books
    - npm start
    - http://localhost:3000
