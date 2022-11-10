import './logementtitle.css'
import { Component } from 'react'

export default class LogementTitle extends Component {
  render() {
    return (
      <div className="tilteetloc">
        <h1 className="title">Cozy loft on the Canal Saint-Martin</h1>
        <h4 className="location">Paris, Île-de-France</h4>
      </div>
    )
  }
}
//<h1 className="title">{this.props.title}</h1>
//<h4 className="location">{this.props.location}</h4>
