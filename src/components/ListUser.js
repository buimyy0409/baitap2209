// import React, { useState } from 'react'

// function ListUser() {
// const [profile, setProfile] = useState([])
// const [isVisible, isVisibleModalProfile]

//   return (
//     <div>ListUser</div>
//   )
// }

// export default ListUser


// gọi function ngoài useeffect: mỗi lần gọi lại render tất cả cái function, trước khi render giao diện
// gọi function trong useeffect: chạy render ra UI rồi mới chạy useeffect
// - không có đối số (thuộc tính) sẽ clg 2 lần

/* sử dụng useeffect để bắt lấy sự thay đổi khi một cái gì đó thay đổi */

// import React, { useEffect, useState } from "react";
// import TextComponent from "../components/TextComponent";
// import { add0ToNumber } from "../utils/add0ToNumber";
// import { Button, Card, List, Space } from "antd";

// function ListUser() {
//   const [count, setCount] = useState(0);
//   const [color, setColor] = useState("#676767");

//   useEffect(() => {
//     switch(true) {
//         case  count < 0:
//             setColor('yellow');
//         break;
//         case count > 0 && count < 10:
//             setColor('#676767');
//         break;
//         case count > 10 && count < 15:
//             setColor('blue');
//         break;
//         case  count > 15:
//             setColor('red');
//         default: setColor('#676767');
//         break;
//     }
//   },[count]);

//   // count < 0 => yellow
//   // 0 <count < 10 => #676767
//   // 10< count <15 => blue
//   // count > 15 => red

//   return (
//     <div className="container">
//       <div className="col-8 offset-2">
//         <Card>
//           <div className="text-center">
//             <h1
//               style={{
//                 fontSize: 50,
//                 color: color,
//               }}
//             >
//               {count}
//             </h1>

//             <Space>
//               <Button onClick={() => setCount(count - 1)}>- 1</Button>
//               <Button onClick={() => setCount(count + 1)}>+ 1</Button>
//             </Space>
//           </div>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default ListUser;

















// import React, { useEffect, useState } from "react";
// // import TextComponent from "../components/TextComponent";
// // import { add0ToNumber } from "../utils/add0ToNumber";
// import { Button, Card, List } from "antd";

// function ListUser() {
// const [posts, setPosts] = useState ([]);
// const [isLogin, setIsLogin] = useState(false);

// useEffect(()=>{
//     getPosts();
// },[])

// const getPosts = async () =>{
//     const api = `https://jsonplaceholder.typicode.com/posts`;

//     try{
//         const res = await fetch(api)
//         .then((response) => response.json())
//         .then((json) => setPosts(json));
//     } catch (error) {
//         console.log(error);
//     };
// }
// return (
//         <div className="container">
//           <div className="col-8 offset-2">
//             <Card extra={
//                 <Button onClick={()=> setIsLogin(!isLogin)}>{isLogin ? 'Logout': 'Login'}</Button>
//             }>
//             <List dataSource={posts}
//             renderItem={(item) => (
//                 <List.Item key={item.id}>
//                     <List.Item.Meta title={item.title} description={item.body}/>
//                 </List.Item>
//             )}
//             />
//            </Card>
//           </div>
//         </div>
//       );
//     }

//     export default ListUser;






//   const [dateTime, setDateTime] = useState("");

//   useEffect(() => {
//     setInterval(() => {
//       handleGetDateTime(new Date());
//     }, 1000);
//   }, []);

//   const handleGetDateTime = (date) => {
//     setDateTime(
//       `${add0ToNumber(date.getHours())}:${add0ToNumber(
//         date.getMinutes()
//       )}:${add0ToNumber(date.getSeconds())}`
//     );
//   };

//   return (
//     <div>
//       <TextComponent text={"Use effect"} />
//       <div className="text-center mt-4">
//         <h1>{dateTime}</h1>
//       </div>
//     </div>
//   );





// /** @format */

// import { List, Checkbox, Button } from 'antd';
// import React from 'react';
// import TextComponent from './TextComponent';

// function ListUser({ users, onChangeState, onChangeUser, handleRemoveUser }) {
// 	const renderTaskItem = (item, index) => {
// 		return (
// 			<div key={`task${index}`}>
// 				<Checkbox
// 					style={{ marginBottom: 12 }}
// 					onChange={(val) => onChangeState(val.target.checked, index)}
// 					value={item.isCompleted}>
// 					<TextComponent
// 						styles={{ margin: 0 }}
// 						text={item.content}
// 						color={item.isCompleted ? '#e0e0e0' : '#212121'}
// 					/>
//                     {item.isCompleted && <Button onClick={(val)=> handleRemoveUser(val)}>DEL</Button>}
// 				</Checkbox>
// 			</div>
// 		);
// 	};

// 	return (
//     <>
//     <div className='row'>
//         <div className='col'>
//         {users
//         .filter((element)=> !element.isCompleted)
//         .map((item, index) => renderTaskItem(item, index))
//         }
//         </div>
//         <div className='col'>
//         {users
//         .filter((element)=> element.isCompleted)
//         .map((item, index) => renderTaskItem(item, index))
//         }
//         </div>
//     </div>

//     </>
//     );
// }

// export default ListUser;
