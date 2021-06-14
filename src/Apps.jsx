  
import Introduction from './Introduction';
import BubbleSort from './BubbleSort';
import SelectionSort from './SelectionSort';
import { Route, Switch } from "react-router";
const Apps=()=>{
    return (
        <>
            <Switch>
            <Route exact path='/' component={Introduction}></Route>
            <Route exact path='/BubbleSort' component={BubbleSort}></Route>
            <Route exact path='/SelectionSort' component={SelectionSort}></Route>
            </Switch>
        </>
    );
}
export default Apps;