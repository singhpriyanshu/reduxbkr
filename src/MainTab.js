import React, { Component } from 'react'
import {connect} from 'react-redux'
import Step1 from './Component/Step1'
import Step2 from './Component/Step2'
import Step3 from './Component/Step3'
import Review from './Component/Review'
import Lastpage from './Lastpage'
// import {getDishes} from "./store/action/dishes.act";
import {getDishes} from './store/fetch'
import { Tabs } from 'antd';


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
  //  this.props.getDish();
  this.props.dispatch(getDishes());
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
      const { error,meal, loading, dishes,selectPeople,selectRestaurant } = this.props;
        const {next}=this.state
        if (error) {
          return <div>Error! {error.message}</div>;
        }
    
        if (loading) {
          return <div>Loading data...</div>;
        }
      
        return (
            <div> {console.log(this.props.Json)}
                <ul>
        {this.props.Json.map(Json =>
        <li key={Json.id}>
            {Json.name}<br/>
        res==    {Json.restaurant}
       
         </li>)}
      </ul>
             
                {/* {console.log(this.props.dishes)}
               {dishes} 
                {console.log(this.props.selectMeal)} 
               {newdata.map(newdata=><li key={newdata.id}>{newdata.name}</li>)}
            {Json.stringify(dishes)}  */}

            {/* {console.log(meal)} */}
      <Tabs 
       activeKey={next.toString()} >
     
      <TabPane tab="Step 1" key="1" >
       <Step1 
       triggerParentUpdate= {this.buttonClick} 
       meal={this.props.meal}
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
      // handledishesChanges={this.handledishesChanges}
      handleChange={this.handleChange}
      addMoreDishes={this.addMoreDishes}
     />
     </TabPane>

     <TabPane tab="Review" key="4" >
      <Review 
      triggerParentUpdate= {this.buttonClick}
      meal={meal}
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
    // getData:state.dishesReducer.Json,
    Json: state.Json.Json,
    // loading:state.dishesReducer.loading,
    loading:state.Json.loading,
    error:state.Json.error
  };
};

// const mapDispatchToProps = dispatch =>{
//   return{
//     getDishes : () => dispatch(actions.getDishes()) 
//   };
// };
 export default connect(mapStateToProps,null)(MainTab)