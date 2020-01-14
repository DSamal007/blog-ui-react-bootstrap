import React from "react"
import {Link} from "react-router-dom"
import axios from "axios"

class PostShow extends React.Component{
    constructor(props){
    super(props)
    this.state={
        posts:{},
        comments:[],
        user:{}

    }
 }
 componentDidMount() {           
    const id=this.props.match.params.id
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response)=>{
        const posts=response.data
        this.setState({posts})
    })
    axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then((response)=>{
        const comments=response.data        
        this.setState({comments})
    })

 }
 render() { 
    const userid=this.state.posts.userId
    axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
    .then((response)=>{
        const user=response.data       
        this.setState({user})
    })
    .catch((err)=>{
        console.log(err)
    })
  
    return (
        <div className='container'><br/>
            <div className='row'>
                    <div className="col-md">
                        <h2 style={{'textAlign':'left'}}> USER : {this.state.user.name} </h2>
                        
                    </div>
            </div><br/>
            <div className='row'>
                    <div className="col-md">
                        <h4>TITLE:- {this.state.posts.title}</h4>
                        
                    </div>
            </div><br/>
            <div className='card'>
                    <div className="col-md">                        
                        <h5>BODY:- {this.state.posts.body}</h5>
                    </div>
            </div><br />
            <h5>COMMENTS FOR THIS POST:-</h5>
            <div className='card'>
            <ol>
            {
                this.state.comments.map((comment)=>{
                    return(
                        <li key={comment.id} >{comment.body}</li>
                    )
                })
            }
            </ol></div>            
           
            <Link to={`/users/${this.state.user.id}`}>Other Posts of : {this.state.user.name}</Link>
        </div> 
    )
}
}
export default PostShow