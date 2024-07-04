import { Button, Card, Col, Row } from "antd";

interface IProps {
  number: number;
  setNum: (number: number) => void;
}

const ChildList = (pros: IProps) => {
  const { number, setNum } = pros;
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
          </Card>
        </Col>
        <Col span={12}>col-12</Col>
      </Row>
    </div>
  );
};

export default ChildList;
