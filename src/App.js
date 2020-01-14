import React from 'react';


import {BrowserRouter, Route} from "react-router-dom"
// import logo from './logo.svg';
// import './App.css';


import HomeComponent from "./Home.js"

// import ProductList from "./ProductList.js"
import UserList from "./components/Blogs-UI/UserList.js"
import UserShow from "./components/Blogs-UI/UserShow.js"
import Posts from "./components/Blogs-UI/Posts.js"
import CommentShow from "./components/Blogs-UI/CommentShow.js"
import PostShow from "./components/Blogs-UI/PostShow.js"

function App() {
  return (
  <BrowserRouter>
   <div className='container-fluid'>
   <nav className="navbar navbar-expand-lg navbar-light bg-light ">
  <a className="navbar-brand" href="/" >BLOGS</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active" >
        <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="/users">Users</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="/posts">Posts</a>
      </li>
    </ul>
  </div>
</nav>

      <Route path="/" component ={HomeComponent} exact={true}/>
      <Route path="/users" component={UserList} exact={true}/>
      <Route path="/users/:id" component={UserShow}/>
      <Route path="/posts" component={Posts} exact={true}/>
      <Route path="/posts/:id" component={PostShow}/>
      <Route path="/comments/:id" component={CommentShow}/>
      
     
    </div>

  </BrowserRouter>
    
  );
}

export default App;
