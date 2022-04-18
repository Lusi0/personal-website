
const fs = require('fs');


export default function handler(req, res) {
    // Get data submitted in request's body.
    const body = req.body
  
  
 
  
    // get the data in the wekitformboundry line
    const title = body.split('\r\n\r\n')[1].split('\r\n')[0]
    const mybody = body.split('\r\n\r\n')[2].split('\r\n')[0]
    const mylink = body.split('\r\n\r\n')[3].split('\r\n')[0]

    // get the blog.json text
    const blogtext = fs.readFileSync('C:/Users/SAAS_User/Documents/GitHub/personal-website/databases/blog.json',  {encoding:'utf8', flag:'r'});
    // convert the blog.json text to a javascript object

    console.log(blogtext);

    const blogjson = JSON.parse(blogtext);
    // get the blog.json length
    // get the last blog.json id
    // add the new blog.json id to the blog.json object
    blogjson.push({
        title: title,
        body: mybody,
        link: mylink
    });
    // convert the blog.json object to a javascript string
    const blogstring = JSON.stringify(blogjson);
    // write the blog.json string to the blog.json file
    fs.writeFileSync('C:/Users/SAAS_User/Documents/GitHub/personal-website/databases/blog.json', blogstring);
    // send the blog.json file to the client


  }