import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import myPhoto from './ismi.png';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

const Biodata = () =>{
    return(
        <div className="Biodata">
            <header className="App-header">
                <h2 id="Biodata">- BIODATA DIRI -</h2>
                <img src={myPhoto} alt="" id="ismiadwi"/>
                <p><p />
                    <table id="table" align="center" className="table table-bordered" cellpadding="10">
                        <tr>
                            <td>Nama</td><td>Ismia Dwi Febrianti</td>
                        </tr>
                        <tr>
                            <td>NIM</td><td>1741720183</td>
                        </tr>
                        <tr>
                            <td>Jurusan</td><td>Teknologi Informasi</td>
                        </tr>
                        <tr>
                            <td>Prodi</td><td>D - IV Teknik Informatika</td>
                        </tr>
                        <tr>
                            <td>Kelas</td><td>TI - 3C</td>
                        </tr>
                        <tr>
                            <td>Alamat</td><td>Malang</td>
                        </tr>
                        <tr>
                            <td>Tempat, Tanggal Lahir</td><td>Malang, 20 Februari 1999</td>
                        </tr>
                    </table>
                </p>
            </header>
        </div>
    );
}

ReactDOM.render(<Biodata />, document.getElementById('root'));

serviceWorker.unregister();
