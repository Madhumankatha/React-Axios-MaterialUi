import React from 'react';
import DisplayCard from "./DisplayCard";
import '../css/style.css'
import Grid from "@material-ui/core/Grid/Grid";

class CardList extends React.Component{

    render() {
        const keys = this.props.results.map( result => result.id );
        const cards  = this.props.results.map( result => (
            <Grid item xs={12} sm={6} lg={4} xl={8} key={keys}>
                <DisplayCard key={keys} result={result} />
            </Grid>
    ));

        return (
            <div>
                <Grid container>
                    {cards}
                    </Grid>
            </div>
        );
    }
}

export default CardList;