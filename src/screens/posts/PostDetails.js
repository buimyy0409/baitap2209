import { Card, List, message } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { appInfo } from "../../constants/appInfo";
import UserComponent from "../../components/UserComponent";
// import HomeScreen from '../HomeScreen';

const PostDetails = () => {
  const [post, setPostById] = useState([]);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    getPost();
  }, [id]);

  const getPost = async () => {
    await fetch(`${appInfo.BASE_URL}/posts/${id}`)
      .then((result) => result.json())
      .then((res) => {
        setPostById(res);
      })
      .catch((error) => {
        message.error(error.message);
      });
  };

  return (
    <div className="mt-4">
      <h5><Link to="/" style={{ marginBottom: "16px" }}>
        Back to Home
      </Link></h5>
      <h2>Post Details</h2>
      
      <Card>
        <h5>Post ID: {id}</h5>
        <List
        itemLayout="vertical"
          dataSource={[post]}
          renderItem={(item) => (
            <List.Item key={`${item.id}`}>
              <List.Item.Meta title={item.title} description={item.body} />
              <UserComponent userId={item.userId} isShowAvatar/>
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default PostDetails;
