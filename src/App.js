import React from "react";
// import Profile from "./screens/Profile";
import HomeScreen from "./screens/HomeScreen";
import { Layout } from "antd";
// import HeaderComponent from './screens/HeaderComponent'
// import SiderComponent from './screens/SiderComponent'
import { Content } from "antd/es/layout/layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PostScreen from "./screens/posts/PostScreen";
import PostDetails from "./screens/posts/PostDetails";

function App() {
  return (
    <BrowserRouter>
      <div style={{ height: "100vh" }}>
        <Layout>
          {/* <HeaderComponent/> */}
          <Layout>
            {/* <SiderComponent/> */}
            <Content className="container mt-4">
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/post-details">
                  <Route path=":id" element={<PostDetails />} />
                </Route>
                
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;

// import React, { useState } from 'react'
// import ToggleProfile from '../src/modals/ToggleProfile'
// import ThemeComponent from './components/ThemeComponent'
// import ThemeContext from './modals/ThemeContext'

// const App = () => {
// 	const [theme, setTheme] = useState(true)
// 	console.log(theme)
// 	const onChangeTheme = () => {
// 		setTheme(!theme)
// 	}
//   return (
// 	<ThemeContext.Provider value={{theme, onChangeTheme }} >
// 		<ToggleProfile />
// 		<body>
// 			<ThemeComponent >

// 			</ThemeComponent>

// 		</body>
// 	</ThemeContext.Provider>
//   )
// }

// export default App

// /** @format */

// import React, { useState } from 'react';
// import FormComponent from './components/FormComponent';
// import ListUser from './components/ListUser';

// function App() {
// 	const [users, setUsers] = useState([]);

// 	const handleAddNewTask = (val) => {
// 		const data = {
// 			content: val,
// 			createdAt: Date.now(),
// 			updatedAt: Date.now(),
// 			createdBy: 'Me',
// 			isCompleted: false,
// 		};

// 		setUsers([...users, data]);
// 	};

// 	const handleUpdateTask = (val, index) => {
// 		const items = users;

// 		items[index].isCompleted = val;

// 		setUsers([...items]);
// 	};
//   const handleRemoveUser = (index) =>{
//     const items = users;
//     items.splice(index,1);
//     setUsers([...items]);
//   }

// 	return (
// 		<div>
// 			<div className='container'>
// 				<div className='row'>
// 					<div className='col'>
// 						<FormComponent onAddUser={(vals) => handleAddNewTask(vals)} />
// 						<ListUser
// 							users={users}
// 							onChangeState={(val, index) => handleUpdateTask(val, index)}
//               				handleRemoveUser= {handleRemoveUser}
// 						/>

// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default App;

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
