import React from 'react'

export const IconCut = ()=>(
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9Z" stroke="#3F8AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21Z" stroke="#3F8AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 4L8.12 15.88" stroke="#3F8AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.47 14.48L20 20" stroke="#3F8AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.12 8.12L12 12" stroke="#3F8AE0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export const IconUndo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.2364 3.2636C10.5878 3.61508 10.5878 4.18492 10.2364 4.5364L7.67277 7.1H12C15.2585 7.1 17.9 9.74152 17.9 13C17.9 16.2585 15.2585 18.9 12 18.9H7.89998C7.40292 18.9 6.99998 18.4971 6.99998 18C6.99998 17.5029 7.40292 17.1 7.89998 17.1H12C14.2643 17.1 16.1 15.2644 16.1 13C16.1 10.7356 14.2643 8.9 12 8.9H7.67278L10.2364 11.4636C10.5878 11.815 10.5878 12.3849 10.2364 12.7364C9.8849 13.0878 9.31505 13.0878 8.96358 12.7364L4.86358 8.6364C4.6948 8.46762 4.59998 8.2387 4.59998 8C4.59998 7.76131 4.6948 7.53239 4.86358 7.3636L8.96358 3.2636C9.31505 2.91213 9.8849 2.91213 10.2364 3.2636Z" fill="#3F8AE0"/>
    </svg>
)

export const IconASC = ({fill='#3F8AE0', bg='#F2F3F5'}) => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill='none' xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="10" fill={bg}/>
        <path d="M22 30V20" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 30V14" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 30V26" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export const IconDESC = ({fill='#3F8AE0', bg='#F2F3F5'}) => (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="10" transform="matrix(-1 0 0 1 44 0)" fill={bg} />
        <path d="M22 30V20" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 30V14" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M28 30V26" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)