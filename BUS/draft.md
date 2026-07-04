* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 42, 51, 0.692);
  overflow-y: hidden;
  /* overflow-x: hidden; */
}

main {
  width: 90vw;
  height: 90vh;
  background-image: url("Images/background.png");
}

section {
  width: 90vw;
  height:90vh;
  border: 2px solid yellow;
  overflow: hidden;
}

.car_part {
  width: 90vw;
  height: 90vh;
  border: 5px solid rgb(141, 55, 141);
}

/* .night {
  height: 100%;
  width: 100%;
  background: url("Images/background.png");
  background-size: cover;
  position: relative;
  box-shadow: 1px 2px 60px rgba(0, 0, 0, 4);
  overflow-x: hidden;
} */

.surface {
  height: 140px;
  width: 5000%;
  background: url(Images/land.png);
  display: block;
  position: absolute;
  bottom: 0%;
  left: 0%;
  background-repeat: repeat-x;
}

.car {
  position: absolute;
  bottom: 8%;
  left: calc(50% - 155px);
}

.suspension {
  animation: suspension 1s linear infinite;
}

.button {
  position: absolute;
  bottom: 10%;
  width: 90vw;
  display: flex;
  padding: 0 50px;
  align-items: center;
  justify-content: space-between;
}

.btn {
  width: 150px;
  height: 40px;
  background-color: rgb(90, 37, 90);
  border-radius: 15px;
  border: 5px solid rgb(141, 55, 141);
  font-weight: 700;
  font-size: 20px;
  text-shadow: #1e3c72;
  transition: 0.3s;
}

.btn:hover {
  background-color: rgb(90, 37, 90, 0.3);
  border: 5px solid rgb(231, 181, 231);
  cursor: pointer;
  color: rgb(255, 255, 255);
}

/*Animation*/

@keyframes moveRight {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(-2950px);
  }
}

@keyframes moveLeft {
  0% {
    transform: translateX(-2950px);
  }
  100% {
    transform: translateX(0px);
  }
}

@keyframes suspension {
  100% {
    transform: translateY(3px);
  }
  90% {
    transform: translateY(-2px);
  }
  80% {
    transform: translate(2px);
  }
  70% {
    transform: translateY(-1px);
  }
  60% {
    transform: translate(1px);
  }
  50% {
    transform: translateY(0px);
  }
  40% {
    transform: translate(1px);
  }
  30% {
    transform: translateY(-1px);
  }
  20% {
    transform: translate(2px);
  }
  10% {
    transform: translateY(-2px);
  }
  0% {
    transform: translateY(3px);
  }
}
.moveRight {
  animation: moveRight 3s linear;
}

.moveLeft {
  animation: moveLeft 3s linear;
}

.suspension {
  animation: suspension 3s linear;
}

.profile {
  color: white;
  text-shadow: 1px 1px 2px black;
  width: 85vw;
  height: 70vh;
  position: absolute;
  top: calc(50% - 42vh);
  left: calc(50% - 42.5vw);
  display: flex;
}

.intro_text {
  width: 60%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 1%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.intro_profile {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid black;
    img {
      width: 100%;
      height: auto;
      filter: opacity(0.7);
    }
  }
}
.intro_profile > div {
  /* animation: flip_profile 4s infinite ease-out; */
}

@keyframes flip_profile {
  0% {
    transform: rotateY(0deg) scale(1);
  }
  20% {
    transform: rotateY(0deg) scale(1.5);
  }
  80% {
    transform: rotateY(1440deg) scale(1.5);
  }
  100% {
    transform: rotateY(1440deg) scale(1);
  }
}

.about {
  color: white;
  text-shadow: 1px 1px 2px black;
  width: 85vw;
  height: 70vh;
  border: 2px solid rgb(0, 255, 42);
  position: absolute;
  left: 100%;
}
