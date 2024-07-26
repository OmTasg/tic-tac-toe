let gameBoard = document.getElementById("game-board")
let count = 1
let hasStart = false
let gameTile = document.getElementsByClassName("gameTile")
const startGame = document.getElementById("start-game")
const currentPlayer = document.getElementById("player")
let elementID = ""
let tile 
let btnx1 = document.getElementById("btnx1")
let btnx2 = document.getElementById("btnx2")
let btnx3 = document.getElementById("btnx3")
let btnx4 = document.getElementById("btnx4")
let btnx5 = document.getElementById("btnx5")
let btnx6 = document.getElementById("btnx6")
let btnx7 = document.getElementById("btnx7")
let btnx8 = document.getElementById("btnx8")
let btnx9 = document.getElementById("btnx9")
let isPlayerTurn = true
const winnerText = document.getElementById("winner")
let gameEnd = false
const endBTN = document.getElementById("endnewbtn")




startGame.addEventListener("click", function (){
    start()
})

function start() {
    hasStart = true
    if (hasStart === true) {
        Array.from(gameTile).forEach(element => {
            element.addEventListener("click", function (event) {
                if(!playerTurn) return
                elementID = event.target.id
                tile = document.getElementById(elementID)              
                const isEmpty = tile.textContent.trim() === ""
                
                if(isEmpty && hasStart === true){
                    if(isPlayerTurn === true){
                        isPlayerTurn =  false
                        fillTile(tile)
                        checkTie()
                        checkRows()
                        checkColumns()
                        checkDiagonals()
                        setTimeout(function(){
                            aiPlay()
                            checkTie()
                            checkRows()
                            checkColumns()
                            checkDiagonals()
                            isPlayerTurn = true
                        },400)
                    }
                }
            })
        }) 
       
       
    }
    
}

function playerTurn(x){
    currentPlayer.textContent = `${x} turn`

}
function checkRows(){
    if((btnx1.innerText != "") && (btnx1.innerText === btnx2.innerText && btnx1.innerText === btnx3.innerText)){
        winnerText.innerText = (`${document.getElementById("btnx1").innerText} won`)
        hasStart = false
        endBTN.style.display = "block"
        currentPlayer.textContent = ""
        if(document.getElementById("btnx1").innerText === "X"){
            winnerText.style.color = "red"
        } else{
            winnerText.style.color = "green"
        }

    }
    
    if((btnx4.innerText != "") && (btnx4.innerText === btnx5.innerText && btnx4.innerText === btnx6.innerText)){
        winnerText.innerText = (`${document.getElementById("btnx4").innerText} won`)
        hasStart = false
        endBTN.style.display = "block"
        currentPlayer.textContent = ""
        if(document.getElementById("btnx4").innerText === "X"){
            winnerText.style.color = "red"
        } else{
            winnerText.style.color = "green"
        }

    }

    if((btnx7.innerText != "") && (btnx7.innerText === btnx8.innerText && btnx7.innerText === btnx9.innerText)){
        winnerText.innerText = (`${document.getElementById("btnx7").innerText} won`)
        hasStart = false
        endBTN.style.display = "block"
        currentPlayer.textContent = ""
        if(document.getElementById("btnx7").innerText === "X"){
            winnerText.style.color = "red"
        } else{
            winnerText.style.color = "green"
        }

    }
}   
function checkColumns(){
    if((btnx1.innerText != "") && (btnx1.innerText === btnx4.innerText && btnx1.innerText === btnx7.innerText)){
        winnerText.innerText = (`${document.getElementById("btnx1").innerText} won`)
        hasStart = false
        endBTN.style.display = "block"
        currentPlayer.textContent = ""
        if(document.getElementById("btnx1").innerText === "X"){
            winnerText.style.color = "red"
        } else{
            winnerText.style.color = "green"
        }

    }
    
    if((btnx2.innerText != "") && (btnx2.innerText === btnx5.innerText && btnx2.innerText === btnx8.innerText)){
        winnerText.innerText = (`${document.getElementById("btnx2").innerText} won`)
        hasStart = false
        endBTN.style.display = "block"
        currentPlayer.textContent = ""
        if(document.getElementById("btnx2").innerText === "X"){
            winnerText.style.color = "red"
        } else{
            winnerText.style.color = "green"
        }

    }

    if((btnx3.innerText != "") && (btnx3.innerText === btnx6.innerText && btnx3.innerText === btnx9.innerText)){
        winnerText.innerText = (`${document.getElementById("btnx3").innerText} won`)
        hasStart = false
        endBTN.style.display = "block"
        currentPlayer.textContent = ""
        if(document.getElementById("btnx3").innerText === "X"){
            winnerText.style.color = "red"
        } else{
            winnerText.style.color = "green"
        }

    }
}   
function checkDiagonals(){
    if((btnx1.innerText != "") && (btnx1.innerText === btnx5.innerText && btnx1.innerText === btnx9.innerText) 
        )
        {
        winnerText.innerText = (`${document.getElementById("btnx1").innerText} won`)
        hasStart = false
        endBTN.style.display = "block"
        currentPlayer.textContent = ""
        if(document.getElementById("btnx1").innerText === "X"){
            winnerText.style.color = "red"
        } else{
            winnerText.style.color = "green"
        }

    }
    
    if((btnx3.innerText != "") && (btnx3.innerText === btnx5.innerText && btnx3.innerText === btnx7.innerText)){
        winnerText.innerText = (`${document.getElementById("btnx3").innerText} won`)
        hasStart = false
        endBTN.style.display = "block"
        currentPlayer.textContent = ""
        if(document.getElementById("btnx3").innerText === "X"){
            winnerText.style.color = "red"
        } else{
            winnerText.style.color = "green"
        }

    }

}
function checkTie(){
    if((btnx1.innerText != "")&& (btnx2.innerText != "") && (btnx3.innerText != "") && (btnx4.innerText != "")
     && (btnx5.innerText != "") && (btnx6.innerText != "") && (btnx7.innerText != "")
     && (btnx8.innerText != "") && (btnx9.innerText != "")){
        winnerText.innerText = ("you tied")
        endBTN.style.display = "block"
        currentPlayer.textContent = ""
     }
}
function aiPlay(){
    if(hasStart === true){
        let emptyTiles = []

        for(i = 1; i < 10; i++){
            let aiTile = document.getElementById(`btnx${i}`)
            if(aiTile.innerText.trim() === ""){
                emptyTiles.push(aiTile)
            }
        }

            if(emptyTiles.length>0){
                let randomNum = Math.floor(Math.random()*emptyTiles.length)
                let chosenTile = emptyTiles[randomNum]
                fillTile(chosenTile)
                
            }else{
                console.log("game over")
            }

    }
}
function restart(){
    btnx1.textContent = ""
    btnx2.textContent = ""
    btnx3.textContent = ""
    btnx4.textContent = ""
    btnx5.textContent = ""
    btnx6.textContent = ""
    btnx7.textContent = ""
    btnx8.textContent = ""
    btnx9.textContent = ""
    hasStart = true
    isPlayerTurn = true
    currentPlayer.textContent = ""
    winnerText.textContent = ""
    count = 1
}
function fillTile(id) {
    if (count % 2 === 0) {
        id.textContent = "O"
        id.style.color = "green"
        count++
        const playerNameO = "X"
        playerTurn(playerNameO)
    }
    else {
        id.textContent = "X"
        id.style.color = "red"
        count++
        const playerNameX = "O"
        playerTurn(playerNameX)
    }
}







