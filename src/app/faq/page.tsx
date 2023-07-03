import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-[#0D1821] toppad min-h-screen w-screen text-white">
      <div className="basetext">
        <div className="absolute tbase lbase">
          <p className="font-bold"><Link href="/">SoveiLive</Link></p>
        </div>
        <div className="absolute flex items-center justify-between wbase rbase t2base">
          <p className="opacity-75"><Link href="/governance">Governance</Link></p>
          <p className="opacity-75"><a href="/whitepaper.pdf" target="blank_">Whitepaper</a></p>
          <p className="opacity-75"><a href="https://mirror.xyz/0x38915f7d74b465bD889f65898c8D94A0534c0a65" target="blank_">Blog</a></p>
          <p className=""><Link href="/faq">FAQ</Link></p>
          <a href="https://app.sovei.live" target="_blank"><button className="border border-1 px-8 py-2 rounded-lg border-[#48505c] hover:bg-[#EAB308] transition-all duration-300 hover:border-[#0D1821]">Launch App</button></a>
        </div>
      </div>
      <div className="fit-content content">
        <h1 className="">FAQ</h1>
        <h2 className="my-4">Introduction</h2>
        <p>SoveiLive is a social network where users have data ownership. The application will be completely decentralized and accessible to as many people as possible: it will be possible to use the application gas-free.</p>
        <h2 className="my-4">What problems are we solving?</h2>
        <ul className="list-decimal">
          <li className="mb-2"><span className="underline">Decentralization</span> : By using <a className="underline" href="https://db3.network/" target="blank_">DB3</a> as database provider, we ensure that our app is fully decentralized.</li>
          <li className="mb-2"><span className="underline">Data Ownership</span> : All stored data is controlled only by users with their private key.</li>
          <li><span className="underline">Accessibility</span> : The vast majority of decentralized solutions require users to pay transaction fees to interact with the DApp, which is a major problem for accessibility to novices. Our solution does not require users to pay such fees.</li>
        </ul>
      </div>
    </main>
  )
}
