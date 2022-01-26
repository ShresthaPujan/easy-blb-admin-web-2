import React from 'react';

export default function AddCooperative(props) {

    const handlePopupClose = (e) =>{
        e.preventDefault();
        props.setTrigger(false);
    }
    return (props.trigger)
        ? (
            <div className="popUP">
                    <button className='btn closebtn' onClick={handlePopupClose}><i className="bi bi-x"></i></button>
                    <div className="popup-inner container p-4">
                        <form action="">
                                <div className="col-lg-12">
                                    
                                    {props.children}
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="input-group flex-nowrap p-2">
                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-building"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Address"
                                                    aria-label="Address"
                                                    aria-describedby="addon-wrapping"/>
                                            </div>
                                            <div className="input-group flex-nowrap p-2">
                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-building"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Co Operative Code"
                                                    aria-label="Co Operative Code"
                                                    aria-describedby="addon-wrapping"/>
                                            </div>
                                            <div className="input-group flex-nowrap p-2">
                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-building"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Co Operative Name"
                                                    aria-label="Co Operative Name"
                                                    aria-describedby="addon-wrapping"/>
                                            </div>
                                            <div className="input-group flex-nowrap p-2">
                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-building"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Contact Number"
                                                    aria-label="Contac tNumber"
                                                    aria-describedby="addon-wrapping"/>
                                            </div>
                                            <div className="input-group flex-nowrap p-2">
                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-building"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Credit Limit"
                                                    aria-label="Credit Limit"
                                                    aria-describedby="addon-wrapping"/>
                                            </div>

                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input-group flex-nowrap p-2">
                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-building"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Is Online"
                                                    aria-label="Is Online"
                                                    aria-describedby="addon-wrapping"/>
                                            </div>
                                            <div className="input-group flex-nowrap p-2">
                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-building"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Logo"
                                                    aria-label="Logo"
                                                    aria-describedby="addon-wrapping"/>
                                            </div>
                                            <div className="input-group flex-nowrap p-2">
                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-building"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="No Of User"
                                                    aria-label="No Of User"
                                                    aria-describedby="addon-wrapping"/>
                                            </div>
                                            <div className="input-group flex-nowrap p-2">
                                                <span className="input-group-text" id="addon-wrapping"><i className="far fa-building"></i></span>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="license Expiry"
                                                    aria-label="license Expiry"
                                                    aria-describedby="addon-wrapping"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12 text-center ">
                                            <button className="btn btn-primary m-2 px-4 addresbtn" > ADD</button>
                                            <button className="btn btn-danger px-2 addresbtn"> RESET</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
            </div>
        )
        : "";
}
