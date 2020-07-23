import React from 'react';
import Auxilliary from '../../hoc/Auxiliary'
import classes from './Layout.module.css'

const layout = (props) => (
    <Auxilliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilliary>

);

export default layout;