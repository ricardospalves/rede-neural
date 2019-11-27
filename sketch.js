'use stric'

function setup() {
  createCanvas(500, 500)
  background(0)

  const neuralNetworkOptions = {
    inputs: 1,
    hiddenLayers: 3,
    outputs: 1
  }
  const neuralNetwork = new NeuralNetwork(neuralNetworkOptions)

  const array = [1, 2]

  neuralNetwork.feedforward(array)
}

function draw() {

}
