import React, {Component} from "react";

export default class ListItem extends Component {
    handle = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            this.props.handleListItemClick(this.props)
        }
    }
    
    render() {
        return (
            <li tabIndex="0" className="listItem" onClick={() => this.props.handleListItemClick(this.props)} onKeyDown={this.handle}>
                <img src={this.props.categories[0].icon.prefix+"32"+this.props.categories[0].icon.suffix} alt={this.props.categories[0].name}/>
                {this.props.name}
            </li>
        )
    }
}