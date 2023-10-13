import { Card, List, message } from "antd";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { appInfo } from "../constants/appInfo";
import UserComponent from "../components/UserComponent";

// import UserComponent from "../components/UserComponent";m

const HomeScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getAllPosts();
  }, []);

  const getAllPosts = async () => {
    setIsLoading(true);
    await fetch(`${appInfo.BASE_URL}/posts`)
      .then((result) => result.json())
      .then((res) => {
        setPosts(res);
        setIsLoading(false);
      })
      .catch((error) => {
        message.error(error.message);
      });
    setIsLoading(false);
  };

  // const handlePosts = (id) => {};

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>POSTS</h1>
      <div className="container">
        <div className="col-8 offset-2">
          <Card style={{ display: "flex", flexDirection: "column" }}>
            {/* <Link to='/post-details/1'>Go to detail 1</Link>
            <Link to='/post-details/2'>Go to detail 2</Link>
            <Link to='/post-details/3'>Go to detail 3</Link>
            <Link to='/post-details/4'>Go to detail 4</Link> */}

            <List
              itemLayout="vertical"
              loading={isLoading}
              dataSource={posts}
              renderItem={(item) => (
                <Link
                  to={`/post-details/${item.id}`}
                  style={{ textDecoration: "none"}}
                >
                  <List.Item key={`${item.id}`}>
                  <h6>Post ID: {item.id}</h6>

                    <List.Item.Meta
                      title={item.title}
                      description={item.body}
                    />
                    <UserComponent userId={item.userId} isShowAvatar/>
                  </List.Item>
                </Link>
                  )}
                  />
                
            
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
