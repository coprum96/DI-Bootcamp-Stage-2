import React from "react";
import data from './data.json'

class PostList extends React.Component {
    state = {
        posts: [],
    };

    componentDidMount() {
        this.setState({ posts: data });
    }

    render() {
        const { posts } = this.state;
        return (
            <div>
                <h1>Hi, Here is a title</h1>
                {posts.map((post) => (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default PostList;



