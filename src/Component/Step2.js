import React, { Component } from 'react'
import { Button, Icon } from 'antd';


class Step2 extends Component {
    render() {
        let {selectRestaurant} = this.props
        return (
            <div className="bc">
        Please Select a Restaurant :  

      <select name="selectRestaurant" defaultValue={selectRestaurant} onChange={this.props.handleChange} style={{ width: 160 }} >
      <option value="Olive Garden">Olive Garden</option>
      <option value="Panda Express">Panda Express</option> 
      <option value="Pizzeria">Pizzeria</option>
      <option value="Vege Deli">Vege Deli</option> 
      <option value="BBQ Hut">BBQ Hut</option>
      <option value="Mc Donalds">Mc Donalds</option> 
      </select> 
      <br/>
     <div style={{padding:"170px"}} >
     <Button type="primary" style={{margin:"40px"}} onClick={()=>this.props.triggerParentUpdate(1)}> <Icon type="left" />Previous</Button>
      <Button type="primary" onClick={()=>this.props.triggerParentUpdate(3)}> Next <Icon type="right" /></Button>
     </div>
      
      
    </div>
        )
    }
}

export default Step2
