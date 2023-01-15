import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import useInput from "../../hooks/commons/useInput";
import { Todo, TodoInput } from "../../types/todos";
import { ButtonsWrapper } from "./style";

interface ITodoFormProps {
  submitBtnTxt: string;
  onSubmit?: (todoInput: TodoInput) => void;
  todo?: Todo;
  isDisabled?: boolean;
  extraButton?: React.ReactElement;
}

const TodoForm: React.FunctionComponent<ITodoFormProps> = ({
  submitBtnTxt,
  onSubmit,
  todo,
  isDisabled,
  extraButton,
}) => {
  const [form] = Form.useForm();
  const [title, onChangeTitle, setTitle] = useInput("");
  const [content, onChangeContent, setContent] = useInput("");

  const onFinish = useCallback(() => {
    onSubmit && onSubmit({ title, content });
    form.setFieldsValue({ title: "", content: "" });
    setTitle("");
    setContent("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, content, form]);

  const onClickCancelButton = useCallback(() => {
    form.setFieldsValue({ title: todo?.title, content: todo?.content });
    setTitle(todo?.title || "");
    setContent(todo?.content || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [form, todo]);

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
      disabled={isDisabled ?? false}
    >
      <Form.Item label="Title" name="title">
        <Input value={title} onChange={onChangeTitle} />
      </Form.Item>

      <Form.Item label="Content" name="content">
        <Input value={content} onChange={onChangeContent} />
      </Form.Item>

      <ButtonsWrapper wrapperCol={{ offset: 8, span: 16 }}>
        {extraButton && extraButton}
        <Button disabled={isDisabled} onClick={onClickCancelButton}>
          취소
        </Button>
        <Button
          type="primary"
          htmlType="submit"
          disabled={
            title.length > 0 && content.length > 0 && !isDisabled ? false : true
          }
        >
          {submitBtnTxt}
        </Button>
      </ButtonsWrapper>
    </Form>
  );
};

export default TodoForm;
