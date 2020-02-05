import React, { Component } from 'react'
import { Button, Icon } from 'antd';

class Step1 extends Component {
   
    render() {
        
        let {selectMeal,selectPeople}=this.props;
        return (
     <div className="bc">
          <div style={{padding:"30px"}} >
          Meals : 
      <select name="selectMeal" defaultValue={selectMeal} onChange={this.props.handleChange} style={{ width: 120 }} >
         <option value="Lunch">Lunch</option>
         <option value="Dinner">Dinner</option> 
         <option value="Breakfast">Breakfast</option>
     </select> <br/> 
          </div>
      <div> 
      Please Select No. of People : 
      <input type="number" name="selectPeople" defaultValue={selectPeople} onChange={this.props.handleChange} style={{ width: 50 }}/>
      </div>

     
     <div style={{padding:"70px"}}  >
     <Button type="primary"style={{margin:"20px"}} onClick={()=>this.props.triggerParentUpdate(1)}> <Icon type="left" />Previous</Button>
     <Button type="primary" onClick={()=>this.props.triggerParentUpdate(2)}> Next </Button> 
     </div>
    
    </div>
      
        )
    }
}

export default Step1
