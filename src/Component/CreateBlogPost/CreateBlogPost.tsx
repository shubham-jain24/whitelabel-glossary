import React from "react";
import JoditEditor from 'jodit-react';
import HTMLReactParser from 'html-react-parser';
import './CreateBlogPost.css';

type Props = {}


const CreatBlogPost: React.FC<Props> = (props) => {
    const editor = React.useRef(null);
    const [editorContent,setEditorContent] = React.useState('');
    const [authorName, setAuthorName] = React.useState('');
    const [authorAge, setAuthorAge] = React.useState('');
    const [viewer, setViewer] = React.useState(false);

    const authorPersonalDetails = () => {
        return (
            <div className="personal-details">
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
            <div>
                <JoditEditor className="editor" ref={editor} value={editorContent} onChange={newContent => setEditorContent(newContent)}/>
            </div>
        )
    }


    return (
        <div className="create-post">
            <div>{authorPersonalDetails()}</div>
            <div> {textEditor()} </div>
            <div className="button-design">
                <button className="post-button">Create Post</button>
            </div>
        </div>
    )

}

export default CreatBlogPost;