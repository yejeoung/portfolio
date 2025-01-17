import React, { Component } from "react";
import './App.css';

class LangsClick extends Component {
    componentDidMount() {
        window.addEventListener("load", function () {
            var langs = document.getElementsByClassName("langs");

            for (var i = 0; i < langs.length; i++) {
                langs[i].addEventListener("click", handleClick);
            }

            // div2[0].addEventListener("click", function (event) {
            //   event.target.classList.add("clicked");
            // });

            function handleClick(event) {
                //event.target.classList.add("clicked");
                if (event.target.classList[i] === "clicked") {
                    event.target.classList.remove("clicked");
                } else {
                    for (var i = 0; i < langs.length; i++) {
                        langs[i].classList.remove("clicked");
                    }
                    event.target.classList.add("clicked");
                }
            }
        });
    }

    render() {
        return (
            <>
                <span className="langs">KOR</span>
                <span className="langs">ENG</span>
            </>
        );
    }
}

export default LangsClick;