import React from 'react';
import Styles from './index.less'

class MZList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list:[]
      };
  
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        this.setState({
            list:[
                {'amount':'33','name':'中原消费-提钱花'},
                {'amount':'33','name':'中原消费-提钱花'}
            ]
        })
    }
    render() {
        const style={
            color:'pink',
            fontSize:'30px',
            border:'1px #666 solid',
        };
      return (
      <div style={style}>
      111
          {/* <ul> */}
          {
          this.state.list.map((item, index) => {
            return (
                <div className={Styles.item}>
                {item.name}
                {/* <img />
                  <p className={Styles.leftTop}>
                  {item.name}
                  </p>
                  <p className={Styles.leftBottom}>{item.thresholdDesc}</p> */}
                </div>
            )
          })
        }
      {/* </ul> */}
      </div>
      );
    }
  }

  export default MZList; 