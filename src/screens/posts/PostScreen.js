import { List } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const PostScreen = () => {
  return (
    <div>
      <h1>Post</h1>
      <List
        dataSource={Array.from({ length: 10 })}
        renderItem={(_item, index) => (
          <List.Item>
            <List.Item.Meta
              title={
                <Link to={`/post-detail?id=${index}`}>
                  Title of post {index}
                </Link>
              }
            />
          </List.Item>
        )}
      ></List>
    </div>
  );
};

export default PostScreen;
