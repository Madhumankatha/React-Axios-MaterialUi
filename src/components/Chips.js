import React from 'react';
import Chip from "@material-ui/core/Chip/Chip";

class Chips extends React.Component{

    render() {
        return (
            <Chip label={this.props.text} color="primary" style={{padding : '8px', margin : '2px'}} variant={"outlined"}/>
        );
    }
}

export default Chips;