import React from 'react';

class EssayForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
      };
  
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('提交的文章: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            文章:
            <textarea value={this.state.value} onChange={(e) =>{
                this.handleChange(e)
            }} />
          </label>
          <label>
          选择你喜欢的风味:
          <select value={this.state.value} onChange={(e) =>{
                this.handleChange(e)
            }}>
            <option value="grapefruit">葡萄柚</option>
            <option value="lime">柠檬</option>
            <option value="coconut">椰子</option>
            <option value="mango">芒果</option>
          </select>
        </label>
          <input type="submit" value="提交" />
        </form>
      );
    }
  }

  export default EssayForm; 