import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Post from "../../Post";



export default function IndexPage() {
    const [posts, setPosts] = useState([]);
    

    const filterCategory =(catItem)=>{
           const result = posts.filter((curData)=>{
            return curData.category===catItem;
           });
           setPosts(result);
    };

    useEffect(() => {
        fetch('http://191.101.80.173/api/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);

    return (
        <>
          <section id="page-title">

<div className="container clearfix center">
    <h1>Products</h1>
</div>

</section>
<section id="content">
			<div className="content-wrap">
				<div className="container clearfix">

					<div className="grid-filter-wrap">
						
						<ul className="grid-filter">

							<li><button className= "btn bg-transparent"onClick={()=>setPosts(posts)}>Show All</button></li>
							<li><button className= "btn bg-transparent"onClick={()=>filterCategory('Agriculture')}>Agriculture</button></li>
							<li><button className= "btn bg-transparent"onClick={()=>filterCategory('Pharma')}>Pharma</button></li>
							<li><button className= "btn bg-transparent" onClick={()=>filterCategory('Veterinary')}>Vertinary</button></li>
							<li><button className= "btn bg-transparent" onClick={()=>filterCategory('consumer-product')}>Consumer</button></li>
						</ul>
					</div>

					<div className="grid-container grid-3" data-big="2" data-lightbox="gallery">
                    <div className="row container">
                        
                    {posts.length > 0 && posts.map(post => (
                        <div className="col-md-4 mb-3">
                          <Post {...post} /> 
                         </div>
                          ))} 
                          
                    </div>
					
					</div>

				</div>
			</div>
		</section>  
        </>
    );
}