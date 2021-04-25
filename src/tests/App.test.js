import Calculator from '../components/Calculator';
import { fireEvent, render } from '@testing-library/react';
import App from '../App';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    
    container = render(<App/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal).toHaveTextContent('4');
    
  })

  it('should be clear running total is 0 ', () => {
    const clearClick = container.getByTestId('clear');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(clearClick);
    expect(runningTotal).toHaveTextContent('0');
    
  })

  //calculator.add() - add 1 to 4 and get 5
  it('should be able to add 1 to 4 and get 5', function() {
    const button1 = container.getByTestId('number1');
    const button4 = container.getByTestId('number4');
    const add = container.getByTestId('add');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(add);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('5');

   })

   //calculator.subtract() subtract 4 from 7 and get 3
   it('should be able to  subtract 4 from 7 and get 3', function (){
    const button7 = container.getByTestId('number7');
    const button4 = container.getByTestId('number4');
    const subtract = container.getByTestId('subtract');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(subtract);
    fireEvent.click(button4);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('3');
   })

   //calculator.multiply() - multiply 3 by 5 and get 15
   it('should be able to multiply 3 by 5 and get 15', function (){
    const button3 = container.getByTestId('number3');
    const button5 = container.getByTestId('number5');
    const multiply = container.getByTestId('multiply');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(multiply);
    fireEvent.click(button5);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('15');
   })


   //calculator.divide() - divide 21 by 7 and get 3
   it('should be able to divide 21 by 7 and get 3', function(){
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const button7 = container.getByTestId('number7');
    const divide = container.getByTestId('divide');
    const equals = container.getByTestId('equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(divide);
    fireEvent.click(button7);
    fireEvent.click(equals);
    expect(runningTotal).toHaveTextContent('3');

   })

   //calculator.numberClick() - concatenate multiple number button clicks
   it('should be able to concatenate multiple number button clicks', function(){
     const button1 = container.getByTestId('number1');
     const runningTotal = container.getByTestId('running-total');
     fireEvent.click(button1);
     fireEvent.click(button1);
     expect(runningTotal).toHaveTextContent('11');

   })
})