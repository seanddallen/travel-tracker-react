import React, {Component} from 'react';
import { Bar, Pie, HorizontalBar } from 'react-chartjs-2'

import { connect } from 'react-redux'


class HorizontalProgressBar extends Component {


  render() {

    const countriesCompleted = this.props.locations.locations.filter(location => location.type === 'country' && location.is_complete === true).length
    const statesCompleted = this.props.locations.locations.filter(location => location.type === 'state' && location.is_complete === true).length
    const bucketsCreated = this.props.buckets.length
    const bucketsCompleted = this.props.buckets.filter(location => location.is_complete === true).length

    // console.log(this.state.countriesCompleted)
    // console.log('BUCKETS', this.state.bucketsCompleted)

    return (
      <div className="chart mt-2">
        <HorizontalBar
          data={{
              labels: [`Countries (${countriesCompleted}/257)`, `States (${statesCompleted}/50)`, `Buckets (${bucketsCompleted}/${bucketsCreated})`],
              datasets: [
                {
                  // label: 'My First dataset',
                  backgroundColor: 'rgba(0,0,0,.8)',
                  borderColor: '#FAC10B',
                  borderWidth: 3,
                  hoverBackgroundColor: '#FAC10B',
                  hoverBorderColor: 'rgba(0,0,0,.8)',
                  data: [eval((countriesCompleted/257) * 100).toFixed(2), eval((statesCompleted/50) * 100).toFixed(2), eval((bucketsCompleted/bucketsCreated) * 100).toFixed(2), 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                }
              ]
            }}
          style={{}}
          width={800}
          height={300}
          labels={{}}
          options={{
            title:{display:true, text: 'Travel Bucket List Progress', fontSize: 25},
            legend:{display:false},
          }}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    buckets: state.buckets
  };
};

export default connect(mapStateToProps, { })(HorizontalProgressBar)
