//import React from 'react';
import React, {Component } from 'react';
import './App.css';
import ReactTable from "react-table";
import "react-table/react-table.css"


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      posts:[]
    }
  }
componentDidMount(){
  const url ="http://jsonplaceholder.typicode.com/posts";
  fetch(url,{
    method: "GET"

  }).then(response =>response.json().then(posts=>{
    //console.log("posts", posts)
    this.setState({posts:posts})
  }))
}

deleteRow(id) {
       this.setState({
     posts: [...this.state.posts.filter(post => post.id !== id)]
    });
   }
render() {
  const columns =[ 
    {
      Header:"User ID",
      accessor:"userId",
      filterable:true,
      width:100,
      maxWidth:100,
      minWidth:100
    },
    {
      Header:"ID",
      accessor:"id",
      filterable:true,
      width:100,
      maxWidth:100,
      minWidth:100
    },
    {
      Header:"Title",
      accessor:"title",
      sortable:false,
      filterable:false
    },
    {
      Header:"Content",
      accessor:"body",
      sortable:false,
      filterable:false
    },
    {
      Header:"Actions",
      Cell:props =>{
        return(
          <button style={{backgroundColor:"red", color:"black"}}
          onClick = {()=>{
            this.deleteRow(props.original.id);
          }}
          >Delete</button>
        )
      },
      sortable:false,
      filterable:false,
      width:100,
      maxWidth:100,
      minWidth:100
    }

  ]
  return (
    <ReactTable
      columns = {columns}
      data={this.state.posts}
      filterable
      defaultPageSize = {15}
    
      >
    </ReactTable>
  );
}
}

export default App;
