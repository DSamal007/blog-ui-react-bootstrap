
//import and export willbe es6 feature
import React from "react"

function HomeComponent(props){
    console.log(props)
    return (
        <div class='container'><br/><br/><br/>
                    
           
            <div className='row'>
                <div className="col-sm">
                    <h3 style={{'text-align':'center'}}>WELCOME!!</h3>
                </div>
            </div><br/><br/>

            <div className='row'>
                <div className="col-sm">
                    <p style={{'text-align':'center'}}>Welcome to Our Website. The Website is designed to give you the user lists, with a focus on their blogs.</p>
                    
                </div>
            </div>

            <div className='row'>
                <div className="col-sm">
                    <p style={{'text-align':'center'}}><b></b>Created in 2019 by <b>D Samal</b> .</p>
                    
                </div>
            </div>

            <div className='row'>
                <div className="col-sm">
                    <p style={{'text-align':'center'}}>We hope you enjoy our website as much as we enjoy offering it to you.</p>
                    
                </div>
            </div>

            <div className='row'>
                <div className="col-sm">
                    <p style={{'text-align':'center'}}>Sincerely,<br/><b>D Samal</b>, [BlogsUI]</p>
                    
                </div>
            </div>

    </div>
    )
}



export default HomeComponent