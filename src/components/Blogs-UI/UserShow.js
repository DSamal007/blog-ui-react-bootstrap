import React from "react"
import axios from "axios"
import{Link} from "react-router-dom"


class UserShow extends React.Component{
    constructor(){
        super()
        this.state ={
            users:{},
            posts:[]
        }
    }
componentDidMount(){
    //read id
    const id=this.props.match.params.id
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>{
        const users=response.data
        this.setState({users})
    })
    // const userId=this.props.match.params.id
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response=>{
        const posts=response.data
        console.log("post data",posts)
        this.setState({posts})
    })
}

    render(){
        return (
            <div className='container'style={{'width': '80%'}} ><br/>
                 <div className='row'>
                    <div className="col-md">
                    <h3 style={{'textAlign':'center'}}>All Posts written by the user :  {this.state.users.name} </h3><br/>
                    </div>
            </div><br/>           
               

                <div className='card'>
                <ul className='list-group list-group-flush'>
                {this.state.posts.map(post=>{
                            return<li className="list-group-item"  key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                            //now to provide link to every user import react link and pass link
                        })}
                </ul>
                </div>
                <Link to="/users" > Back </Link>
            </div>
        )
    }
}
export default UserShow