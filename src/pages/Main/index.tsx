import * as React from "react";
import WithAuth from "../../components/commons/hocs/withAuth";

interface IMainProps { }

const Main: React.FunctionComponent<IMainProps> = (props) => {
  console.log(props)
  return <>main</>;
};

export default WithAuth(Main);
