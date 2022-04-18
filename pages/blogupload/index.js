import { property } from "lodash";


export default function blogupload() {

    return (
        <div>
            <h1 className="main-title">Blog Upload</h1>
            <form action="/api/blogupload" method="post" encType="multipart/form-data">
                {/* title of blog post */}
                <div className="form-group">
                <label>Title:</label>
                <input type="text" name="title" className="title"/>
                </div>
                {/* body of blog post */}
                <div className="form-group">
                <label>Body:</label>
                <textarea name="body" rows="10" cols="50" className="body"></textarea>
                </div>
                {/* link for blog post*/}
                <div className="form-group">
                <label>Link:</label>
                <input type="text" name="link" className="mylink"/>
                </div>
                {/* submit */}
                <div className="form-group">
                <input type="submit" value="Upload" />
                </div>
            </form>
        </div>
    );
}





