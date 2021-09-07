import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    const value='DC Comics';
    return (
        <div>
            <h1>DC Screen</h1>
            <HeroList publisher={value}/>
        </div>
    )
}
