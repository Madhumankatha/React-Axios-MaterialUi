import React from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import Icon from "@material-ui/core/Icon/Icon";
import Button from "@material-ui/core/Button/Button";
import '../css/style.css'

class Author extends React.Component{
    render() {
        const {classes} = this.props;
        console.log(classes);
        return (
            <div className="inline">
                <Typography className="left" variant={"subtitle1"}>
                    <a href={this.props.aurl} target="_blank">{this.props.name}</a>
                </Typography>
                <Button variant="outlined" color="primary" href={this.props.url} className="right">
                    View Github
                </Button>
            </div>
        );
    }
}

export default Author;