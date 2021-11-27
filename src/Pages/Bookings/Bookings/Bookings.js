import React, { useEffect, useState } from 'react';
import {  useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Bookings.css'

const Bookings = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    
    

    useEffect(() => {
        

        fetch(`https://howling-labyrinth-06347.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    const handleProductOrder = (data) => {
        console.log('Order submitted');
        const orderDetails = { ...user, ...services, date: new Date() }
        console.log(orderDetails);
        fetch('https://howling-labyrinth-06347.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log('server side response', data);
                alert('Order placed successfully');
            });

    }
    // const handleDelete = id => {
    //     const proceed = window.confirm('are you sure u want ot delete this item')
    //     if (proceed) {
    //         const url = `https://howling-labyrinth-06347.herokuapp.com/addOrder/${id}`;
    //         fetch(url, {
    //             method: 'DELETE'
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if (data.deletedCount > 0) {
    //                     alert('deleted successFully');
    //                     const remainingUsers = services.filter(user => user._id !== id);
    //                     console.log(remainingUsers);
    //                     setServices(remainingUsers);
    //                 }
    //             })
    //     }
    // }
    

    

    return (

        
        <div className="">
            <br />
            <br />
            <br />
            <br />
            <br />

          

            <div className="container mt-3">
                <h1>Orders</h1><br />
                <table class="table caption-top">
                    <thead>
                        <tr>
                            <th scope="col">Events</th>
                           
                            <th scope="col">Ticket/Package</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                      <tr>
                            <td>{services.name}</td>
                            
                            <td>${services.price}</td>
                            <td><button className="btn btn-success">Edit</button> <button className="btn btn-danger">Delete</button></td>
                        </tr>
                        <tr>
                            <th colspan="2">Total</th>
                            <th>${services.price}</th>
                        </tr> 
                    </tbody>
                </table>
                <button onClick={handleProductOrder}  className="btn btn-success" style={{ float: 'right' }}>Confirm</button>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
               
            </div>


            
       
    );
};

export default Bookings;