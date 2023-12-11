import React from 'react'


import './Feature.scss'
const Feature = () => {
  return (
    <div className='featured'>
        <div className='container'>
            <div className='left'>
                <h1>Find the perfect <i>freelance</i> service for your business</h1>
                <div className='search'>
                    <div className='searchInput'>
                        <img src="/search.png" alt="search" />
                        <input type='text' placeholder='Try building mobile app' />
                    </div>
                    <button>Search</button>
                </div>
                <div className='popular'>
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Wordpress</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
                 </div>
            <div className='right'>
                <img src='/man.png' alt="man" />
                </div>
        </div>
    </div>
  )
}

export default Feature