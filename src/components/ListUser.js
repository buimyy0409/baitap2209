/** @format */

import { List, Checkbox, Button } from 'antd';
import React from 'react';
import TextComponent from './TextComponent';

function ListUser({ users, onChangeState, onChangeUser, handleRemoveUser }) {
	const renderTaskItem = (item, index) => {
		return (
			<div key={`task${index}`}>
				<Checkbox
					style={{ marginBottom: 12 }}
					onChange={(val) => onChangeState(val.target.checked, index)}
					value={item.isCompleted}>
					<TextComponent
						styles={{ margin: 0 }}
						text={item.content}
						color={item.isCompleted ? '#e0e0e0' : '#212121'}
					/>
                    {item.isCompleted && <Button onClick={(val)=> handleRemoveUser(val)}>DEL</Button>}
				</Checkbox>
			</div>
		);
	};

	return (
    <>
    <div className='row'>
        <div className='col'>
        {users
        .filter((element)=> !element.isCompleted)
        .map((item, index) => renderTaskItem(item, index))
        }
        </div>
        <div className='col'>
        {users
        .filter((element)=> element.isCompleted)
        .map((item, index) => renderTaskItem(item, index))
        }
        </div>
    </div>
        
        
    </>
    );
}

export default ListUser;