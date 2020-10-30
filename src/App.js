import React, { useState } from "react"


// Icons
import Icon from "./components/icon"
// Icons End 

// Toastify Start
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Tostify End

// Bootstrap Start
import { Card, CardBody, Container, Button, Col, Row } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap End
import './App.css';
const itemArray = new Array(9).fill("empty")

const App = () => {

  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState("")
  const [isFull, setIsFull] = useState(false)

  const reloadGame = () => {
    setIsCross(false)
    setIsFull(false)
    setWinMessage("")
    itemArray.fill("empty", 0, 9)
  }
  const CheckWinner = () => {
    if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2]
    ) {
      setWinMessage(`${itemArray[0]} Wins`)
    }
    else if (
      itemArray[3] !== 'empty' &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} Wins`)
    }
    else if (
      itemArray[6] !== 'empty' &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} Wins`)
    }
    else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} Wins`)
    }
    else if (
      itemArray[1] !== 'empty' &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} Wins`)
    }
    else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} Wins`)
    }
    else if (
      itemArray[0] !== 'empty' &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} Wins`)
    }
    else if (
      itemArray[2] !== 'empty' &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} Wins`)
    }

  }

  const changeItem = itemNumber => {
    if (winMessage) {
      return toast(winMessage, { type: "success" })
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "Cross" : "Circle"

      setIsCross(!isCross)
    } else {
      return toast("Already Filled", { type: "error" })
    }

    CheckWinner();
    chekFull();
  }

  const chekFull = () => {
    if (itemArray.includes('empty')) {
      setIsFull(false)
    }
    else {
      setIsFull(true)
    }
  }
  return (
    <Container className="p-5">
      <ToastContainer position="bottom-center" />
      <Row>
        <Col md={6} className="offset-md-3">
          {winMessage ? (
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                {winMessage}
              </h1>
              <Button
                color="success"
                block
                onClick={reloadGame}>
                Reload game
                </Button>
            </div>
          ) : (
              <h1 className="text-warning text-center text-uppercase">
                {!isFull ? (
                  <h1>{isCross ? "Cross" : "Circle"} turns</h1>
                ):(
                  <div className="mb-2 mt-2">
                  <h1 className="text-danger text-uppercase text-center">
                    Match Tie
                  </h1>
                  <Button
                    color="success"
                    block
                    onClick={reloadGame}>
                    Reload game
                </Button>
                </div>
                )}
              </h1>
            )}
          {/* {isFull && !winMessage ?
            <div className="mb-2 mt-2">
              <h1 className="text-success text-uppercase text-center">
                Match Tie
              </h1>
              <Button
                color="success"
                block
                onClick={reloadGame}>
                Reload game
            </Button>
            </div> : ""} */}
          <div className="grid">
            {itemArray.map((item, index) => (
              <Card onClick={() => changeItem(index)} color="warning">
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
