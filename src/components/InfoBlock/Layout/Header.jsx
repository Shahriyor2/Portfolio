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
import { Fragment } from "react";

function HeaderView() {
  const obj1 = {
    Age: 20,
    Residence: "Dushanbe",
    Freelance: "Available",
    Address: "Proffsoyouze",
  };

  return (
    // <>
    <div className={classes["preview"]}>
      {/* <Space> */}
      <Badge size="default" color="green" dot="show">
        <Avatar
          style={{
            width: "160px",
            height: "140px",
            WebkitBoxShadow: "12px 20px 21px 0px rgba(0,0,0,0.53)",
            MozBoxShadow: "12px 20px 21px 0px rgba(0,0,0,0.53)",
            boxShadow: "12px 20px 21px 0px rgba(0,0,0,0.53)",
          }}
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
          position: "relative",
          top: "12px",
        }}
      >
        Асадов Шахриёр
        <br />
        {/* <Space> */}
        <Text type="secondary">Front-End Developer</Text>
        {/* </Space> */}
      </Typography.Title>
      {/* </div> */}

      <Space style={{ position: "relative", top: "-20px" }}>
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
      <hr className={classes["hr"]} />

      <Fragment className={classes["selfSkillsBlock"]}>
        {Object.entries(obj1).map(([key, value]) => {
          return (
            <>
              <Space
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "12px 15px 0px",
                  position: "relative",
                  top: "-65px",
                }}
              >
                <Typography.Title
                  level={5}
                  style={{
                    margin: 0,
                    background: "#ffb400",
                    padding: "2px",
                    paddingBottom: "0px",
                  }}
                  key={key}
                >{`${key}: `}</Typography.Title>
                <Typography.Title
                  type=""
                  level={5}
                  style={{
                    margin: 0,
                  }}
                  key={value}
                >
                  {value === "Available" ? (
                    <Text type="success">{value}</Text>
                  ) : (
                    <Text> {value}</Text>
                  )}
                </Typography.Title>
              </Space>
            </>
          );
        })}
      </Fragment>
      <hr className={classes["hr"]} />
    </div>
    // </>
  );
}

export { HeaderView };
