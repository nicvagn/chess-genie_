const isPathClear = (fromRow, fromCol, toRow, toCol, board) => {
  const rowStep = Math.sign(toRow - fromRow)
  const colStep = Math.sign(toCol - fromCol)

  let row = fromRow + rowStep
  let col = fromCol + colStep

  while (row !== toRow || col !== toCol) {
    if (board[row][col] !== null) {
      return false // Path is blocked
    }
    row += rowStep
    col += colStep
  }
  return true // Path is clear
}

export const validateBishopMove = (fromRow, fromCol, toRow, toCol, board) => {
  if (Math.abs(toRow - fromRow) === Math.abs(toCol - fromCol)) {
    return isPathClear(fromRow, fromCol, toRow, toCol, board)
  }
}
