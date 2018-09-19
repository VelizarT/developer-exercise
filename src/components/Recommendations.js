import React from 'react';
import Recommendation from './Recommendation';
const data = require('../../data/recommendations.json');

export default class Recommendations extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            recommendations: []
        }
    }
    componentDidMount() {
            let recommendations = data.hits;
            if (recommendations) {
                this.setState(() => ({ recommendations }));
            }
        
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-12 recommendation-title">If you like this, you might be into these
                <hr></hr>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row"> 
                        {this.state.recommendations.map((recommendation) => {
                            let link;
                            let alt;
                            if (recommendation.image) {
                                link = recommendation.image.link;
                                alt = recommendation.image.alt;
                            } else {
                                link = 'http://onenten.org/wp-content/uploads/2011/09/no-photo-available.jpg';
                                alt = 'No photo available';
                            }
                            return <Recommendation 
                                key={recommendation.product_id}
                                currency={recommendation.currency}
                                link={recommendation.link}
                                price={recommendation.price}
                                productName={recommendation.product_name}
                                imgAlt={alt}
                                imgLink={link}
                            />
                        })}
                    </div>
                </div>
            </div>
        );
    }
}