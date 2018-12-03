import React from 'react'
import PropTypes from 'prop-types'
import './components.scss';

class InvoiceCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { showSection: "Diagram" };
    }
    handleChange(section) {
        this.setState({ showSection: section });
    }
    render() {
        const section = this.state.showSection;
        let content;

        if (section === "Diagram") {
            content =
                <div className="content justify-content-center d-flex">
                    <img src="/images/diagram.png"/>
                </div>;
        } else {
            content =
                <div className="content justify-content-center d-flex">
                    <img src="/images/map.png"/>
                </div>;
        }
        return (
            <div className=" InvoiceCanvas d-flex flex-column">
                <div className="d-flex flex-row head-section position-relative justify-content-center content">
                    <div className="position-absolute title-position">
                        <h2 >
                            {this.state.showSection}
                        </h2>
                    </div>
                    <div className="btn-group position-absolute canvas-menu fixed-top" role="group">
                        <button type="button" className="btn btn-outline-dark" onClick={() => this.handleChange("Diagram")}>Diagram</button>
                        <button type="button" className="btn btn-outline-dark" onClick={() => this.handleChange("Map")}>Map</button>
                    </div>
                </div>
                <div className="canvas-section">
                    {content}
                </div>
            </div>
        );
    }
}

InvoiceCanvas.propTypes = {
    invoice: PropTypes.object.isRequired,
}

export default InvoiceCanvas
