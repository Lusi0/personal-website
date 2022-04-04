import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useState } from 'react'



// 
export default function Home({ myrepos, myaccount}) {

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

                    <button className="link" onClick={() => toggleContent('accounts')} > Accounts</button>
                    <button className="link" onClick={() => toggleContent('blog')}> Cool Plog Posts</button>
                    

                </div>
            </div>
        </div> 

        {/* main content */}
        { showmain ? (
          <div className="main">
            <h1 className='main-title'>Hi there! I am Avery Smith :)</h1>
            <p>I am a computer science student who will be attending stevens institute of technology next fall. (SAAS class of &#39;22) </p>

          </div>
        ) : null }

        {/* repos */}
        {/* if showrepos is true then display repos */}
        {showrepos ? 
            <div className="repoholder">
                { myrepos.map(repo => (
                    <div key={repo.name} className="repo">
                      {/* open in new page */}
                        <a href={repo.html_url} target="_blank" >{repo.name}</a>
                    </div>
                ))}
            </div>
        : null}

        {/* accounts */}
        {/* if showaccounts is true then display accounts */}
        {showaccounts ?
            <div className="accounts">
            </div>
        : null}

        {/* blog */}
        {/* if showblog is true then display blog */}
        {showblog ?
            <div className="blog">
            </div>
        : null}



      </main>
    </div>
  )
}



export async function getServerSideProps() {
  
  const req = await fetch(`https://api.github.com/users/lusi0/repos`);
  const req2 = await fetch(`https://api.github.com/users/lusi0`); 

  const therepos = await req.json();

  const accountdata = await req2.json();
  

console.log(therepos);



   return {
       props: { myrepos: therepos,
          myaccount : accountdata},
       
  }
}

