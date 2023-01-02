import { Button, Card, Form, Input } from "antd";
import * as React from "react";
import useInput from "../../hooks/useInput";

interface ITodoFormProps {}

const TodoForm: React.FunctionComponent<ITodoFormProps> = (props) => {
  const [title, onChangeTitle] = useInput("");
  const [content, onChangeContent] = useInput("");
  const onFinish = () => {
    // refetch();
  };
  return (
    <Card
      title="Default size card"
      extra={<a href="#">More</a>}
      style={{ width: 500 }}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="Title" name="title">
          <Input value={title} onChange={onChangeTitle} />
        </Form.Item>

        <Form.Item label="Content" name="content">
          <Input.Password value={content} onChange={onChangeContent} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={title.length > 0 && content.length > 0 ? false : true}
          >
            추가
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default TodoForm;
