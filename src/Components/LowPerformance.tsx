import React from "react";
import {
  Table,
  Form,
  Select,
  Input,
  Button,
  Card,
  Col,
  Row,
  Calendar,
  DatePicker,
} from "antd";

const LowPerformance = () => {
  return (
    <Card style={{ padding: "10rem" }}>
      <Row gutter={16}>
        <Col span={12}>
          <Table />
        </Col>
        <Col span={12}>
          <Table />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Form />
        </Col>
        <Col span={12}>
          <Select />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Calendar />
        </Col>
        <Col span={12}>
          <DatePicker />
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <Input />
        </Col>
        <Col span={12}>
          <Button>Button</Button>
        </Col>
      </Row>
    </Card>
  );
};

export default LowPerformance;
