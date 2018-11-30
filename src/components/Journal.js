import React, { Component } from 'react';
import { Card, Button, CardTitle, CardText, Row, Col, Container, ButtonGroup, Input, Form, FormGroup, Label } from 'reactstrap';
import { Link, Route, Switch } from 'react-router-dom'
import { addPost } from '../redux/actions/postsActions'

import BucketCard from './BucketCard'
import PostCard from './PostCard'

import { connect } from 'react-redux'


class Journal extends Component {
  state = {
    title: '',
    date: '',
    post: ''

  }

  handleAddPost = (e)=>{
    e.preventDefault()
    this.props.addPost({
      title: this.state.title,
      content: this.state.post,
      date: this.state.date
    })
    this.setState({
      newBucketListItem: ''
    })
  }

  render () {

    let location = this.props.locations.find(location => location.id === +this.props.match.params.id)

    // console.log('buckets', this.props.buckets)
    let listOfPosts = this.props.posts.filter(post => post.location_id === +this.props.match.params.id)
    .map(post => <PostCard key={post.id} post={post} />)

    // let listOfCompletedBuckets = this.props.buckets.filter(bucket => bucket.location_id === +this.props.match.params.id && bucket.is_complete)
    // .map(bucket => <BucketCard key={bucket.id} bucket={bucket} />)

    return (
      <div>
        <Row>
          <Col style={{ margin: '0 auto' }}>
            <h3 className="text-center" style={{marginBottom: '20px'}}>New Journal Entry</h3>
            <Row style={{ margin: '0px auto 20px auto', justifyContent: 'center' }}>
              <Form onSubmit={this.handlePost}>
                <Row>
                  <FormGroup style={{width: '90%', margin: '0 auto'}}>
                    <Input type="text" name="title" placeholder="Entry Title" onChange={e => this.setState({ title: e.target.value })} />
                  </FormGroup>
                  <FormGroup style={{width: '90%', margin: '10px auto 0 auto'}}>
                    <Input type="date" name="date" placeholder="date placeholder" onChange={e => this.setState({ date: e.target.value })} />
                  </FormGroup>
                  <FormGroup style={{width: '90%', margin: '10px auto 0 auto'}}>
                    <Input type="textarea" name="post" autoComplete="off" placeholder="Journal Entry" style={{ marginRight: '10px', height: '250px' }} onChange={e => this.setState({ post: e.target.value })} />
                  </FormGroup>
                </Row>
                <Row>
                  <Button type="submit" style={{width: '90%', margin: '10px auto 0 auto', color: 'rgba(0,0,0,0.8)', backgroundColor: '#FAC10B'}}><b>Add Journal Entry</b></Button>
                </Row>
              </Form>
            </Row>
          </Col>

          <Col style={{ margin: '0 auto' }}>
            <h3 className="text-center" style={{marginBottom: '20px'}}>Past Journal Entries</h3>
            <Card body outline color="secondary" className="mt-1" style={{ height: '90vh', overflow: 'hidden', boxShadow: '0 4px 8px 4px rgba(0,0,0,0.4)' }}>
              { listOfPosts }
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    locations: state.locations.locations,
    buckets: state.buckets,
    posts: state.posts
  };
};

export default connect(mapStateToProps, { addPost })(Journal)
