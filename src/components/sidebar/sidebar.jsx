import React from "react"

export default class SideBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      mediums: ['Paintings', 'Jewelry', 'Photography'],
      filteredArt: []
    }
  }


  render() {
    return (
      <div className="sidebar">
        <ul>
          {this.state.mediums.map((medium, idx)=>(
            <li key={idx}>
              <h5>{medium}</h5>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}



// const { logoutClick } = this.props

// {this.props.token
//   ? <Footer>
//       <Button onPress={logoutClick} transparent>
//         <h6>Logout</h6>
//       </Button>
//     </Footer>
//   : null
// }