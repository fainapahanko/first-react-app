import React from 'react';
import '../style.css';
import {Row, Col } from "reactstrap"

class MyFooter extends React.Component {
    state = { }
    render () {
        return(
            <footer>
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                    </div>
                    <div className="col-lg-6 col-sm-12">
                        <div className="row">
                            <div className="links col-lg-4 col-12 mt-4">
                                <div> 
                                    <a href="">COMPANY</a>
                                </div>
                                <div> 
                                    <a href="">About</a>
                                </div>
                                <div> 
                                    <a href="">Jobs</a>
                                </div>
                                <div> 
                                    <a href="">For the Record</a>
                                </div>
                            </div>
                            <div className="links col-lg-4 col-12 mt-4">
                                <div> 
                                    <a href="">COMMUNITIES</a>
                                </div>
                                <div> 
                                    <a href="">For Artists</a>
                                </div>
                                <div> 
                                    <a href="">Developers</a>
                                </div>
                                <div> 
                                    <a href="">Brands</a>
                                </div>
                                <div> 
                                    <a href="">Investors</a>
                                </div>
                                <div> 
                                    <a href="">Vendors</a>
                                </div>
                            </div>
                            <div className="links col-lg-4 col-12 mt-4">
                                <div> 
                                    <a href="">Useful links</a>
                                </div>
                                <div> 
                                    <a href="">Help</a>
                                </div>
                                <div> 
                                    <a href="">Web Player</a>
                                </div>
                                <div> 
                                    <a href="">Free Mobile App</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-4">
                        <div className="row">
                            <div class="col-10">
                                <span className="footer-item px-3">Legal</span>
                                <span className="footer-item px-3">Privacy Center</span>
                                <span className="footer-item px-3">Privacy Policy</span>
                                <span className="footer-item px-3">Cookies</span>
                                <span className="footer-item px-3">About Ads</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default MyFooter;