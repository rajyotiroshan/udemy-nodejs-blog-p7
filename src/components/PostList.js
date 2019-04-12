import React from 'react'
import { connect } from 'react-redux';
import {Component} from 'react';
import {fetchPostsAndUsers} from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    renderList() {
      //  console.log(this.props.posts);
        return this.props.posts.map(post => {
            return (
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user'/>
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader  userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }

    render() { 
        return (<div className='ui relaxed divided list'>{this.renderList()}
        </div>)
    }
}

//passed posts from state to Postlist as a props.
const mapStateToProps = state => {
    return {posts: state.posts};
}

//connect PostList component to redux store and listen for state change
export default connect(
    mapStateToProps,
    {fetchPostsAndUsers})(PostList);