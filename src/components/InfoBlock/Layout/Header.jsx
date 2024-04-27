import { Typography } from "antd";
import classes from "./header.module.css";
// const { Paragraph } = Typography;
import { Avatar, Badge, Space } from "antd";

const { Text } = Typography;

import {
  SkypeOutlined,
  WhatsAppOutlined,
  TwitterOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

function HeaderView() {
  return (
    <>
      <div className={classes["preview"]}>
        {/* <Space> */}
        <Badge size="default" color="green" dot="show">
          <Avatar
            style={{ width: "160px", height: "140px" }}
            shape="circle"
            size="large"
            src="/src/assets/infoAssets/Человек из стали.jpg"
          />
        </Badge>
        {/* </Space> */}
        <Typography.Title
          level={3}
          style={{
            margin: 0,
          }}
        >
          Асадов Шахриёр
          <br />
          {/* <Space> */}
          <Text type="secondary">Front-End Developer</Text>
          {/* </Space> */}
        </Typography.Title>
      </div>

      <Space style={{ position: "relative", top: "-25px" }}>
        <SkypeOutlined
          style={{
            background: "#ffb400",
            padding: "7px",
            borderRadius: "20px",
          }}
        />
        <WhatsAppOutlined
          style={{
            background: "#ffb400",
            padding: "7px",
            borderRadius: "20px",
          }}
        />
        <TwitterOutlined
          style={{
            background: "#ffb400",
            padding: "7px",
            borderRadius: "20px",
          }}
        />
        <SkypeOutlined
          style={{
            background: "#ffb400",
            padding: "7px",
            borderRadius: "20px",
          }}
        />
        <InstagramOutlined
          style={{
            background: "#ffb400",
            padding: "7px",
            borderRadius: "20px",
          }}
        />
      </Space>
    </>
  );
}

export { HeaderView };
