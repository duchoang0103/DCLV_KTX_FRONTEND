import React from 'react';
import '../../styles/navigation/navigation.css';
import {
    Link
  } from "react-router-dom";
class Navication extends React.Component {
    render() {
        return (
            <div className="topnav">
                <Link to='/'>Home</Link>
                <Link to='/ThongTinSv'>ThongTinSinhVien</Link>
                <Link to='/Trang2'>Trang2</Link>
                {/* <a className="active" href="/">Home</a>
                <a href="/ThongTinSv">ThongTinSinhVien</a>
                <a href="/Trang2">Trang2</a>
                <a href="/Trang3">Trang3</a> */}
            </div>
        )
    }
}
export default Navication;

