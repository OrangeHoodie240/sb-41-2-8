import React  from "react";
import { Switch, Redirect, Route} from "react-router-dom";
import ColorIndex from "./ColorIndex";
import Color from "./Color";
import NewColor from "./NewColor";

const Routes = ({colors})=>{
    return (
        <Switch>
            <Route exact path='/colors' >
                <ColorIndex colors={colors} />
            </Route>
            <Route exact path='/colors/new'>
                <NewColor colors={colors} /> 
            </Route>
            <Route exact path='/colors/:color'>
                <Color colors={colors} />
            </Route>
            <Redirect to='/colors' />
        </Switch>
    );
};


export default Routes;