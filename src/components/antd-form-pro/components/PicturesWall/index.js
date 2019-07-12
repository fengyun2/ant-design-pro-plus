/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './index.css';
import { Icon, Modal } from 'antd';
import _isString from 'lodash/isString';
import _isArray from 'lodash/isArray';
import CustomUpload from '../Upload';

export function getPicturesLink(fileList) {
  if (_isArray(fileList) && fileList.length === 1) {
    return fileList[0].url;
  }
  if (_isArray(fileList)) {
    return fileList.map(item => item.url);
  }
  return fileList;
}

class PicturesWall extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props.value);
    this.state = {
      previewVisible: false,
      previewImage: '',
      fileList: props.value && _isString(props.value) ? [{ uid: 1, url: props.value }] : [],
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps.value);
    if (_isString(nextProps.value)) {
      this.setState({
        fileList: [
          {
            uid: 1,
            url: nextProps.value,
          },
        ],
      });
      return;
    }
    if (_isArray(nextProps.value)) {
      this.setState({
        fileList: [...nextProps.value],
      });
      return;
    }
    this.setState({
      fileList: [],
    });
  }

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = file => {
    this.setState({
      previewImage: file.url || file.thumbUrl,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => {
    const formatFiles = fileList.map(item => ({
      uid: item.uid,
      name: item.name,
      status: item.status,
      url: item.response ? item.response.data.path : '', // uploading 状态 无 response 属性
    }));

    if (this.props.onChange) {
      this.props.onChange(formatFiles);
    } else {
      this.setState({ fileList: formatFiles });
    }
  };

  render() {
    const { disabled } = this.props;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">上传</div>
      </div>
    );
    return (
      <div className="clearfix">
        <CustomUpload
          accept=".jpg,.jpeg,.bmp,.png,.gif"
          fileList={fileList}
          onPreview={this.handlePreview}
          onChange={this.handleChange}
          listType="picture-card"
          disabled={disabled}
        >
          {fileList.length >= 1 ? null : uploadButton}
        </CustomUpload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    );
  }
}

export default PicturesWall;