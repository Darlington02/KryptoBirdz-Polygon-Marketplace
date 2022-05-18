import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return(
      <div>
        <nav className="border-b p-6">
          <p className="text-4xl font-bold">KryptoBirdz Market</p>
          <div className="flex mt-4">
            <Link href="/">
              <a className="mr-6 text-indigo-500">Home</a>
            </Link>

            <Link href="/create-item">
              <a className="mr-6 text-indigo-500">Create NFT</a>
            </Link>
            
            <Link href="/my-assets">
              <a className="mr-6 text-indigo-500">Your NFTs</a>
            </Link>

            <Link href="/creator-dashboard">
              <a className="mr-6 text-indigo-500">Dashboard</a>
            </Link>
          </div>
        </nav>
        <Component {...pageProps} />
      </div>
    )
}

export default MyApp
