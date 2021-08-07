import React from "react"
import { Link } from "gatsby"
import "../styles/style.css"

const RANDOM_IMG = "https://source.unsplash.com/collection/175083/640x360";

export default function Home() {
  return <div className='proaca'>
    <div className='headder'>
      <h1>ProAca Web site</h1>
    </div>
    <div className='mainheadder'>
      <h2>Welcome to my Site!<br />
        Enjoy Everything!</h2>
      <p>Written by SatYus.<br />
        Front Engineer at ProAca.Inc.Love JavaScript.</p>
    </div>
    <div className='mainbody'>
      <div className='post-link'>
        <div>
          <img src={RANDOM_IMG} className="post-link-image" alt="post-cover"></img>
        </div>
        <div>
          <h2>Hello Word!I'm yo-yan!</h2>
          <p>yo-yanフロントエンドエンジニア　developper<br />
            2021年7月21日</p>
        </div>
      </div>
      <div className='post-link'>
        <div>
          <img src={RANDOM_IMG} className="post-link-image" alt="post-cover"></img>
        </div>
        <div>
          <h2>Hello Word!I'm yo-yan!</h2>
          <p>yo-yanフロントエンドエンジニア　developper<br />
            2021年7月21日</p>
        </div>
      </div>

    </div>
  </div >

}
