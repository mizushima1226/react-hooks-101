import React, {useContext} from 'react'
import AppContext from '../contexts/AppContext'
import {DELETE_EVENT} from '../actions'

const Event = ({event}) => {
    const {dispatch} = useContext(AppContext)
    
    const handleClickDeleteButton = () => {
        const msg = `イベントを(id=${event.id})を削除します。よろしいですか？`
        if(window.confirm(msg)){
            dispatch({
                type: DELETE_EVENT,
                id: event.id
            })
        }
    }

    return(
        <tr>
            <td>{event.id}</td>
            <td>{event.title}</td>
            <td>{event.body}</td>
            <td><button type='button' className='btn btn-danger' onClick={handleClickDeleteButton}>削除</button></td>
        </tr>
    )
}

export default Event

