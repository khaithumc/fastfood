import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Slide from "../header/Slide";
import GridItem from "../body/GridItem";

function HomePage() {
    return (
        <>
            <Router>
                <Slide/>
                <GridItem/>
            </Router>
        </>
    );
}
export default HomePage