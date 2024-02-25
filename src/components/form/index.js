import React from 'react';


const Form = ({ active, setActive }) => {
    return (
        <div>
            <div className="popup__container">
            <div className="popup__wrapper">
                                <div id='form'>
                                    <form>
                                        <label>Имя:</label>
                                        <input type='text' name='nameReq'></input>
                                        <label>Фамилия:</label>
                                        <input type='text' name='lastNameReq'></input>
                                        <label>Телефон:</label>
                                        <input type='text' name='telReq'></input>
                                        <label>Email:</label>
                                        <input type='text' name='emailReq'></input>
                                    </form>
                                </div>
                            </div>
            </div>
        </div>
    )
}


export default Form

