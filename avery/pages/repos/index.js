import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../../componets/navbar'


export default function Repos({ myrepos, reposdata}) {
  return (
    <div>
      <Head>
        <title>Avery's Portfolio</title>
      </Head>
      
      <main>
        {/* navbar */}
        <Navbar repos="23"/>

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

    const data = await req.json();
    const datalength =  Object.keys(data).length.toString();
    
     return {
         props: { myrepos: data,
            reposdata : datalength },
         
    }
  }

