import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


class CommentShow extends React.Component{
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
        axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then((response)=>{
            const posts=response.data
            console.log("POst data",posts)
            this.setState({posts})
        })
        

        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response)=>{
            const comments=response.data
            console.log("Comments data",comments)
            this.setState({comments})
        })
        

       
    }

    render() {
        const userid=this.state.posts.userId
        //console.log(userid)
        axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`)
        .then((response)=>{
            const user=response.data
            //console.log("POst data",comments)
            this.setState({user})
        })
        .catch((err)=>{
            console.log(err)
        })
        //console.log(this.props)
        return (
            <div>
                {
                    
                }
                <h3>USER NAME:{this.state.user.name}</h3>
                <h4>TITLE: {this.state.posts.title}</h4>
                <h5>BODY: <br /><br />{this.state.posts.body}</h5>
                <hr />
                <h4>COMMENTS:</h4>
                <ol>
                {
                    this.state.comments.map((comment)=>{
                        return(
                            <li key={comment.id}>{comment.body}</li>
                        )
                    })
                }
                </ol>
                <hr />
                <Link to={`/users/${this.state.user.id}`}>Other Posts of:{this.state.user.name}</Link>
            </div> 
        )
    }
}
export default CommentShow