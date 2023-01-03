import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import useInput from "../../hooks/useInput";
import { Todo, TodoInput } from "../../types/todos";

interface ITodoFormProps {
  submitBtnTxt: string;
  onSubmit?: (todoInput: TodoInput) => void;
  todo?: Todo;
}

const TodoForm: React.FunctionComponent<ITodoFormProps> = ({
  submitBtnTxt,
  onSubmit,
  todo,
}) => {
  const [form] = Form.useForm();
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");

  const onFinish = () => {
    onSubmit && onSubmit({ title, content });
    setTitle("");
    setContent("");
  };

  useEffect(() => {
    if (!todo) return;
    setTitle(todo.title);
    setContent(todo.content);
    form.setFieldsValue({ title: todo.title, content: todo.content });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todo, form]);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ title, content }}
      onFinish={onFinish}
      autoComplete="off"
      form={form}
    >
      <Form.Item label="Title" name="title">
        <Input value={title} onChange={onChangeTitle} />
      </Form.Item>

      <Form.Item label="Content" name="content">
        <Input value={content} onChange={onChangeContent} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={title.length > 0 && content.length > 0 ? false : true}
        >
          {submitBtnTxt}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default TodoForm;
