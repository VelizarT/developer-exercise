import React from 'react';

export default class Recommendation extends React.Component {
    render() {
        return (
            <div className="recommendation-wrapper">
                <a href={this.props.link}>
                    <div className="card" style={{"width": "200px"}}>
                        <img 
                            src={this.props.imgLink} 
                            alt={this.props.imgAlt}
                            style={{"width": "100%"}}
                            className="card-img-top"
                        />
                        <div className="card-body">
                            <h6 className="card-title">{this.props.productName}</h6>
                            <p className="card-text">{this.props.currency} {this.props.price}</p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
};
