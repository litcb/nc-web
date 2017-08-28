import { Checkbox } from 'antd';

class Demo extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  }
  render() {
    return (
        <div style = {{marginLeft:"100px",marginTop:"100px"}}>
      <Checkbox onChange={this.onChange}>Checkbox</Checkbox>
      <Checkbox defaultChecked={true} onChange={this.onChange}>Checkbox2</Checkbox>
      <Checkbox disabled defaultChecked={true} onChange={this.onChange}>Checkbox3</Checkbox>
      <Checkbox indeterminate="true" onChange={this.onChange}>Checkbox4</Checkbox>
      </div>
    );
  }
}

module.exports = Demo