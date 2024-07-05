import { Button, Card, Col, Row } from "antd";
import ParentChild from "./parentChild";

interface IProps {
  number: number;
  setNum: (number: number) => void;
  children?: React.ReactNode;
}

const ChildList = (props: IProps) => {
  const { number, setNum, children } = props;
  return (
    <div>
      <span style={{ color: "red", fontSize: "20px" }}>子组件</span>
      <Row>
        <Col span={12}>
          <Card title={false} bordered={false} style={{ width: "100%" }}>
            数据：{number}
            <Button onClick={() => setNum(number + 1)} type="primary">
              点击+1
            </Button>
            {children}
          </Card>
        </Col>
        <Col span={12}>
          <Card title={false} bordered={false} style={{ width: "100%" }}>
            <ParentChild />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ChildList;
