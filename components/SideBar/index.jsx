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
		<a href='/about/'>Gới Thiệu</a>
		<a href='http://thaoam.com'>Những Tiện Ích Khi Mua Tủ Lạnh</a>
		<a href='/payments/'>Thanh Toán</a>
		<a href='/help'>Hướng Dẫn Đặt Mua Tủ Lạnh</a>
		</div>
            </div>
        );
    }
}

export default SideBar
