let initialState = [
  [2, 0, 3], [1, 8, 4], [7, 6, 5]
]
let targetState = [
  [1, 2, 3], [8, 0, 4], [7, 6, 5]
]
let targetStateFlat = targetState.flat()
let finish = false
let pathNum = -1
let path = []

let statusLine = [] // 状态队列

statusLine.push(initialState) // 将第一个状态添加到队列

function BFS(statusLine) {
  // 查看状态队列中有没有和目标队列一样的
  for (let prop of statusLine) {
    let propFlat = prop.flat()
    let found = true
    for (let el1 of propFlat) {
      for (let el2 of targetStateFlat) {
        if (el1 !== el2) {
          found = false
          break
        }
      }
    }
    pathNum++
    if (found) {
      finish = true
    }
  }

  if (!finish) {
    console.log(`第${pathNum}次走后没有目标状态`)
    // 获得要变化的状态的0的位置
    let arr = statusLine[0] // 获取要变化的状态
    statusLine = [] // 获取后将其从状态数列中删除
    let zeroI, zeroJ
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (arr[i][j] === 0) {
          zeroI = i
          zeroJ = j
        }
      }
    }
    path.push()
    // 根据要变化的状态和0的位置生成新的状态，并将新的状态添加到队列，第一次不用判重
    if (zeroI - 1 >= 0) {
      let newStatus = JSON.parse(JSON.stringify(arr))
      newStatus[zeroI][zeroJ] = newStatus[zeroI - 1][zeroJ]
      newStatus[zeroI - 1][zeroJ] = 0
      statusLine.push(newStatus)
    }
    if (zeroI + 1 <= 2) {
      let newStatus = JSON.parse(JSON.stringify(arr))
      newStatus[zeroI][zeroJ] = newStatus[zeroI + 1][zeroJ]
      newStatus[zeroI + 1][zeroJ] = 0
      statusLine.push(newStatus)
    }
    if (zeroJ - 1 >= 0) {
      let newStatus = JSON.parse(JSON.stringify(arr))
      newStatus[zeroI][zeroJ] = newStatus[zeroI][zeroJ - 1]
      newStatus[zeroI][zeroJ - 1] = 0
      statusLine.push(newStatus)
    }
    if (zeroI + 1 <= 2) {
      let newStatus = JSON.parse(JSON.stringify(arr))
      newStatus[zeroI][zeroJ] = newStatus[zeroI][zeroJ + 1]
      newStatus[zeroI][zeroJ + 1] = 0
      statusLine.push(newStatus)
    }
    console.log(statusLine)
  }
}



