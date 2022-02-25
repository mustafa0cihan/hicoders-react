import Friends from "./friends";
import Children from "./children";
import React, { useState } from "react";


function Personal(props) {

    const [isVisible, setIsVisible] = useState(false);
    function onClickEvent() {
        if (isVisible === false) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }

    return props.map((eleman) => {
        return (
            <div key={eleman.id} className="card my-2">
                <h2>PERSONEL {eleman.id} </h2>
                <div className="card personel text-white">
                    <span>
                        <img className="avatar" src={eleman.avatar} alt="resim" />
                    </span>
                    <h2 className="card-title" id={eleman.id} onClick={onClickEvent}>
                        {" "}
                        {eleman.first_name} {eleman.last_name}
                    </h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ADRES</th>
                                <th>SALARY</th>
                                <th>GENDER</th>
                                <th>EMAIL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{eleman.address}</td>
                                <td>{eleman.salary}</td>
                                <td>{eleman.gender}</td>
                                <td>{eleman.email}</td>
                            </tr>
                        </tbody>
                    </table>

                    {isVisible ? Friends(eleman) : null}

                    {isVisible ? Children(eleman) : null}

                </div>
            </div>
        );
    });
}

export default Personal;