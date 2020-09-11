1. What problem does the context API help solve?

  The context API helps solve the issue regarding passing props; typical react application state is typically passed top-down.

  The context API lets you store data on the context object and retrieve that data on a context object.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

  Actions in Redux are packets of information that contain ab action type and associated data. 
  
  Reducers take in two arguments (state and action) and return a new, updated state based on the two arguments passed. 

  Store sets the state. 

  All three work in conjunction:
    Store sets the state, and when there is an event or interaction triggered, the action dispatches the event and the possible changes to the reducer. The reducer takes in those two arguments, handles the action, and updates the state in store.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

  Component state is local and application state is global. Component state could be the better option when creating a small web app that has no plans on being scaled up.

  Application state feels more dense to write initially, so the benefit is not as felt on smaller web apps. As a web app grows, application state scales much better thus having more utility long term for a growing application. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

  Redux-thunk is utilized to handle asynchronous operations. It changes our action-creators because Redux middleWare can alter normal redux flow and make a call before actions make it to the reducer 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

  My Favorite state management system is the workflow we learned this week because it allows for scaled operations as well as keeping the state of each app more accessible rather than relying on parent child props.