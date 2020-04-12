import React,{Component} from 'react';
import NavComponent from './navbar';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Yoga from './Images/Yoga.jpg';
import covid from './Images/covid.jpg'
import fruits from './Images/fruits.jpg';
import './articles.css'

export default class Articles extends Component{
    render(){
        return(            
            <div>
                <NavComponent></NavComponent>   
                <div id="divempty" style={{height:"100px"}}></div>             
                <div  className="form-inline articleCard" style={{}}>
                  <div id="divTopics" style={{width:"80%",  paddingTop:"20px", paddingBottom:"20px", paddingLeft:"15px"}}>
                    <h4 style={{textAlign:"left", color:"cadetblue"}}>Importance of Calisthenics</h4>
                    <div style={{color:"grey", fontSize:"14px",  textAlign:"left", marginBottom:"10px"}}>
                      Search for the keywords to learn more about each warning.
                      To ignore, add // eslint-disable-next-line to the line before.Search for the keywords to learn more about each warning.
                      To ignore...</div>
                    <div className="form-inline">
                      <div style={{backgroundColor:"#b0e0e6", width:"10%", color:"white", fontSize:"13px", paddingTop:"2px", paddingBottom:"2px"}}>Category</div>
                      <div style={{paddingLeft:"5px", fontSize:"13px", border:"1px solid #b0e0e6",paddingRight:"5px"}}>Gym workout</div>
                    </div>
                  </div>
                  <div id="divGoto" type="button" style={{ background:"darkorange", textAlign:"center", margin:"auto", padding:"1%", color:"white"}}>Go to article</div>
                </div>

                <div  className="form-inline articleCard" style={{}}>
                  <div id="divTopics" style={{width:"80%",  paddingTop:"20px", paddingBottom:"20px", paddingLeft:"15px"}}>
                    <h4 style={{textAlign:"left", color:"cadetblue"}}>Healthy  eating</h4>
                    <div style={{color:"grey", fontSize:"14px",  textAlign:"left", marginBottom:"10px"}}>
                      To get the best in performance, endurance and recovery  out of your body, you will need to be concentrating on not only what you eat but when you eat. 
                      Follow these nutrition tips for any runners to improve your sppeed and stamina.  </div>
                    <div className="form-inline">
                      <div style={{backgroundColor:"#b0e0e6", width:"10%", color:"white", fontSize:"13px", paddingTop:"2px", paddingBottom:"2px"}}>Category</div>
                      <div style={{paddingLeft:"5px", fontSize:"13px", border:"1px solid #b0e0e6",paddingRight:"5px"}}>Running</div>
                    </div>
                  </div>
                  <div id="divGoto" type="button" style={{ background:"darkorange", textAlign:"center", margin:"auto", padding:"1%", color:"white"}}>Go to article</div>
                </div>

                <div  className="form-inline articleCard" style={{}}>
                  <div id="divTopics" style={{width:"80%",  paddingTop:"20px", paddingBottom:"20px", paddingLeft:"15px"}}>
                    <h4 style={{textAlign:"left", color:"cadetblue"}}>Stretch before or after Run ?</h4>
                    <div style={{color:"grey", fontSize:"14px",  textAlign:"left", marginBottom:"10px"}}>
                      Stretching regularly to maintain or improve your muscles flexibility and range of motion. And avoid getting sidelined is extremely important.</div>
                    <div className="form-inline">
                      <div style={{backgroundColor:"#b0e0e6", width:"10%", color:"white", fontSize:"13px", paddingTop:"2px", paddingBottom:"2px"}}>Category</div>
                      <div style={{paddingLeft:"5px", fontSize:"13px", border:"1px solid #b0e0e6",paddingRight:"5px"}}>Recovery</div>
                    </div>
                  </div>
                  <div id="divGoto" type="button" style={{ background:"darkorange", textAlign:"center", margin:"auto", padding:"1%", color:"white", fontSize:"14px"}}>Go to article</div>
                </div>
                
                <div id="cards">
          <CardDeck className='container' style={{ margin: "0 auto", padding: "30px" }}>
            <Card >
              <Card.Img variant="top" src={fruits}></Card.Img>
              <Card.Body>
                <Card.Title>Survive in the Summer</Card.Title>
                <Card.Text style={{ color: "grey", fontSize: "14px" }}>
                  Water is no doubt a miracle drink but if you don’t like the taste of water, drinking fruit juices is also a healthy way to stay hydrated.
                  However, drinking ready made juices will not serve the purpose as they cause more harm to your health.
                      </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.kent.co.in/blog/fruit-juices-to-beat-the-summer-heat/" style={{ fontSize: "14px" }}> Read full article</Card.Link>
              </Card.Footer>
            </Card>
            <Card >
              <Card.Img variant="top" src={covid}></Card.Img>
              <Card.Body>
                <Card.Title>How immune system works against covid</Card.Title>
                <Card.Text style={{ color: "grey", fontSize: "14px" }}>
                  There are different stages of this disease, and how you apply treatment at which phase of
                  the disease will carry a lot of weight in terms of patient outcome.
                      </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.google.com" style={{ fontSize: "14px" }}>Read full article</Card.Link>
              </Card.Footer>
            </Card>
            <Card >
              <Card.Img variant="top" src={Yoga}></Card.Img>
              <Card.Body>
                <Card.Title>Article 3</Card.Title>
                <Card.Text style={{ color: "grey", fontSize: "14px" }}>
                  Water is no doubt a miracle drink but if you don’t like the taste of water, drinking fruit juices is also a healthy way to stay hydrated.
                  However, drinking ready made juices will not serve the purpose as they cause more harm to your health.
                      </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Card.Link href="https://www.kent.co.in/blog/fruit-juices-to-beat-the-summer-heat/" style={{ fontSize: "14px" }}>Read full article</Card.Link>
              </Card.Footer>
            </Card>
          </CardDeck>
        </div>
            </div>
        )
    }
}