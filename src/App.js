/** @format */

import React, { useState } from 'react';
import FormComponent from './components/FormComponent';
import ListUser from './components/ListUser';

function App() {
	const [users, setUsers] = useState([]);

	const handleAddNewTask = (val) => {
		const data = {
			content: val,
			createdAt: Date.now(),
			updatedAt: Date.now(),
			createdBy: 'Me',
			isCompleted: false,
		};

		setUsers([...users, data]);
	};

	const handleUpdateTask = (val, index) => {
		const items = users;

		items[index].isCompleted = val;

		setUsers([...items]);
	};
  const handleRemoveUser = (index) =>{
    const items = users;
    items.splice(index,1);
    setUsers([...items]);
  }

	return (
		<div>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<FormComponent onAddUser={(vals) => handleAddNewTask(vals)} />
						<ListUser
							users={users}
							onChangeState={(val, index) => handleUpdateTask(val, index)}
              				handleRemoveUser= {handleRemoveUser}
						/>
            
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;


// import { Input, Button, Form, Select, Card, List } from "antd";
// import React, { useState } from "react";
// import CardComponent from "./components/CardComponent";
// import "./App.css";

// function App() {
//   const [form] = Form.useForm();
//   const [Profiles, setProfiles] = useState([]);
//   const handleUpdateProfile = (values) => {
//     console.log(values);
//     setProfiles([...Profiles, values]);
//     form.resetFields();
//   };
//   return (
//     <>
//       <div className="container mt-2">
//         <div className="row">
//           <div className="col-5 offset-lg-1">
//             <Card title="Update Profile">
//               <Form
//                 layout="vertical"
//                 size="large"
//                 form={form}
//                 onFinish={handleUpdateProfile}
//               >
//                 <Form.Item
//                   name={"name"}
//                   label="Name"
//                   rules={[{ required: true, message: "What is your name?" }]}
//                 >
//                   <Input
//                     placeholder="name"
//                     allowClear
//                     showCount
//                     maxLength={100}
//                   ></Input>
//                 </Form.Item>
//                 <Form.Item
//                   name={"age"}
//                   label="Age"
//                   rules={[{ required: true, message: "What is your age?" }]}
//                 >
//                   <Input placeholder="age" allowClear></Input>
//                 </Form.Item>
//                 <Form.Item
//                   name={"address"}
//                   label="Address"
//                   rules={[{ required: true, message: "What is your address?" }]}
//                 >
//                   <Input
//                     placeholder="address"
//                     allowClear
//                     showCount
//                     maxLength={100}
//                   ></Input>
//                 </Form.Item>
//                 <Form.Item
//                   name={"gender"}
//                   label="Gender"
//                   rules={[{ required: true, message: "What is your gender?" }]}
//                 >
//                   <Select
//                     options={[
//                       {
//                         label: "Male",
//                         value: "male",
//                       },
//                       {
//                         label: "Female",
//                         value: "female",
//                       },
//                       {
//                         label: "Other",
//                         value: "other",
//                       },
//                     ]}
//                   ></Select>
//                 </Form.Item>
//               </Form>
//               <Button type="primary" onClick={() => form.submit()}>
//                 Update
//               </Button>
//             </Card>
//           </div>
//           <div className="col-5">
//             <Card title="Profiles List">
//               <List
//                 dataSource={Profiles}
//                 renderItem={(item, index) => (
//                   <List.Item key={index}>
//                     <List.Item.Meta title={item.name} description={item.age} />
//                   </List.Item>
//                 )}
//               />
//             </Card>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;
