import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Chips from "./Chips";
import Author from "./Author";

const styles = theme => ({
    card: {
        margin : '10px',
    },
    avatar: {
        backgroundColor: red[500],
    },
});

class DisplayCard extends React.Component {

    render() {
        const {classes} = this.props;
        const data = this.props.result;

        const  chips= data.topics.map(text => <Chips key={this.props.key} text={text}/>);
        return (
            <div>
                <Card className={classes.card}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="Recipe" className={classes.avatar}>
                                    {data.name.charAt(0).toUpperCase()}
                                </Avatar>
                            }
                            title={data.name}
                            subheader={data.created_at}
                        />
                        <CardContent>
                            <Typography component="p" variant={"body2"}>
                                {data.description}
                            </Typography>
                            <br/>
                            {chips}
                            <Author component="p" name={data.owner.login} aurl={data.owner.html_url}  url={data.html_url}/>
                        </CardContent>
                    </Card>
            </div>
        );
    }
}

export default withStyles(styles)(DisplayCard);