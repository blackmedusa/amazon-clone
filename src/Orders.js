import { db } from './firebase';
import './Orders.css'
import { useStateValue } from './StateProvider';
import { useEffect, useState } from 'react'
import Order from './Order'

function Orders() {
    const [{ basket, user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
      if(user){
      db.collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created', 'desc')
      .onSnapshot(snapsot =>(
        setOrders(snapsot.docs.map(doc =>({
           id: doc.id,
           data: doc.data() 
        })))
    ))

    }else{
        setOrders([])
    }
    }, [])

    
   
        
    
   


    return (
        <div className="orders">
            <h1>Your Orders</h1>

            <div className="orders__order">
                {orders?.map(order =>(
                    <Order order={order}/>
                ))}
            </div>
        </div>
    )
}

export default Orders
