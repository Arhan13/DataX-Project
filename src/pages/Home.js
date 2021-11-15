import React from "react"
import './Home.css'
import { useHistory } from 'react-router-dom';
import market from "../assets/market.svg"
import grades from "../assets/grades.svg"
import vault from "../assets/vault.svg"

export default function Home() {
    const history = useHistory()
	return (
        <div
        style={{
        marginTop: "10vh",
        display: "flex",
        flexDirection: "row",
        padding:"5%",
        // alignItems: "center",
        // justifyContent: "center",
        color: "black",}}
        >
            <div class="text">
                <h1>Optimum <br/>Store</h1>
                <p style={{fontSize:"30px",textAlign:"left"}}>
                Optimum Store makes inventory management as easy as it can ever get. Shopkeepers know the pain of keeping logs of what is sold, what is brought from the manufacturer, and of course how many items to buy to get maximum profits. Optimum store alerts you whenever your stock goes below a certain amount, so that you don’t lose a potential customer. It tells you how much to buy so that you don’t buy less or more, optimum is the term we prefer. It also gives you the feature to periodically look into your stock and item logs and purchase accordingly thereby maximising the profit of the shopkeeper.
                </p>
                <hr/>
                <div class="press">
                    {/* <button type="button" class="button">SHOP NOW</button> */}
                    <button style={{
                    backgroundColor:"transparent",
                    color:"#fefefe",
                    paddingLeft:"20px",
                    paddingRight:"20px",
                    paddingTop:"10px",
                    paddingBottom:"10px",
                    fontSize: "20px",
                    border: "solid 2px white"
                    }} onClick={()=>{history.push("/Profile")}}>GO TO FIRST PAGE</button>
                    {/* <button type="button" class="button">SUBSCRIBE</button> */}
                </div>
            </div>
            <img src={grades} style={{paddingLeft:"200px",transform:"scale(1.25)"}}/>
        </div>
    )
}