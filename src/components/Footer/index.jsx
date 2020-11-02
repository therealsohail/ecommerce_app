import React, { Component } from 'react';

class Footer extends Component {
    state = {  }
    render() { 
        return ( 
            <footer class="page-footer black">
            <div class="container">
                <div class="row">
                <div class="col l6 s12">
                    <h5 class="white-text">Ecommerce App</h5>
                    <p class="grey-text text-lighten-4">This is a portfolio project and a demo ecommerce application.</p>
                </div>
                <div class="col l4 offset-l2 s12">
                    <h5 class="white-text">Links</h5>
                    <ul>
                    <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                    <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                © 2020 Muhammad Sohail
                <a class="grey-text text-lighten-4 right" href="#!">www.hailtech.com</a>
                </div>
            </div>
        </footer>
         );
    }
}
 
export default Footer;