
import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"

class UserList extends React.Component{
    constructor(){
        super()
        this.state ={
            users:[]
        }
    }    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const users = response.data
            console.log(users)
            this.setState({users})
        })
    }
    render(){        
        return (
            <div className='container-md  'style={{'width': '60%'}}><br/>
                <div className='row'>
                    <div className="col-sm">
                        <h2 style={{'textAlign':'center'}}> Avilable Users : {this.state.users.length} </h2>
                    </div>
                </div> <hr/>

                    <div className='card'>
                    <ul className='list-group list-group-flush'>
                        {this.state.users.map(user=>{
                            return<li key={user.id} className="list-group-item" style={{'textAlign':'left'}}><Link to={`/users/${user.id}`}>{user.name}</Link></li>                            
                        })}
                    </ul>
                    </div>                   
                    <hr/>
                    <Link to="/">back</Link>
                    
            </div>
        )
    }   
}

export default UserList