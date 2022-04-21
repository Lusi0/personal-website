import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'
// import blog post component
import BlogPost from '../componets/blogPost'
import { createClient } from '../prismicio'





// 
export default function Home({ myrepos, myaccount, accounts, accountslen, blogdata, bloglength }) {

  // states to show and hide the repoholder
  const [showmain, setshowmain] = useState(true);
  const [showrepos, setShowrepos] = useState(false);
  const [showaccounts, setShowaccounts] = useState(false);
  const [showblog, setblog] = useState(false);

  
  
  function toggleContent(e) {
    // disable all content and show the one that was clicked

    setShowrepos(false);
    setshowmain(false);
    setShowaccounts(false);
    setblog(false);
    if (e === 'repos') {
      setShowrepos(true);
    }

    if (e === 'main') {
      setshowmain(true);
    }

    if (e === 'accounts') {
      setShowaccounts(true);
    }

    if (e === 'blog') {
      setblog(true);
    }


  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Avery&#39;s Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main>
        {/* navbar */}
        <div className="navbar">
            <div className="navbar-container">

                <div className="navbar-links">
                    <button className="link" onClick={() => toggleContent('main')}>Avery</button>
                    
                    <button className="link" onClick={() => toggleContent('repos')}>{myaccount.public_repos} Reposotories</button>

                    <button className="link" onClick={() => toggleContent('accounts')} >{accountslen} Accounts</button>
                    <button className="link" onClick={() => toggleContent('blog')}>{bloglength} Cool Plog Posts</button>
                    

                </div>
            </div>
        </div> 

        {/* main content */}
        { showmain ? (
          <div className="main">
            <h1 className='main-title'>Hi there! I am Avery Smith :)</h1>
            <p className='description'>I am a computer science student who will be attending <a href='https://www.stevens.edu/' target="_blank" rel='noreferrer' className='linkstyle decription-link'>Stevens Institute of Technology</a> next fall.</p>
            <p className='description'>I have previously attended computer science courses at <a href='https://northseattle.edu/' target="_blank" rel='noreferrer' className='linkstyle decription-link'>North Seattle College</a> and I am currently attending <a href='https://www.seattleacademy.org/' target="_blank" rel='noreferrer' className='linkstyle decription-link'>Seattle Academy of Arts and Sciences</a>.</p>
            <p className='description'>From the end of April to the end of May I will be interning at <a href='https://www.assembleinc.com/' target="_blank" rel='noreferrer' className='linkstyle decription-link'>Assemble</a>.</p>
          </div>
        ) : null }

        {/* added useless line */}


        {/* repos */}
        {/* if showrepos is true then display repos */}
        {showrepos ? 
            <div className="repoholder">
                { myrepos.map(repo => (
                    <div key={repo.id} className="repoWrapper">
                      <a href={repo.html_url} rel="noreferrer" target="_blank" >
                        <div  className="repo">
                      {/* open in new page */}
                          {repo.name}
                        </div>
                    </a>
                  </div>
                ))}
            </div>
        : null}

        {/* accounts */}
        {/* if showaccounts is true then display accounts */}
        {showaccounts ?
            <div className="repoholder">
                { accounts.map(account => (
                    <div key={account.id} className="repoWrapper">
                      <a href={account.link} rel="noreferrer" target="_blank" >
                        <div  className="repo">
                        {/* get the favicon from the link */}
                        
                          <Image alt='link image' className='icons' src={"http://www.google.com/s2/favicons?sz=64&domain={}".replace("{}", account.link)} width={50} height={50} />
                          <div className='accountname' >{account.title}</div>
                          
                        </div>
                      </a>
                  </div>
                  ))}
            </div>
        : null}

        {/* blog */}
        {/* if showblog is true then display blog */}
        {showblog ?
            <div className="blog">
                { blogdata.map(blog => (
                    <div key={blog.id} className="blogWrapper">
                      <BlogPost title={blog.title} content={blog.body} link={blog.link} />
                      <hr></hr>
                    </div>
                  ))}
            </div>
        : null}

      

      </main>


    </div>
  )
}



export async function getServerSideProps() {
  
  const req = await fetch(`https://api.github.com/users/lusi0/repos`);
  const req2 = await fetch(`https://api.github.com/users/lusi0`); 
  // get api/accounts
  const req3 = await fetch (`http://localhost:3000/api/accounts`);

  const key = `$2b$10$TIE1jwX/8BMw/0uwrzNAc.BcTznqcAH7.aHXj6d5p84g3bxfhmA82`
  const options = {
    method: 'GET',
    headers: {
        'X-Access-Key': key,
        'X-Bin-Meta': true 
    }
}
  
  const req4 =  await fetch (`https://api.jsonbin.io/v3/b/62607d8180883c3054e44c76/latest`, options);

  const therepos = await req.json();

  const accountdata = await req2.json();

  const allaccounts = await req3.json();

  const accountslength = allaccounts.length;

  const blogdata = await req4.json();

  const simple_blogdata = blogdata["record"];

  // reverse simple_blogdata so that the newest post is first
  const reversed_blogdata = simple_blogdata.reverse();

  const bloglength = simple_blogdata.length;

  console.log(blogdata)
  
  


   return {
       props: { myrepos: therepos,
          myaccount : accountdata,
          accounts : allaccounts,
          accountslen: accountslength
          , blogdata: reversed_blogdata,
          bloglength: bloglength
  }
}

}

