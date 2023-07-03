import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-[#0D1821] h-screen w-screen text-white">
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
      <div id="social" className="absolute fit-content">
        <h1 className="">SOVEI <span className="font-semibold"> LIVE</span></h1>
        <h2 className="poti font-light">The social network where you really control your data,
<br/>thanks to web3.</h2>
        <div className="flex icon white-text justify-between items-center poti">
          <Image
            src="/twitter.svg"
            width={32}
            height={32}
            alt="Picture of the author"
          />
          <Image
            src="/github.svg"
            width={32}
            height={32}
            alt="Picture of the author"
          />
          <Image
            src="/discord.svg"
            width={32}
            height={32}
            alt="Picture of the author"
          />
        </div>
      </div>
    </main>
  )
}
