import React, { Component } from "react";
import './App.css'



class header extends Component {

  render() {
    return (
        <div className="Flex-container card">
                <div>
                        <img src={require('../src/image/my.jpeg')}  alt="" /> 
                             <h5>Olatunji Clement</h5>
                </div>
            


                <div className="link">
                    
                    <a href="https://twitter.com/bolajinimi" alt=''>
                        <button id="twitter" className="button">Twitter link</button></a>
                    {this.props.showMe && <a href="Olatunji Bolaji" alt=''>
                        <button id='slack' className="button">Slack link</button></a>}
            
                    <a href="https://training.zuri.team/" alt=''>
                        <button id="button_zuri" className="button">Zuri Team</button></a>
                    <a href="https://books.zuri.team/" alt=''>
                        <button id="books" className="button">Zuri Books</button></a>
                    <a href="https://books.zuri.team/python-for-beginners?ref_id=<Olatunji Bolaji>" alt=''>
                        <button id="book_python" className="button">Python Books</button></a>
                    <a href="https://background.zuri.team" alt=''>
                        <button id="pitch" className="button">Background Check for Coders</button></a>
                    <a href="https://books.zuri.team/design-rules" alt=''>
                        <button id="book_design" className="button">Design Books</button></a>
                </div>
             
        </div>

      
    );
  }
}

export default header;
