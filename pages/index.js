import Head from 'next/head'
import SearchBar from './components/SearchBar'
import GithubUser from './components/GithubUser'
import { useState, useRef, useEffect } from 'react'
import { Loading } from './components/Loading'

export default function Home() {
  let API = 'https://api.github.com/users/langpp'
  let APIREPO = 'https://api.github.com/users/langpp/repos'

  const userRef = useRef(null)
  const [userName, setUserName] = useState('')
  const [data, setData] = useState('')
  const [repo, setRepo] = useState([])
  const [isLoading, setLoading] = useState(false)

  function handleClick() {
    setUserName(userRef.current.value)
  }
  useEffect(() => {
    setLoading(true)
    if (userName) {
      API = `https://api.github.com/users/${userName}`;
      APIREPO = `https://api.github.com/users/${userName}/repos`
    }

    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })

      fetch(APIREPO)
      .then((res) => res.json())
      .then((data) => {
        setRepo(data)
        setLoading(false)
      })
  }, [userName]);

  if(!data) (
  <p>No Profile data.</p>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-7">
      <Head>
        <title>Repositories GitHub User</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {isLoading ? <Loading /> :
      <>
      <SearchBar
        userName={userName}
        handleClick={handleClick}
        userRef={userRef}
      />
      <GithubUser data={data} repo={repo} />
      </>
      }
    </div>
  )
}
