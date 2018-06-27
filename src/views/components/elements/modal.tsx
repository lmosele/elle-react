import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Row, Col } from '../layout';
import Select from 'react-select';
import { connect } from 'react-redux';
import * as actions from '../../../state/page/actions';

interface IModalOptions extends React.Props<any> {
  elementID?: string;
}

export const appendModal = (options: IModalOptions = {}) => {
  const elementIDSelector = options.elementID || 'modal-root';
  ReactDOM.render(
    <Modal />,
    document.getElementById(elementIDSelector),
  );
};

export const destroyModal = (elementID?: string) => {
  const elementIDSelector = elementID || 'modal-root';
  const element = document.getElementById(elementIDSelector);
  ReactDOM.unmountComponentAtNode(element as Element);
};

const ModalContainer = styled.div`
  z-index: 1050;
  position: fixed;
  border: 1px solid lightgray;
  border-radius: 6px;
  background: white;
  width: 600px;
  max-width: 100%;
  height: auto;
  left: 50%;
  top: 20%;
  margin-left: -300px;
  display: block;
  padding: 40px;
`;
const ModalCover = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.6);
  z-index: 1040;
  display: block;
`;
const ModalCloseButton = styled.button`
  -webkit-appearance: none;
  color: #d3d3d3;
  border: none;
  margin: 0;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  font-size: 2em;
  float: right;
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

const ModalHeading = styled.h3`
  font-size: 1.5em;
`;

const ShareButton = styled.button`
  color: white;
  margin-top: 10px;
  background-color: gray;
  border: none;
  border-radius: 4px;
  padding: 8px;
  float: right;
  &:hover {
    cursor: pointer;
    background-color: lightgray;
  }
`;

export interface IModal {
  addShare?(emails: any): void;
}

export class Modal extends React.Component<IModal, any> {
  constructor(props: any) {
    super(props);
    this.state = { isMounted: false, selectedOption: '' };
  }

  public componentWillMount() {
    this.setState({ isMounted: true });
  }

  public componentWillUnmount() {
    this.setState({ isMounted: false });
  }

  public dismissNotification = (evt: React.MouseEvent<HTMLElement>) => {
    evt.preventDefault();
    destroyModal();
  }

  public share = (evt: any) => {
    evt.preventDefault();
    // this.props.addShare(this.state.selectedOption);
    destroyModal();
  }

  public handleChange = (selectedOption: any) => {
    this.setState({ selectedOption });
  }

  public render() {
    const { selectedOption } = this.state;
    const options = [
      { value: 'sarah@ebcs.com', label: 'sarah@ebcs.com' },
      { value: 'john@ebcs.com', label: 'john@ebcs.com' },
      { value: 'a.becka@ebcs.com', label: 'a.becka@ebcs.com' },
      { value: 'allie@ebcs.com', label: 'allie@ebcs.com' },
      { value: 'sam@ebcs.com', label: 'sam@ebcs.com' },
      { value: 'kolder@ebcs.com', label: 'kolder@ebcs.com' },
    ];

    return (
      <>
        <ModalContainer id='notification'>
          <ModalCloseButton onClick={this.dismissNotification}>x</ModalCloseButton>
          <Row>
            <Col xs={12}>
              <ModalHeading>Share With A Teacher</ModalHeading>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Select
                id='emailSelect'
                placeholder='Select An Email(s)'
                multi={true}
                value={selectedOption}
                onChange={this.handleChange}
                options={options}
              />
              <ShareButton onClick={this.share}>Share</ShareButton>
            </Col>
          </Row>
        </ModalContainer>
        <ModalCover onClick={this.dismissNotification}/>
      </>
    );
  }
}

const mapDispatchToProps = {
  addShare: actions.addShare,
};

export default connect(null, mapDispatchToProps)(Modal);
