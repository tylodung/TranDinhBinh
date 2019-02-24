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
		<a href='/about/'>Bakawash tủ lạnh hiệu Baka</a>
		<a href='http://thaoam.com'>Phát triển giao diện Thảo Am</a>
		<a href='/payments/'>How to pay? Thanh toán</a>
		<a href='/help'>Hướng dẫn đặt mua tủ lạnh</a>
		</div>
            </div>
        );
    }
}

export default SideBar
