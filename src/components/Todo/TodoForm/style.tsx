import styled from "@emotion/styled";
import { Form } from "antd";

export const ButtonsWrapper = styled(Form.Item)`
  button:not(:last-child) {
    margin-right: 10px;
  }
`;
