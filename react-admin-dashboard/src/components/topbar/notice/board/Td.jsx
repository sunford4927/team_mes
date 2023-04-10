import React from 'react';

function Td({item, handleRemove, handleEdit}) {
    const onRemove = () => {
        handleRemove(item.id)
    }
    const onEdit = () => {
        handleEdit(item)
    }
    return (
        <>
            <tr className="bg-white border-2 border-gray-200">
                <td className="px-4 py-3">{item.id}</td>
                <td className="px-4 py-3">{item.notice_subject}</td>
                <td className="px-4 py-3">{item.notice_content}</td>
                <td className="px-4 py-3">{item.reg_date}</td>
                <td className="px-4 py-3">{item.reg_id}</td>
                <td className="text-center text-purple-400 cursor-poiner show-modal" onClick={onEdit}>
                    <i className='far fa-edit'></i>
                </td>
                <td className="text-center text-purple-400 cursor-pointer" onClick={onRemove}>
                    <i className='far fa-trash-alt'></i>
                    </td> 
            </tr>
        </>
        );
}

export default Td;