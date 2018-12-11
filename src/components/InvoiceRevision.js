import React from 'react'
import PropTypes from 'prop-types'
import './components.scss';

const InvoiceRevision = ({ invoice }) => (
    <div className=" InvoiceRevision d-flex flex-column">
        <div className="flex-row">
            <h1 className="d-inline-flex">
                Invoice
            </h1>
            <p className="ml-3 d-inline-flex invoice-number">
                <span data-placement="top" data-toggle="tooltip" title="Invoice Number">
                    {invoice.number}
                </span>
            </p>
        </div>
        <div className="revision-section">
            <div className="font-weight-bold title-section">
                INVOICE - REVISION
            </div>
            <div className="d-flex flex-column flex-md-row">
                <div className="left-section flex-fill ">
                    <div className="d-flex mb-2">
                        <div class="w-50">
                            Invoice #
                        </div>
                        <div className="text-right font-weight-bold" >
                            {invoice.number}
                        </div>
                    </div>
                    <div className="d-flex mb-1">
                        <div class="w-50">
                            Date
                        </div>
                        <div className="text-right font-weight-bold">
                            {(new Date(invoice.date * 1000).toLocaleDateString())}
                        </div>
                    </div>
                    <div className="d-flex mb-1">
                        <div class="w-50">
                            Due Date
                        </div>
                        <div className="text-right font-weight-bold">
                            {(new Date(invoice.dueDate * 1000).toLocaleDateString())}
                        </div>
                    </div>
                    <div className="d-flex mb-2">
                        <div class="w-50">
                            Terms
                        </div>
                        <div className="text-right font-weight-bold">
                            {invoice.terms}
                        </div>
                    </div>
                </div>
                <div className="mid-section flex-fill ">
                    <div className="font-weight-bold">
                        Bill To
                    </div>
                    <div className="font-weight-bold bill-to">
                        {invoice.billTo}
                    </div>
                </div>
                <div className="right-section flex-fill ">
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
