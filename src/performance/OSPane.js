import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css";
import { Grid } from 'semantic-ui-react';
import DiskUsage from './DiskUsage';
import PageCache from '../diagnostic/PageCache';
import OSStats from './OSStats';
import uuid from 'uuid';

class OSPane extends Component {
    render() {
        const key = uuid.v4();

        return (
            <div className="OSPage">
                <Grid divided='vertically'>
                    <Grid.Row columns={1}>
                        <Grid.Column>
                            <OSStats 
                                key={key} 
                                node={this.props.node} 
                                driver={this.props.driver}
                            />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <DiskUsage key={key} node={this.props.node} driver={this.props.driver}/>
                        </Grid.Column>
                    
                        <Grid.Column>
                            <PageCache key={`${key}1`} node={this.props.node} driver={this.props.driver}/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>  
            </div>
        );
    }
}

export default OSPane;