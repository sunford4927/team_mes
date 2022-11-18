import React from 'react'
import './widgetLg.css'

export default function widgetLg() {
    const Button = ({type})=> {
        return <button className={'widgetLgButton' + type}>{type}</button>
    }
    return (
        <div className='widgetLg'>
            <h3 className='widgetLgTitle'>과거 거래</h3>
            <table className='widgetLgTable'>
                <tr className='widgetLgTr'>
                    <th className='widgetLgTh'>고객</th>
                    <th className='widgetLgTh'>날짜</th>
                    <th className='widgetLgTh'>양</th>
                    <th className='widgetLgTh'>상태</th>
                </tr>                    
                <tr className='widgetLgTr'>
                    <td className='widgetLgUser'>
                        <img
                        src="https://img.lovepik.com/free-png/20211228/lovepik-business-women-take-selfies-png-image_400929419_wh860.png" alt="" className='widgetLgImg'
                        />
                        <span className='widgetLgName'>Choi yun yong</span>
                    </td>
                    <td className='widgetLgDate'>2022 july 2</td>
                    <td className='widgetLgAmount'>$122.00</td>
                    <td className='widgetLgStatus'>
                        <Button type= "승인"/>
                    </td>
                </tr>
            </table>
        </div>
    )
}