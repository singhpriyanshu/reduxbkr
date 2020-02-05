import React, { Component } from 'react'
import { Button, Icon } from 'antd';



class Step3 extends Component {
   
     
    render() {
        let {dishes}=this.props
        return (
            <div className="bc">
                {dishes.length>0?
                dishes.map((item,index)=>{
                   return( 
                   <div className="style" style={{margin: "60px",padding:"40px"}}>
                  
                  Dish :  <select name="dishes"  onChange={(e)=>this.props.handledishesChanges(e,index)} style={{ width: 170 }} >
                            <option value="Chicken Burger">Chicken Burger</option>
                            <option value="Ham Burger">Ham Burger</option> 
                            <option value="Cheese Burger">Cheese Burger</option>
                            <option value="Ham Burger">Ham Burger</option>
                            <option value="Fries">Fries</option>
                            <option value="Egg Muffin">Egg Muffin</option>
                            <option value="Grilled Sandwich">Grilled Sandwich</option>
                            <option value="Veg. Salad">Veg. Salad</option>
                            <option value="Corn Soup">Corn Soup</option>
                            <option value="Tomato Soup">Tomato Soup</option>
                    </select> <br/>
                         <div style={{margin:"17px"}}>
                            Please Select No. of Servings :  
                            <input type="number" name="servings"   onChange={(e)=>this.props.handledishesChanges(e,index)} style={{ width: 60 }}/>
                         </div>
                            </div>

                   )
                })
                :""} 

       < Icon type="plus-circle" style={{marginRight:"670px",fontSize:"25px"}} onClick={this.props.addMoreDishes} />
   <div style={{padding:"170px"}}>
      <Button type="primary" style={{margin:"40px"}} onClick={()=>this.props.triggerParentUpdate(2)}> <Icon type="left" />Previous</Button>
      <Button type="primary" onClick={()=>this.props.triggerParentUpdate(4)}> Next <Icon type="right" /></Button>
   </div>

</div> 

        )
    }
}

export default Step3