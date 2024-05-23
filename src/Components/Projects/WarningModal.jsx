import { Button, Form, Input } from "antd";

function WarningModal() {
  const formItemStyle = {
    position: "relative",
    left: "-34px",
    width: "calc(100% + 34px)",
  };
  return (
    <>
      <Form layout="vertical">
        <p style={{ marginBottom: "24.3px" }}>
          Авторизуйтесь заново, пожалуйста. Будет осуществлён переход на
          страничку Авторизации!
        </p>

        <Form.Item style={formItemStyle}>
          <Form.Item>
            <Input allowClear name="login" placeholder="Email" size="large" />
          </Form.Item>
          <Form.Item>
            <Input.Password
              allowClear
              name="password"
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button
              style={{ background: "#fa6400", color: "white", border: "none" }}
              block
              size="large"
              htmlType="submit"
            >
              Продолжить сессию
            </Button>
          </Form.Item>

          <Form.Item style={{ textAlign: "center", margin: "0px" }}>
            <Button
              style={{
                textAlign: "center",
                color: "#fa6400",
                fontSize: "16px",
              }}
              type="text"
            >
              Выйти
            </Button>
          </Form.Item>
        </Form.Item>
      </Form>
    </>
  );
}

export { WarningModal };
