import React from 'react';
import posts from '../data/post';
import {Link} from 'react-router-dom';

const Blog = () => {
       
    return ( 
        <div>        
          
            <h2>BLOG</h2>
                <ul>
                    {posts.map((post) => {
                        return ( 
                                <li key={post.id}>
                                    <Link to={`/post/${post.id}`}>{post.titulo}</Link>
                                </li> 
                                )
                    })}
                  
                </ul>
            </div>

     );
}
 
export default Blog;

