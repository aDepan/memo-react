import React, {useState} from 'react';
import mrMemo from '../pics/mr-memo.png';
import './helper.css';

import Backdrop from '../Backdrop/Backdrop.js';
import Rules from '../Rules-window/rules.js';

import { connect } from 'react-redux';

const HelperMemo = props => {

    const [isRulesShowed, setRulesShowed] = useState(false)

    let moduleClass = "helper";
    let imgClass = "memo-helper";
    let textClass = "memo-helper-text";
    let helperText = "Hi! Let's play together!";
    switch (props.mode) {
        case 'greet':
            moduleClass = "greet";
            imgClass = "memo-greet";
            textClass = "memo-greet-text";
            helperText = "Do you wanna play? Pick a level and click 'Start'!"
            break;
        case 'start':
            helperText = "Do you know how to play? \n No? Click me!";
            break;
        case 'win':
            helperText = `Congrats! You've found all pairs! \n It took ${props.steps} steps`;
            break;
        case 'designer':
            helperText = "Find all green cards!";
            break;
        default: 
    }

    const closeRulesHandler = () => {
        setRulesShowed(false);
    }

    const openRulesHandler = () => {
        if (props.mode === 'start' || props.mode === 'designer') {
            setRulesShowed(!isRulesShowed);
        }
        console.log('clicked', isRulesShowed);
    }


    return (
        <div className={moduleClass} onClick={openRulesHandler}>
            <Backdrop show={isRulesShowed} clicked={closeRulesHandler}/>
            <Rules show={isRulesShowed} clicked={closeRulesHandler}/>
            <img src={mrMemo} alt="hello player" className={imgClass} />
            <p className={textClass}>{helperText}</p>
            
            
        </div>
        
    );
}

const mapStateToProps = state => {
    return {
        mode: state.modeForHelper,
        steps: state.numberOfSteps
    }
}

export default connect(mapStateToProps)(HelperMemo);