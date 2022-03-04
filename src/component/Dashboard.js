import React from 'react'

export default function Dashboard() {
  return (
    <div className="col-lg-12 col-md-12 col-sm-12 contentMainSection">    <div>
    <div className="fontHeader">Dashboard</div>              
                      <hr style={{color:"#f1f2f3"}}/>
                  </div>
                  <section className="content-section main-content">
                                <div className="content">
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="panel">
                                        <div className="text-right panelIcon"><i className="fas fa-users te"></i></div>
                                          <div className="total"><h3>25</h3></div>
                                          <p>Total Cooperative</p>
      
                                        </div>
                                      </div>
                                      <div className="col-lg-4">
                                      </div>
                                      <div className="col-lg-4">
                                      </div>
                                   </div>
                                  </div>
                                  </section>
                  
                  </div>
  )
}
