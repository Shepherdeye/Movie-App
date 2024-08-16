import React, { Fragment, useEffect, useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [width, setWidth] = useState(window.innerWidth); // Initialize with window.innerWidth
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
        console.log(toggle);
    };

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            console.log("=>", window.innerWidth);

        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("resize", () => {
            if (window.innerWidth < 450) {
                setToggle(false);
            }
        })
        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [window.innerWidth]);

    return (
        <Fragment>
            <div className={toggle ? "header-switch " : 'header'}>
                {
                    width < 450 && (
                        <div className='header-toggle'>
                            <input onClick={handleToggle} type="checkbox" id="checkbox" />

                            <label className="toggle" htmlFor="checkbox">
                                <div id="bar1" className="bars"></div>
                                <div id="bar2" className="bars"></div>
                                <div id="bar3" className="bars"></div>
                            </label>
                        </div>
                    )
                }
                <div className='header-logo'>
                    <Link to={"/"}>
                        <button onClick={() => setToggle(false)} className="button" data-text="Awesome">
                            <span className="actual-text">&nbsp;Movies&nbsp;</span>
                            <span aria-hidden="true" className="hover-text">&nbsp;Movies&nbsp;</span>
                        </button>
                    </Link>

                </div>


                <div className='header-nav-links'>
                    <li onClick={() => setToggle(false)}><Link to="/">Watched</Link></li>
                    <li onClick={() => setToggle(false)}><Link to="/watchedlist">Watched list</Link></li>
                    <Link style={{ color: "black !important" }} onClick={() => setToggle(false)} className='btn' to={"/add"}>Add</Link>
                </div>
            </div>
        </Fragment>
    );
}

export default Header;
