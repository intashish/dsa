const matrix = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];

const traverseDfs = function (matrix) {
	const seen = new Array(matrix.length).fill(0).map(() => new Array(matrix[0].length).fill(false));
	const values = [];

	dfs(matrix, 0, 0, seen, values);
	console.log(seen, values);
};
traverseDfs(matrix);

function dfs(matrix, row, col, seen, values) {
	const direction = [
		[-1, 0], //up
		[0, 1], //right
		[1, 0], //down
		[0, -1], //left
	];
	if (row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || seen[row][col]) return;
	if (matrix[row][col]) {
		values.push(matrix[row][col]);
		seen[row][col] = true;
	}
	for (let i = 0; i < direction.length; i++) {
		let newRow = direction[i][0] + row;
		let newCol = direction[i][1] + col;
		console.log(newRow, newCol);
		dfs(matrix, newRow, newCol, seen, values);
	}
}
