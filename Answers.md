1. What problem does the context API help solve?

It allows you to control how you can pass props throughout your application, so instead of having the app having access to all the props and risking it being changed by a component that wasn't supposed to touch it it becomes more restrictive.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

reducers: update the state based on what component it was coded for. actions: dispatches the prop based on an action to the reducers to update the state. store: collects the data and stores in a global varible to be access anywhere within the app.


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

it laymans terms an application state is store at the global level where component state is stored a local level in the react app.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
redux thunk allows us to run redux async to the rest of the applitcation, while part of are app might taking a little bit more time to load, we can still continue the rest of the functions allowing the app to finish loading.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Both have their pro and con, Redux I would say is my favorite when it comes to larger scale applitcations for the sher ability to divide the codebase into smaller chunks for readibilty, but for smaller scale applitcations i would go for Context API for the quickest of having a few lines of code written in.


