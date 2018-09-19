import React from 'react';

export default class Recommendation extends React.Component {
    render() {
        return (
            <div className="recommendation-wrapper col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card">
                    <a href={this.props.link}>
                        <img 
                            src={this.props.imgLink} 
                            alt={this.props.imgAlt}
                            style={{"width": "100%"}}
                            className="card-img-top"
                        />
                    </a>
                        <div className="card-body">
                            <p className="card-title">{this.props.productName}</p>
                            <p className="card-text">{this.props.currency === 'GBP' ? '£' : this.props.currency} {this.props.price}</p>
                        </div>
                    </div>
            </div>
        );
    }
};
