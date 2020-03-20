import React from 'react';
import './HelloComponent.css';

const Hellocomponent = () => {
    return <div>
        <h2>Form Login</h2>
        <form>
            <h1>Tugas Pertemuan Ketiga</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <label className="col-md-4"><b>Username</b></label>
                        <input className="col-md-8 form-control" type="text" placeholder="Masukkan Username" name="uname" required/>
                        <label className="col-md-4"><b>Password</b></label>
                        <input className="col-md-8 form-control" type="password" placeholder="Masukkan Password" name="psw" required/>            
                        <button type="submit">Login</button>
                        <input type="checkbox" defaultChecked/> Remember me
                    </div>
                </div>
            </div>
                <div className="container">
                    <button type="button" className="cancel">Cancel</button>
                </div>
        </form>
    </div>
}

export default Hellocomponent;