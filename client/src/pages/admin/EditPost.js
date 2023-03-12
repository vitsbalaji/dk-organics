import { useEffect,useState } from "react";
import { Navigate, useParams } from "react-router-dom";



export default function EditPost() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [category,setCategory] = useState('');
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        fetch('http://localhost:4000/post/' + id)
            .then(response => {
                response.json().then(postInfo => {
                    setTitle(postInfo.title);
                    setContent(postInfo.content);
                    setSummary(postInfo.summary);
                    setCategory(postInfo.category);
                });
            });
    },[]);

    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('category', category);
        data.set('id', id);
        if (files?.[0]) {
            data.set('file', files?.[0]);
        }
        const response = await fetch('http://localhost:4000/post', {
            method: 'PUT',
            body: data,
            credentials: 'include',
        });
        if (response.ok) {
            setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to={'/post/' + id} />
    }

    return (
        <form onSubmit={updatePost}>
            <input type="title"
                placeholder={'Title'}
                value={title}
                onChange={ev => setTitle(ev.target.value)} />
            <input type="summary"
                placeholder={'Summary'}
                value={summary}
                onChange={ev => setSummary(ev.target.value)} />
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
            <input type="file"
                onChange={ev => setFiles(ev.target.files)} />
            <textarea classNameName="required form-control textarea-message" onChange={ev=>setContent(ev.target.value)} value={content} rows="6" coloum="30" />
            <button style={{ marginTop: '5px' }}>Update post</button>
           
        </form>
    );
}