import React from 'react'
import PropTypes from 'prop-types'
import './components.scss';

const InvoiceRevision = ({ invoice }) => (
    <div className=" InvoiceRevision d-flex flex-column">
        <div className="flex-row">
            <h1 className="d-inline-block">
                Invoice
            </h1>
            <p className="ml-3 d-inline-block invoice-number">
                <span data-placement="top" data-toggle="tooltip" title="Invoice Number">
                    {invoice.number}
                </span>
            </p>
        </div>
        <div className="revision-section">
            <div className="font-weight-bold title-section">
                INVOICE - REVISION
            </div>
            <div className="d-flex flex-row">
                <div className="left-section col-sm container">
                    <div className="d-flex flex-row mb-2">
                        <div className="col-sm">
                            Invoice #
                        </div>
                        <div className="col-sm text-right font-weight-bold" >
                            {invoice.number}
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-1">
                        <div className="col-sm">
                            Date
                        </div>
                        <div className="col-sm text-right font-weight-bold">
                            {(new Date(invoice.date * 1000).toLocaleDateString())}
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-1">
                        <div className="col-sm">
                            Due Date
                        </div>
                        <div className="col-sm text-right font-weight-bold">
                            {(new Date(invoice.dueDate * 1000).toLocaleDateString())}
                        </div>
                    </div>
                    <div className="d-flex flex-row mb-2">
                        <div className="col-sm">
                            Terms
                        </div>
                        <div className="col-sm text-right font-weight-bold">
                            {invoice.terms}
                        </div>
                    </div>
                </div>
                <div className="mid-section col-sm">
                    <div className="font-weight-bold">
                        Bill To
                    </div>
                    <div className="font-weight-bold bill-to">
                        {invoice.billTo}
                    </div>
                </div>
                <div className="right-section col-sm">
                    <div className="font-weight-bold">
                        New Balance upon Re-booking
                    </div>
                    <div className="font-weight-bold balance">
                        $ {(new Intl.NumberFormat('us-US').format(invoice.balance))}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

InvoiceRevision.propTypes = {
    invoice: PropTypes.object.isRequired,
}

export default InvoiceRevision
