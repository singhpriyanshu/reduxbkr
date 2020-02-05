import React, { Component } from 'react'
import { Button, Icon } from 'antd';
import { Row, Col } from 'antd';



export class Review extends Component {
      
    render() {
        const { selectMeal,selectRestaurant,dishes,selectPeople}=this.props;
        return (
             <div className="bc" style={{ textAlign:"initial"}}>
    <Row>
        <Col style={{  padding:"40px" }}>Meal : {selectMeal}</Col>
        <Col style={{  padding:"40px" }}>No. of servings : {selectPeople}</Col>
        <Col style={{  padding:"40px" }}>Restaurant :{selectRestaurant} </Col>
        <Col style={{  padding:"40px" }}>
         Dishes : <div style={{margin:"30px" }} >
           {dishes.length > 0 ? dishes.map((item,index)=>{
                   return  <div key={index}>
                            <ul><li>{item.dishes}</li>
                            <li>{item.servings}</li></ul>
                           </div>
                  }) :""} </div>
     </Col>
    </Row>
  
    <div>
    <Button type="primary" style={{margin:"10px"}} onClick={()=>this.props.triggerParentUpdate(3)}> <Icon type="left" />Previous</Button>
    <Button onClick={()=>this.props.triggerParentUpdate(5)}> Submit <Icon type="right" /></Button>
   
    </div>
   

     </div>
     )
    }
}

export default Review

 

