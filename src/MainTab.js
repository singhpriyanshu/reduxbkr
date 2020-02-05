import React, { Component } from 'react'
import {connect} from 'react-redux'
import Step1 from './Component/Step1'
import Step2 from './Component/Step2'
import Step3 from './Component/Step3'
import Review from './Component/Review'
import Lastpage from './Lastpage'
import {getDish} from './store/Actions'

import { Tabs } from 'antd';


const { TabPane } = Tabs;

class MainTab extends Component {
    constructor(props){
      super(props);
      this.state={
        selectMeal:"",
        selectPeople:"",
        selectRestaurant:"",
        dishes:[{
          dishes:"",
          servings:""
        }],
        next:"1",
    }
    
   }
  componentDidMount(){
   this.props.dispatch(getDish())
  }
  
  //   componentDidMount(){
  //  fetch('./data/dishes.json')
  //  .then((response) => response.json())
  //  .then((findresponse)=>{
  //    console.log(findresponse.id)
  //    this.setState({
  //      data:findresponse.id,
  //    })
  //  })}
  
     buttonClick=(next)=> {
      this.setState({ next});
    }

   
    handledishesChanges=(e,indexFrom)=>{
      let {dishes} = this.state;
        let {name,value} = e.target;
            dishes.filter((item,index)=>{
              if(index===indexFrom){
                item[name]=value;
              }
                   
            });
            // console.log('data :',dishes)
             this.setState({
              dishes 
                  
             });
          }

    addMoreDishes = () =>{
       let {dishes} = this.state;
       

       let data = [{
         dishes:"",
         servings:""
       }]

       this.setState({
         dishes:[...dishes,...data]
       });
    } 

    handleChange=(e)=>{
         this.setState({
           [e.target.name]:e.target.value
         })
       }
      
    render() {
      const { error, loading, data } = this.props;
        const {selectMeal,selectPeople, selectRestaurant,dishes,next}=this.state;
        if (error) {
          return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
          return <div>Loading data...</div>;
        }
        return (
            <div> {console.log(this.props.data)}
              {data.map(data=><li key={data.id}>{data.name}</li>)}
            
      <Tabs 
       activeKey={next.toString()} >
     
      <TabPane tab="Step 1" key="1" >
       <Step1 
       triggerParentUpdate= {this.buttonClick} 
       selectMeal={selectMeal}
       selectPeople={selectPeople}
       handleChange={this.handleChange}
       />
      </TabPane>

     <TabPane tab="Step 2" key="2">
      <Step2 
      triggerParentUpdate= {this.buttonClick}
       selectRestaurant={selectRestaurant}
       handleChange={this.handleChange}
      />
     </TabPane>

     <TabPane tab="Step 3" key="3" >
     <Step3 
      triggerParentUpdate= {this.buttonClick} 
      dishes={dishes}
      handledishesChanges={this.handledishesChanges}
      addMoreDishes={this.addMoreDishes}
     />
     </TabPane>

     <TabPane tab="Review" key="4" >
      <Review 
      triggerParentUpdate= {this.buttonClick}
      selectMeal={selectMeal}
      selectPeople={selectPeople}
      selectRestaurant ={selectRestaurant}
      dishes={dishes}
       />
    </TabPane>

    <TabPane tab="Result" key="5" >
       <Lastpage/>
       </TabPane>
     </Tabs>
     </div> 
        )
    }
}

const mapStateToProps = state => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error
});
 export default connect(mapStateToProps)(MainTab)