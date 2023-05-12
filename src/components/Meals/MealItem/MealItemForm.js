import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
import React, { useRef, useState } from 'react'


const MealItemForm = (props) => {
    const amountInputRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true)

    const submitHandler = (event) => {
        event.preventDefault()
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount
    
        if (enteredAmount.trim().length === 0
            || enteredAmountNumber < 1
            || enteredAmountNumber > 5) {
                setAmountIsValid(false)
            return;
        }
    props.onAddToCart(enteredAmountNumber)
    }

    return <form className={classes.form} onSubmit={submitHandler}>
        <Input label='Amount' ref={amountInputRef} input={{
            id: 'amount_' + props.id,
            min: '1',
            max: '5',
            step: '1',
            type: 'number',
            defaultValue: '1'
        }} />
        <button>add</button>
        {!amountIsValid && <p>Please Enter a Valid Amount</p>}
    </form>


}

export default MealItemForm