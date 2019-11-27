'use stric'

function sigmoid(x) {
  return 1 / (1 + Math.exp(-x))
}

class NeuralNetwork {
  constructor({inputs, hiddenLayers, outputs}) {
    this.inputs = inputs
    this.hiddenLayers = hiddenLayers
    this.outputs = outputs

    // bias -> input to hidden layer
    this.hiddenLayersBias = new Matrix({
      rows: this.hiddenLayers,
      cols: 1
    })

    this.hiddenLayersBias.randomize()

    // bias -> hidden layer to output
    this.outputBias = new Matrix({
      rows: this.outputs,
      cols: 1
    })

    this.outputBias.randomize()

    this.hiddenLayersWeights = new Matrix({
      rows: this.hiddenLayers,
      cols: this.inputs
    })

    this.hiddenLayersWeights.randomize()

    this.outputsWeights = new Matrix({
      rows: this.outputs,
      cols: this.hiddenLayers
    })

    this.outputsWeights.randomize()
  }

  feedforward(array) {
    // Input => Hidden
    const inputLayer = Matrix.arrayToMatrix(array)
    let hiddenLayer = Matrix.multiply(this.hiddenLayersWeights, inputLayer)

    hiddenLayer = Matrix.sum(hiddenLayer, this.hiddenLayersBias)

    hiddenLayer.map(sigmoid)

    // Hidden => Output
    let outputLayer = Matrix.multiply(this.outputsWeights, hiddenLayer)

    outputLayer = Matrix.sum(outputLayer, this.outputBias)

    outputLayer.map(sigmoid)
  }
}
