import React, { Component } from 'react'

// export class NewItem extends Component {
const NewItem=(props)=> {
        // render() {
        // let {title , desc , imgUrl , newsUrl , source , author , date} = this.props;
        let {title , desc , imgUrl , newsUrl , source , author , date} = props;
        return (
            <div>
                <span className="badge text-bg-warning">{source}</span>
                <div className="card">
                    <img src={imgUrl} className="card-img-top" alt="/"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{desc}...</p>
                        <p className="card-text"><small className='text-danger'>By {author?author:"Unknown"} On {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
             </div>
        )
    // }
}

export default NewItem
