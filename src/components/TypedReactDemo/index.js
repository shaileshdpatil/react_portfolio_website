import React from "react";

import Typed from "typed.js";

class TypedReactDemo extends React.Component {
    componentDidMount() {
        const { strings } = this.props;
        const options = {
            strings: strings,
            typeSpeed: 50,
            backSpeed: 50,
            loop: true,
            // loopCount: Infinity,
            showCursor: false,
            onBegin: self => {}
        };
        this.typed = new Typed(this.el, options);
    }

    componentWillUnmount() {
        this.typed.destroy();
    }

    render() {
        return (
            <span
                className="typed"
                style={{ whiteSpace: "pre",marginLeft:"10px" }}
                ref={el => {
                    this.el = el;
                }}
            />
        );
    }
}

export default TypedReactDemo;