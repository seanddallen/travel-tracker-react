import React, {Component} from 'react';
import { Pie, Doughnut } from 'react-chartjs-2'
import { Container, Row, Col } from 'reactstrap'

import { connect } from 'react-redux'


class PieContinent extends Component {


  render() {

    const countriesCompleted = this.props.locations.locations.filter(location => location.type === 'country' && location.is_complete === true).length
    const statesCompleted = this.props.locations.locations.filter(location => location.type === 'state' && location.is_complete === true).length
    const bucketsCreated = this.props.buckets.length
    const bucketsCompleted = this.props.buckets.filter(location => location.is_complete === true).length

    const africaCompleted = this.props.locations.locations.filter(location => location.continent === 'Africa' && location.is_complete === true).length
    const africaTotal = this.props.locations.locations.filter(location => location.continent === 'Africa').length
    const asiaCompleted = this.props.locations.locations.filter(location => location.continent === 'Asia' && location.is_complete === true).length
    const asiaTotal = this.props.locations.locations.filter(location => location.continent === 'Asia').length
    const europeCompleted = this.props.locations.locations.filter(location => location.continent === 'Europe' && location.is_complete === true).length
    const europeTotal = this.props.locations.locations.filter(location => location.continent === 'Europe').length
    const oceaniaCompleted = this.props.locations.locations.filter(location => location.continent === 'Oceania' && location.is_complete === true).length
    const oceaniaTotal = this.props.locations.locations.filter(location => location.continent === 'Oceania').length
    const NAmericaCompleted = this.props.locations.locations.filter(location => location.continent === 'North America' && location.is_complete === true).length
    const NAmericaTotal = this.props.locations.locations.filter(location => location.continent === 'North America').length
    const SAmericaCompleted = this.props.locations.locations.filter(location => location.continent === 'South America' && location.is_complete === true).length
    const SAmericaTotal = this.props.locations.locations.filter(location => location.continent === 'South America').length

    return (
      <Row className="chart mt-5 ml-0 mr-0" style={{width: '120%'}}>
        <Col sm={2}>
          <Doughnut data={{
            labels: ['Complete', 'Waiting'],
            datasets: [
              {
                // label: 'My First dataset',
                backgroundColor: ['#FAC10B', 'rgba(0,0,0,.8)'],
                borderColor: '#FAC10B',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(0,0,0,.7)',
                // hoverBorderColor: '#FAC10B',
                data: [eval((africaCompleted/africaTotal) * 100).toFixed(2), (100 - (eval((africaCompleted/africaTotal) * 100).toFixed(2)))]
              }
            ]
          }}
            style={{minHeight: '160px'}}
            width={120}
            height={160}
            options={{
              title:{display:true, text: 'Africa', fontSize: 20},
              legend:{display:false},
            }}
          />
        </Col>
        <Col sm={2}>
          <Doughnut data={{
            labels: ['Waiting', 'Complete'],
            datasets: [
              {
                // label: 'My First dataset',
                backgroundColor: ['#FAC10B', 'rgba(0,0,0,.8)'],
                borderColor: '#FAC10B',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(0,0,0,.7)',
                // hoverBorderColor: '#FAC10B',
                data: [eval((asiaCompleted/asiaTotal) * 100).toFixed(2), (100 - (eval((asiaCompleted/asiaTotal) * 100).toFixed(2)))]
              }
            ]
          }}
            style={{}}
            width={120}
            height={160}
            options={{
              title:{display:true, text: 'Asia', fontSize: 20},
              legend:{display:false},
            }}
          />
        </Col>
        <Col sm={2}>
          <Doughnut data={{
            labels: ['Waiting', 'Complete'],
            datasets: [
              {
                // label: 'My First dataset',
                backgroundColor: ['#FAC10B', 'rgba(0,0,0,.8)'],
                borderColor: '#FAC10B',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(0,0,0,.7)',
                // hoverBorderColor: '#FAC10B',
                data: [eval((europeCompleted/europeTotal) * 100).toFixed(2), (100 - (eval((europeCompleted/europeTotal) * 100).toFixed(2)))]
              }
            ]
          }}
            style={{}}
            width={120}
            height={160}
            options={{
              title:{display:true, text: 'Europe', fontSize: 20},
              legend:{display:false},
            }}
          />
        </Col>
        <Col sm={2}>
          <Doughnut data={{
            labels: ['Waiting', 'Complete'],
            datasets: [
              {
                // label: 'My First dataset',
                backgroundColor: ['#FAC10B', 'rgba(0,0,0,.8)'],
                borderColor: '#FAC10B',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(0,0,0,.7)',
                // hoverBorderColor: '#FAC10B',
                data: [eval((oceaniaCompleted/oceaniaTotal) * 100).toFixed(2), (100 - (eval((oceaniaCompleted/oceaniaTotal) * 100).toFixed(2)))]
              }
            ]
          }}
            style={{}}
            width={120}
            height={160}
            options={{
              title:{display:true, text: 'Oceania', fontSize: 20},
              legend:{display:false},
            }}
          />
        </Col>
        <Col sm={2}>
          <Doughnut data={{
            labels: ['Waiting', 'Complete'],
            datasets: [
              {
                // label: 'My First dataset',
                backgroundColor: ['#FAC10B', 'rgba(0,0,0,.8)'],
                borderColor: '#FAC10B',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(0,0,0,.7)',
                // hoverBorderColor: '#FAC10B',
                data: [eval((NAmericaCompleted/NAmericaTotal) * 100).toFixed(2), (100 - (eval((NAmericaCompleted/NAmericaTotal) * 100).toFixed(2)))]
              }
            ], text: '20%'
          }}
            style={{}}
            width={120}
            height={160}
            options={{
              title:{display:true, text: 'North America', fontSize: 20},
              legend:{display:false},
            }}
          />
        </Col>
        <Col sm={2}>
          <Doughnut data={{
            labels: ['Waiting', 'Complete'],
            datasets: [
              {
                // label: 'My First dataset',
                backgroundColor: ['#FAC10B', 'rgba(0,0,0,.8)'],
                borderColor: '#FAC10B',
                borderWidth: 3,
                hoverBackgroundColor: 'rgba(0,0,0,.7)',
                // hoverBorderColor: '#FAC10B',
                data: [eval((SAmericaCompleted/SAmericaTotal) * 100).toFixed(2), (100 - (eval((SAmericaCompleted/SAmericaTotal) * 100).toFixed(2)))]
              }
            ]
          }}
            style={{}}
            width={120}
            height={160}
            options={{
              title:{display:true, text: 'South America', fontSize: 20},
              legend:{display:false},
            }}
          />
        </Col>
      </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations,
    buckets: state.buckets
  };
};

export default connect(mapStateToProps, { })(PieContinent)
