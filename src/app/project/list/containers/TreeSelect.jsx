import { TreeSelect } from 'antd';
const TreeNode = TreeSelect.TreeNode;

class Demo extends React.Component {
  state = {
    value: undefined,
  }
  onChange = (value) => {
    console.log(value);
    this.setState({ value });
  }
  render() {
    return (
      <TreeSelect
        showSearch
        style={{ width: 300 }}
        value={this.state.value}
        dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
        placeholder="Please select"
        multiple
        allowClear
        treeDefaultExpandAll
        onChange={this.onChange}
        showCheckedStrategy = {TreeSelect.SHOW_CHILD}
        treeCheckable
      >
        <TreeNode value="parent 1" title="parent 1" key="1">
          <TreeNode value="parent 1-0" title="parent 1-0" key="2">
            <TreeNode value="leaf1" title="my leaf" key="3" disabled/>
            <TreeNode value="leaf2" title="your leaf" key="4" />
          </TreeNode>
          <TreeNode value="parent 1-1" title="parent 1-1" key="5">
            <TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="6" />
          </TreeNode>
        </TreeNode>
      </TreeSelect>
    );
  }
}

module.exports = Demo