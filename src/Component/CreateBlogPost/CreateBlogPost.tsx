import React from "react";
import JoditEditor from 'jodit-react';
import './CreateBlogPost.css';

type Props = {}


const CreatBlogPost: React.FC<Props> = (props) => {
    const editor = React.useRef(null);
    const blogData = '<p style="text-align: center;"><span style="font-family: Impact, Charcoal, sans-serif; font-size: 34px; color: rgb(204, 0, 0);">My Life Blog</span></p><p><br></p><p>Hey,</p><p>Mu Name is Shubham Jain, Dwelling in north delhi, always looking for new ways of streamling my life with the pinch of healthy conversation, meeting new people, exploring new cities and much more.</p><p>Stranges are legit a great book to explore, each trip filled with totally different feelings, a new person to explore and new way of roaming around.</p><p><img src="https://media.istockphoto.com/id/1354042785/vector/books-stack-decorated-with-christmas-tree-balls-winter-holidays-concept-isolated-on-white.jpg?s=1024x1024&amp;w=is&amp;k=20&amp;c=SqwC9UWChKKKo0jSpBcLiSb4yp-0_OEd-00k8awWRtc=" alt="" width="300"></p><p><br></p><p>Never be afraid of challenges, always feel free to challenge others and never hetate to explore, because if you hesitate today, you will regret tomorrow.</p><p>Okay so it was really nice talking to you all miss me hhhaaaa</p><p>Chalo hope some one will be up to meet me in the next trip.</p><p><br></p>';
    const [editorContent,setEditorContent] = React.useState(blogData);
    const [authorName, setAuthorName] = React.useState('');
    const [authorAge, setAuthorAge] = React.useState('');

    const authorPersonalDetails = () => {
        return (
            <div>
                <div>
                    <div className="label">Author Name:</div>
                    <input className="input-text" type="text" value={authorName} onChange={(event) => setAuthorName(event.target.value)}></input>
                </div>
                <div>
                    <div className="label">Author Age:</div>
                    <input className="input-text" type="number" value={authorAge} onChange={(event) => setAuthorAge(event.target.value)}></input>
                </div>
            </div>
            
        )
    }

    

    const textEditor = () => {
        return (
            <div className="editor">
                <JoditEditor ref={editor} value={editorContent} onChange={newContent => setEditorContent(newContent)}/>
            </div>
        )
    }

    const renderHeading = () => {
        return (
            <div className="create-post-heading">
                Create A Blog Post
            </div>
        )
    }

    const createBlogPost = () => {
        console.log(editorContent)
    }


    return (
        <div className="create-post">
            <div>{renderHeading()}</div>
            <div>{authorPersonalDetails()}</div>
            <div> {textEditor()} </div>
            <div className="button-design">
                <button className="post-button" onClick={createBlogPost}>Create Post</button>
            </div>
        </div>
    )

}

export default CreatBlogPost;