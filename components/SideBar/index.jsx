import React from 'react'
import Youtube from '../Youtube'

import './style.scss'

class SideBar extends React.Component {
    render() {

        return (
            <div className='sidebar'>
                <Youtube {...this.props} />
		<div className='sidebar__sponsor'>Sponsor</div>
                <div className='sidebar__title'>Important</div>
		<div className='sidebar__link'>
		<a href='/about/'>Bakawash tủ lạnh TỐT</a>
		<a href='http://thaoam.com'>Những tiện ích khi mua tủ lạnh</a>
		<a href='/payments/'>Thanh toán</a>
		<a href='/help'>Hướng dẫn đặt mua tủ lạnh</a>
		</div>
            </div>
        );
    }
}

export default SideBar
