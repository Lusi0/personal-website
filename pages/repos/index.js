import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../componets/navbar'


export default function Repos({ myrepos, myaccount}) {
  return (
    <div>
      <Head>
        <title>Avery's Portfolio</title>
      </Head>
      
      <main>
        {/* navbar */}
        <Navbar therepos={myaccount.public_repos}/>

        {/* repos */}
        <div class='repoholder'>
                { myrepos.map(repo => (
                    <div class='repo'>
                        <a href={repo.html_url} >{repo.name}</a>
                    </div>
                ))}
        </div>

               
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  
    const req = await fetch(`https://api.github.com/users/lusi0/repos`);
    const req2 = await fetch(`https://api.github.com/users/lusi0`); 

    const therepos = await req.json();

    const accountdata = await req2.json();
    
     return {
         props: { myrepos: therepos,
            myaccount : accountdata },
         
    }
  }

