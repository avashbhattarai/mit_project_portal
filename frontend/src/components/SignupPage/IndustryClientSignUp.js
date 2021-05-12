import React from "react";
import { Form, Input, Col, Row, Button, Space } from "antd";
import ProfilePicUploader from "./ProfilePicUploader";

const IndustryClientSignUp = () => {
  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 9,
      }}
      layout="horizontal"
    >
      <Row gutter={32}>
        <Col span={12}>
          <h3> Company Details </h3>
          <Form.Item label="Company Name">
            <Input />
          </Form.Item>
          <Form.Item label="Company Profile">
            <Input />
          </Form.Item>
          <Form.Item label="Website">
            <Input />
          </Form.Item>
          <h3> Contact Details </h3>
          <Form.Item label="First Name">
            <Input />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input />
          </Form.Item>
          <Form.Item label="Work Email">
            <Input />
          </Form.Item>
          <Form.Item label="Mobile Phone Number">
            <Input />
          </Form.Item>
          <Form.Item label="Office Phone Number">
            <Input />
          </Form.Item>
          <Form.Item label="Job Position">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <ProfilePicUploader />
        </Col>
      </Row>
    </Form>
  );
};
export default IndustryClientSignUp;