import React from 'react'
import PropTypes from 'prop-types'
import './components.scss';

const InvoiceOverview = ({ invoice }) => (
    <div className=" InvoiceOverview d-flex flex-column">
        <div className="overview-section">
            <div className="font-weight-bold title-section">
                OVERVIEW
            </div>
            <div className="d-flex flex-row">
                <div className="left-section col-sm container">
                    <div className="d-flex flex-row mb-2">
                        <div className="col-sm">
                            Status
                        </div>
                        <div className="col-sm text-right font-weight-bold" >
                            {invoice.status === "active" &&
                                <span className="active-style">
                                <i className="fa mr-2 fa-check"></i>Active
                                </span>
                            }
                            {invoice.status !== "active" &&
                                <span>
                                    {invoice.status}
                                </span>
                            }
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-1">
                        <div className="col-sm">
                            Method
                        </div>
                        <div className="col-sm text-right font-weight-bold">
                            {invoice.method}
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-1">
                        <div className="col-sm">
                            Capacity
                        </div>
                        <div className="col-sm text-right font-weight-bold">
                            {invoice.capacity}
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-2">
                        <div className="col-sm">
                            Drayage
                        </div>
                        <div className="col-sm text-right font-weight-bold">
                            {invoice.drayage}
                        </div>
                    </div>
                </div>
                <div className="left-section col-sm container">
                    <div className="d-flex flex-row mb-2">
                        <div className="col-sm">
                            Incoterms
                        </div>
                        <div className="col-sm text-right font-weight-bold" >
                            {invoice.incoterms}
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-1">
                        <div className="col-sm">
                            Service Options
                        </div>
                        <div className="col-sm text-right font-weight-bold">
                            {invoice.serviceOptions.map((item, index) =>
                                <span key={index}>{item}
                                    {invoice.serviceOptions.length - 1 !== index &&
                                        ", "
                                    }
                                </span>
                            )}
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-1">
                        <div className="col-sm">
                            Hazardous or forbidden commodities
                        </div>
                        <div className="col-sm text-right font-weight-bold">
                            {invoice.hazardousCommodities.map((item, index) =>
                                <span key={index}>{item}
                                    {invoice.hazardousCommodities.length - 1 !== index &&
                                        ", "
                                    }
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

InvoiceOverview.propTypes = {
    invoice: PropTypes.object.isRequired,
}

export default InvoiceOverview
