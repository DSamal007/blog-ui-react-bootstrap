// user list component
import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"

//want this as to a class component so that i can fetch data from the server "//jsonplace holder"

class Posts extends React.Component{
    constructor(){
        super()
        this.state ={
            posts:[]
        }
    }

    //get datat from the server
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            const posts = response.data
            console.log("posts data",posts)
            this.setState({posts})
        })
    }



    render(){
        return (
            <div className='container-fluid 'style={{'width': '80%'}}><br/>
                <div className='row'>
                    <div className="col-sm">
                        <h2 style={{'textAlign':'center'}}> Avilable Posts: {this.state.posts.length} </h2>
                    </div>
                </div> <hr/>
                <div className='card'>
                <ul className='list-group list-group-flush'>
                        {this.state.posts.map(post=>{
                            return<li key={post.id} className="list-group-item" style={{'textAlign':'left'}} ><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                            //now to provide link to every user import react link and pass link
                        })}
                    </ul>

                </div>
                                  
                   
                    
            </div>
        )
    }   
}

export default Posts