import { formatISO9075 } from "date-fns";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


export default function Post({_id, title, summary, cover, content, createdAt, author , category }) {
    return (
        
			
			<div className="container" style={{width:"400 px"}}>
							<div className="card center mb-5 mt-0">
								<div className="center mt-4">
								<img src={'http://localhost:4000/' + cover} className="card-img-top " style={{height:'280px', width:'120px'}} alt="..."/>
								</div>
								<div className="card-body" key={_id}>
									<Link to={`/post/${_id}/`}>
                                    <h4 className="card-title">{title}</h4>
                                    </Link>
									<p className="card-text">{category}</p>
									<p className="card-text" key={summary}>{summary}</p>
                                    <p className="info">
                                        <time>{formatISO9075(new Date(createdAt))}</time>
                                    </p>
									<Link to={`/post/${_id}`} className="btn btn-success">Read</Link>
								</div>
							</div>
            </div>
			
          

    );
}


