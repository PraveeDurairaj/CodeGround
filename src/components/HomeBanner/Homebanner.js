import React from 'react'
import Header from '../Header/Header'
import gitIcon from '../../Assets/github (1).svg'
import linkedInIcon from '../../Assets/linkedin-in.svg'
import emailIcon from '../../Assets/envelope-solid.svg'
import s from './HomeBanner.module.css'

const Homebanner = () => {
    return (
        <div className={s.homeBannerBackground}>
            <div className='container mx-auto'>
                <Header />
                <div className={s.homeContainer}>
                <h1 className='text-[50px] font-[700] text-white'>Hello</h1>
                <h2 className='text-[42px] font-[600] text-white'>I'am <span className='linearText'>Praveen</span> FrontEnd Developer</h2>
                <p className='text-[16px] font-[400] text-white mb-[20px]'> As a React Developer. I Spaclallze In Bullding Intractive and responsive
                    User interfaces using the React libray
                </p>
                <div className={s.homeIconContainer}>
                    <a><img src={gitIcon} width={20} height={20}/></a>
                    <a><img src={linkedInIcon} width={20} height={20}/></a>
                    <a><img src={emailIcon} width={20} height={20}/></a>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Homebanner
