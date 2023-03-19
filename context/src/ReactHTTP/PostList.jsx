import React, { Component } from 'react'
import axios from 'axios'
class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })

            .catch(error => {
                console.log(error)
            })
    }
    render() {
        const { posts } = this.state
        return (
            <div>
                Lists of posts
                {
                    posts.length ?
                        posts.map(post => <div key={post.id}>{post.title}</div>) :
                        null
                }
                
            </div>
        )
    }
}

export default PostList
//Destructing the state in render.in this posts we have to do use using mapmethod and display each post title.
//we have to render post title.if post is an empty array we are not going to render anything.
