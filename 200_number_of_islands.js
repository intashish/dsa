//using dfs and sequential for traversing
// when ever we find 1 then increment the count and convert all the surrounding 1 to 0
// what we are doing is counting the first 1 only

const grid = [
	['1', '1', '1', '1', '0'],
	['1', '1', '0', '1', '0'],
	['1', '1', '0', '0', '0'],
	['0', '0', '0', '0', '1'],
];

var numIslands = function (grid) {
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		// console.log(i, grid.length, grid[0].length);
		for (let j = 0; j < grid[0].length; j++) {
			console.log(i, j);
			if (grid[i][j] == '1') {
				count++;
				grid = dfs(grid, i, j);
			}
		}
	}

	console.log(grid, count);
};

numIslands(grid);
function dfs(matrix, row, col) {
	const direction = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	];

	if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || matrix[row][col] == '0') return;

	matrix[row][col] = '0';

	for (let i = 0; i < direction.length; i++) {
		let newRow = direction[i][0] + row;
		let newCol = direction[i][1] + col;
		dfs(matrix, newRow, newCol);
	}
	return matrix;
}
