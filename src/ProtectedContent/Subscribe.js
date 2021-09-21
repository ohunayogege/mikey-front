import { Redirect } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import axiosInstance from '../axios';
import { useEffect } from 'react';
// import { useHistory } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';

const Subscribe = () => {
    // const history = useHistory();
    if (localStorage.getItem('access_token') === null){
        return <Redirect to = '/' />
    }
    const queryParams = new URLSearchParams(window.location.search);
    const name = queryParams.get('reference');
    if(name){
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        axiosInstance.get('user/subscribe/?reference='+name, {
        })
            .then((res) => {
                if (res.data.status === true) {
                    // const dat = document.getElementById("someText");
                    // dat.innerText = "This page has been unlocked."
                    alert(res.data.message);
                    window.location.replace("/Content");
                }
                else {
                    // const dat = document.getElementById("someText");
                    // dat.innerText = "This page has been locked."
                    alert(res.data.message);
                }
            })
            .catch(error => {
                alert(error.response.data.message)
            });
            axiosInstance.defaults.headers['Authorization'] = "Bearer "+localStorage.getItem('access_token');
        });
    }
    function subScribe(plan) {
        
        axiosInstance
			.post(`user/subscribe/`, {
				sub_plan: plan
			})
			.then((res) => {
                // console.log(res.data);
                window.location.replace(res.data.data.authorization_url)
                // window.open(res.data.data.authorization_url);
			})
            .catch(error => {
                if(typeof error.response  === 'undefined'){
                    alert("Error")
                }else{
                    alert("Error two");
                }
            })
            axiosInstance.defaults.headers['Authorization'] =
					'Bearer ' + localStorage.getItem('access_token');
    }
    return (
        <div>
            <Helmet>
                <title>Subscribe</title>
            </Helmet>
            <div className="maincontainer">
       <section>
          <div className="container py-5">
            
            <header className="text-center mb-5 text-white">
              <div className="row">
                <div className="col-lg-8 mx-auto">
                  <h1>Reactjs Bootstrap 4 pricing table</h1>
                  <p>Easily create a classy pricing table in Bootstrap 4.<br /> <a href="https://ilajedev.com" target="_blank" rel="noreferrer" className="text-reset">Reactjs Bootstrap snippet by Ohunayo Gege</a></p>
                </div>
              </div>
            </header>
           
            <div className="row text-center align-items-end">
             
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h1 className="h6 text-uppercase font-weight-bold mb-4">Free</h1>
                  <h2 className="h1 font-weight-bold">$199<span className="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div className="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul className="list-unstyled my-5 text-small text-left">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times mr-2"></i>
                      <del>Nam libero tempore</del>
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times mr-2"></i>
                      <del>Sed ut perspiciatis</del>
                    </li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times mr-2"></i>
                      <del>Sed ut perspiciatis</del>
                    </li>
                  </ul>
                  <a type="button" onClick={() => subScribe("Free")} className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
              <div className="col-lg-4 mb-5 mb-lg-0">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h1 className="h6 text-uppercase font-weight-bold mb-4">Medium</h1>
                  <h2 className="h1 font-weight-bold">$399<span className="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div className="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Nam libero tempore</li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                    <li className="mb-3 text-muted">
                      <i className="fa fa-times mr-2"></i>
                      <del>Sed ut perspiciatis</del>
                    </li>
                  </ul>
                  <a type="button" onClick={() => subScribe("Medium")} className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
              <div className="col-lg-4">
                <div className="bg-white p-5 rounded-lg shadow">
                  <h1 className="h6 text-uppercase font-weight-bold mb-4">Advanced</h1>
                  <h2 className="h1 font-weight-bold">$899<span className="text-small font-weight-normal ml-2">/ month</span></h2>
                  <div className="custom-separator my-4 mx-auto bg-primary"></div>
                  <ul className="list-unstyled my-5 text-small text-left font-weight-normal">
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Lorem ipsum dolor sit amet</li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> At vero eos et accusamus</li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Nam libero tempore</li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                    <li className="mb-3">
                      <i className="fa fa-check mr-2 text-primary"></i> Sed ut perspiciatis</li>
                  </ul>
                  <a type="button" onClick={() => subScribe("Advanced")} className="btn btn-primary btn-block p-2 shadow rounded-pill">Subscribe</a>
                </div>
              </div>
             
            </div>
          </div>
        </section>
      </div>

        </div>
    )
}

export default Subscribe;
