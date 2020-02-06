import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import Step1 from './Component/Step1'
import Step2 from './Component/Step2'
import Step3 from './Component/Step3'
import Review from './Component/Review'
import Lastpage from './Lastpage'
import {getDish} from './store/Actions'


import { Tabs } from 'antd';
import { newdata } from './data'


const { TabPane } = Tabs;

class MainTab extends Component {
    constructor(props){
      super(props);
      this.state={
        // selectMeal:"",
        // selectPeople:"",
        
        // dishes:[{
        //   dishes:"",
        //   servings:""
        // }],
        next:"1",
    }
    
   }
  componentDidMount(){
   this.props.dispatch(getDish())
  }
  

  
     buttonClick=(next)=> {
      this.setState({ next});
    }

   
    // handledishesChanges=(e,indexFrom)=>{
    //   let {dishes} = this.props;
    //     let {name,value} = e.target;
    //         dishes.filter((item,index)=>{
    //           if(index===indexFrom){
    //             item[name]=value;
    //           }
                   
    //         });
    //         // console.log('data :',dishes)
    //          this.setState({
    //           dishes
                  
    //          });
    //       }

    addMoreDishes = () =>{
       let {dishes} = this.props;
       

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
      const { error,selectMeal, loading, dishes,selectPeople,selectRestaurant } = this.props;
        const {next}=this.state
        if (error) {
          return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
          return <div>Loading data...</div>;
        }
      
        return (
            <div>
                {/* {console.log(this.props.dishes)}
               {dishes} 
                {console.log(this.props.selectMeal)} 
               {newdata.map(newdata=><li key={newdata.id}>{newdata.name}</li>)}
            {JSON.stringify(dishes)}  */}

            {console.log(this.state)}
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
      dishes={newdata.dishes}
      // handledishesChanges={this.handledishesChanges}
      handleChange={this.handleChange}
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

const mapStateToProps = state => {
  return {
  dishes: state.dishes.dishes,
  selectMeal:state.selectMeal.selectMeal,
  selectRestaurant:state.selectRestaurant.selectRestaurant,
  selectPeople:state.selectPeople.selectPeople,
  
  loading: state.dishes.loading,

  error: state.dishes.error
};
};

// const mapDispatchToProps = dispatch =>{
//   return{
//  getDish:bindActionCreators(getDish,dispatch)
//   };
// };
 export default connect(mapStateToProps
  // ,
  // mapDispatchToProps
  )(MainTab)