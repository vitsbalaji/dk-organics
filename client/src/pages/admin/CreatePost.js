import { useState } from "react";
import { Navigate } from "react-router-dom";
import "../../css/animate.css";
import "../../css/bootstrap.css";
import "../../css/swiper.css";
import "../../css/dark.css";
import "../../css/font-icons.css";
import "../../css/fonts.css";
import "../../css/custom.css";
import "../../demos/medical/medical.css";
import "../../Editor"



export default function CreatePost() {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [category, setCategory] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('category', category);
        data.set('file', files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
            method: 'POST',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }
    if (redirect) {
        return <Navigate to={'/admin'} />
    }
    return (
        <form onSubmit={createNewPost}>
            <div className="col-12 bottommargin-sm">
                <input type="title" placeholder={'Title'} value={title} onChange={ev => setTitle(ev.target.value)} />
                <input type="summary" placeholder={'Summary'} value={summary} onChange={ev => setSummary(ev.target.value)} />
                <input type="file" onChange={ev => setFiles(ev.target.files)} />
                <div className="col-12 bottommargin-sm">
                    <label>category:</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="template-contactform-mobile" name="template-contactform-checkbox[]" value="Agriculture" onChange={ev => setCategory(ev.target.value)} />
                        <label className="form-check-label" for="template-contactform-mobile">Agriculture</label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="template-contactform-mail" name="template-contactform-checkbox[]" value="Pharma" onChange={ev => setCategory(ev.target.value)} />
                        <label className="form-check-label" for="template-contactform-mail">Pharma</label>
                    </div>

                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="template-contactform-sms" name="template-contactform-checkbox[]" value="Veterinary"  onChange={ev => setCategory(ev.target.value)} />
                        <label className="form-check-label" for="template-contactform-sms">Veterinary</label>
                    </div>

                    
                    <div className="form-check">
                        <input className="form-check-input" type="radio" id="template-contactform-sms" name="template-contactform-checkbox[]" value="consumer-product"  onChange={ev => setCategory(ev.target.value)} />
                        <label className="form-check-label" for="template-contactform-sms">Consumer product</label>
                    </div>
                </div>

                <textarea className="required form-control textarea-message" value={content} onChange={ev => setContent(ev.target.value)} rows="6" cols="30" />
                <button style={{ marginTop: '5px' }}>create post</button>
            </div>
        </form>
    );
}