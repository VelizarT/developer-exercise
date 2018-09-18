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
        
            // console.log(data);
            let recommendations = data.hits;
            console.log(recommendations);
            if (recommendations) {
                this.setState(() => ({ recommendations }));
            }
        
    }
    render() {
        return (
            <div>
                {this.state.recommendations.map((recommendation) => {
                    if(recommendation.image) {
                        return <Recommendation 
                            key={recommendation.product_id}
                            currency={recommendation.currency}
                            link={recommendation.link}
                            price={recommendation.price}
                            productName={recommendation.product_name}
                            imgAlt={recommendation.image.alt}
                            imgLink={recommendation.image.link}
                        />
                    }
                })}
            </div>
        );
    }
}