import React, { Fragment, useState, useEffect } from 'react';

const Dashboards = () => {

    const [list, setList] = useState([]);
    function getList(){
        return fetch('/file-templates/dashboard').then(data => data.json())
    }
    useEffect(() => {
        getList().then(items => {
            console.log(items)
            setList(items.data)
        })
    }, [])

    return (
        <Fragment>
            <div className="row">
                {list.map(item =>
                    <div className="col-md-6 col-lg-3">
                        <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-start card">
                            <div className="widget-content">
                                <div className="widget-content-outer">
                                    <div className="widget-content-wrapper">
                                        <div className="icon-wrapper rounded-circle">
                                            <div className="icon-wrapper-bg bg-danger" />
                                            <i className="lnr-file-empty text-danger" />
                                        </div>
                                        <div className="widget-content-left pe-2 fsize-1">
                                            <div className="widget-numbers opacity-6 fsize-1 text-danger">{item.template_name}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {/* <div className="col-md-6 col-lg-3">
                    <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-start card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-success" />
                                        <i className="lnr-file-empty text-success" />
                                    </div>
                                    <div className="widget-content-left pe-2 fsize-1">
                                        <div className="widget-numbers opacity-6 fsize-1 text-success">MedWatch</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-start card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-warning" />
                                        <i className="lnr-file-empty text-warning" />
                                    </div>
                                    <div className="widget-content-left pe-2 fsize-1">
                                        <div className="widget-numbers opacity-6 fsize-1 text-warning">Literature</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">
                    <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-start card">
                        <div className="widget-content">
                            <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                    <div className="icon-wrapper rounded-circle">
                                        <div className="icon-wrapper-bg bg-info" />
                                        <i className="lnr-file-empty text-info" />
                                    </div>
                                    <div className="widget-content-left pe-2 fsize-1">
                                        <div className="widget-numbers opacity-6 fsize-1 text-info">Other</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>                
        </Fragment>
    );
}

export default Dashboards;