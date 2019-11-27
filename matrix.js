'use strict'

class Matrix {
  constructor({ rows, cols }) {
    this.rows = rows
    this.cols = cols
    this.data = []

    for(let i = 0; i < this.rows; i++) {
      const array = []

      for(let j = 0; j < this.cols; j++) {
        array.push(0)
      }

      this.data.push(array)
    }
  }

  static arrayToMatrix(array) {
    const matrix = new Matrix({
      rows: array.length,
      cols: 1
    })

    matrix.map((row, rowIndex) => {
      return array[rowIndex]
    })

    return matrix
  }

  print() {
    console.table(this.data)
  }

  randomize() {
    this.map(() => {
      const randomNumber = Math.random() * 2 - 1

      return randomNumber
    })
  }

  static map(matrix, func) {
    const newMatrix = new Matrix({
      rows: matrix.rows,
      cols: matrix.rows
    })

    newMatrix.data = newMatrix.data.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        return func(col, rowIndex, colIndex)
      })
    })

    return newMatrix
  }

  map(func) {
    this.data = this.data.map((row, rowIndex) => {
      return row.map((col, colIndex) => {
        return func(col, rowIndex, colIndex)
      })
    })

    return this
  }

  static sum(a, b) {
    const matrix = new Matrix(a)

    matrix.map((col, rowIndex, colIndex) => {
      return a.data[rowIndex][colIndex] + b.data[rowIndex][colIndex]
    })

    return matrix
  }

  static multiply(a, b) {
    const matrix = new Matrix({
      rows: a.rows,
      cols: b.cols
    })

    matrix.map((col, colIndex, rowIndex) => {
      let sum = 0

      for(let i = 0; i < a.cols; i++) {
        const element1 = a.data[colIndex][i]
        const element2 = b.data[i][rowIndex]

        sum += element1 * element2
      }

      return sum
    })

    return matrix
  }
}
