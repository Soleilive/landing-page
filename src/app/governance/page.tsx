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
          <p className=""><Link href="/governance">Governance</Link></p>
          <p className="opacity-75"><a href="/whitepaper.pdf" target="blank_">Whitepaper</a></p>
          <p className="opacity-75"><a href="https://mirror.xyz/0x38915f7d74b465bD889f65898c8D94A0534c0a65" target="blank_">Blog</a></p>
          <p className="opacity-75"><Link href="/faq">FAQ</Link></p>
          <a href="https://app.sovei.live" target="_blank"><button className="border border-1 px-8 py-2 rounded-lg border-[#48505c] hover:bg-[#EAB308] transition-all duration-300 hover:border-[#0D1821]">Launch App</button></a>
        </div>
      </div>
      <div className="fit-content">
        <h1 className="">Governance</h1>
        <p className="poti font-light whitespace-pre-line">In the future, we plan to build a DAO to govern the project. Stay tuned.
<br/>
In the meantime, here's a cat.
<br/>
<br/>
<pre>

*    |\__/,|   (`\ *<br/>
*  _.|o o  |_   ) )*<br/>
*-(((---(((--------*
  </pre>
  </p>
      </div>
    </main>
  )
}
