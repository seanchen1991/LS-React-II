import React, { Component } from 'react';
import SearchBarContainer from '../SearchBar/SearchBarContainer';
import PostContainer from './PostContainer';
import dummyData from '../../dummy-data';

class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
            postInfo: [],
            search: ""
        };
    }

    componentDidMount() {
        this.mapData();
    }

    mapData() {
        this.setState({ postInfo: [...dummyData] });
    }

    search = event => {
        event.preventDefault();
        let additionalPosts = [...this.state.postInfo];
        additionalPosts = additionalPosts.filter(post => {
            if (post.username === this.state.search) {
                return post;
            }
        })
        this.setState({ postInfo: additionalPosts })
    }

    handleChanging = event => {
        event.preventDefault();
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div>
                <SearchBarContainer
                    search={this.search}
                    handleChanging={this.handleChanging}
                />
                <PostContainer
                    posts={this.state.postInfo}
                />
            </div>
        )
    }
}

export default PostsPage;