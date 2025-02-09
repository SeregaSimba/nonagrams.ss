const hintsTemplates = {
  easy: {
    patterns: [
      {
        name: "pattern 1",
        hints: {
          rows: [[1], [1], [3], ["1.1"], [5]],
          cols: [[5], ["1.1"], [3], [1], [1]],
        },
      },
      {
        name: "pattern 2",
        hints: {
          rows: [[1], ["1.1"], ["1.1"], [3], ["1.1"]],
          cols: [[1], ["1.2"], [1.1], ["1.2"], [1]],
        },
      },
      {
        name: "pattern 3",
        hints: {
          rows: [[1], [0], ["1.1"], ["1.1"], [1]],
          cols: [[1], ["1.1"], [1], ["1.1"], [1]],
        },
      },
      {
        name: "pattern 4",
        hints: {
          rows: [["1.1.1"], ["1.1"], ["1.1.1"], ["1.1"], ["1.1.1"]],
          cols: [["1.1.1"], ["1.1"], ["1.1.1"], ["1.1"], ["1.1.1"]],
        },
      },
      {
        name: "pattern 5",
        hints: {
          rows: [[1], [3], ["1.1.1"], ["1.1"], ["1.1"]],
          cols: [[1], ["1.2"], [3], ["1.2"], [1]],
        },
      },
    ],
  },
  medium: {
    patterns: [
      {
        name: "pattern 1",
        hints: {
          rows: [
            ["1.1"],
            ["2.2"],
            ["5"],
            ["2.1.2.1"],
            ["5.2"],
            ["3.1"],
            ["6.2"],
            ["1.5.1"],
            ["8"],
            ["2.4"],
          ],
          cols: [
            ["1.2"],
            ["4.1.1"],
            ["3.6"],
            ["7"],
            ["3.6"],
            ["4.4"],
            ["1.3"],
            ["2"],
            ["3.1"],
            ["2.3"],
          ],
        },
      },
      {
        name: "pattern 2",
        hints: {
          rows: [
            ["1.1"],
            ["1.1"],
            ["10"],
            ["1.2.2"],
            ["3.1"],
            ["1.1.1"],
            ["3.1"],
            ["4.2"],
            ["10"],
            ["1.1"],
          ],
          cols: [
            ["7"],
            ["1.1.4"],
            ["1.7"],
            ["3.2"],
            ["1.1"],
            ["1.1"],
            ["2.1"],
            ["1.1.1"],
            ["2.3"],
            ["7"],
          ],
        },
      },
      {
        name: "pattern 3",
        hints: {
          rows: [
            ["2"],
            ["4.1"],
            ["1.1"],
            ["2.1.2"],
            ["9"],
            ["9"],
            ["7.1"],
            ["6.2"],
            ["4.2"],
            ["5"],
          ],
          cols: [
            ["1"],
            ["1.4"],
            ["2.6"],
            ["2.7"],
            ["1.6"],
            ["8"],
            ["1.4.1"],
            ["4.2"],
            ["3.2"],
            ["4"],
          ],
        },
      },
      {
        name: "pattern 4",
        hints: {
          rows: [
            ["5"],
            ["2.4"],
            ["9"],
            ["4.4"],
            ["2.3"],
            ["4"],
            ["4.1"],
            ["10"],
            ["10"],
            ["8"],
          ],
          cols: [
            ["2.2"],
            ["4.3"],
            ["5.4"],
            ["1.2.4"],
            ["3.5"],
            ["10"],
            ["6.3"],
            ["5.3"],
            ["2.3"],
            ["4"],
          ],
        },
      },
      {
        name: "pattern 5",
        hints: {
          rows: [
            ["2.2"],
            ["2.2"],
            ["2.2"],
            ["2.2"],
            ["8"],
            ["10"],
            ["10"],
            ["2.4.2"],
            ["3.3"],
            ["6"],
          ],
          cols: [
            ["3"],
            ["5"],
            ["7.2"],
            ["10"],
            ["4.1"],
            ["4.1"],
            ["10"],
            ["7.2"],
            ["5"],
            ["3"],
          ],
        },
      },
    ],
  },
  hard: {
    patterns: [
      {
        name: "pattern 1",
        hints: {
          rows: [
            ["2.2.2.1"],
            ["2.1.1.2.1"],
            ["4.1.1.2.1"],
            ["5.5"],
            ["2.5"],
            ["7"],
            ["1.1.5"],
            ["11"],
            ["12"],
            ["13"],
            ["8.5"],
            ["1.3.5"],
            ["5.5"],
            ["3.6"],
            ["6"],
          ],
          cols: [
            ["2"],
            ["3.3"],
            ["2.2.2"],
            ["4.6"],
            ["5.7"],
            ["2.7"],
            ["3.1.4"],
            ["7"],
            ["2.4"],
            ["2.6.2"],
            ["12"],
            ["15"],
            ["4.10"],
            ["1.9"],
            ["4.8"],
          ],
        },
      },
      {
        name: "pattern 2",
        hints: {
          rows: [
            ["2.2"],
            ["7"],
            ["7"],
            ["7"],
            ["3.5.3"],
            ["5.3.5"],
            ["6.1.6"],
            ["6.6"],
            ["6.1.6"],
            ["5.1.5"],
            ["3.1.3"],
            ["2"],
            ["2"],
            ["4"],
            ["2"],
          ],
          cols: [
            ["2.2"],
            ["7"],
            ["7.2"],
            ["7.2"],
            ["3.5.1"],
            ["5.3.2"],
            ["6.1.2"],
            ["6.4"],
            ["6.1"],
            ["5.3"],
            ["3.5"],
            ["7"],
            ["7"],
            ["7"],
            ["2.2"],
          ],
        },
      },
      {
        name: "pattern 3",
        hints: {
          rows: [
            ["3"],
            ["5"],
            ["4.3"],
            ["7"],
            ["5"],
            ["3"],
            ["5"],
            ["1.8"],
            ["3.3.3"],
            ["7.3.2"],
            ["5.4.2"],
            ["8.2"],
            ["10"],
            ["2.3"],
            ["6"],
          ],
          cols: [
            ["3"],
            ["4"],
            ["5"],
            ["4"],
            ["5"],
            ["6"],
            ["3.2.1"],
            ["2.2.5"],
            ["4.2.6"],
            ["8.2.3"],
            ["8.2.1.1"],
            ["2.6.2.1"],
            ["4.6"],
            ["2.4"],
            ["1"],
          ],
        },
      },
      {
        name: "pattern 4",
        hints: {
          rows: [
            ["4"],
            ["1.4"],
            ["1.4"],
            ["1.1"],
            ["1.1"],
            ["1.1"],
            ["1.1"],
            ["1.1"],
            ["4.4"],
            ["6.6"],
            ["1.4.1.4"],
            ["6.6"],
            ["6.6"],
            ["4.4"],
            ["15"],
          ],
          cols: [
            ["1"],
            ["4.1"],
            ["2.4"],
            ["8"],
            ["2.7"],
            ["1.7"],
            ["1.4.1"],
            ["2.1"],
            ["1.2.4.1"],
            ["2.2.2.4"],
            ["3.8"],
            ["3.7"],
            ["2.7"],
            ["1.4.1"],
            ["1"],
          ],
        },
      },
      {
        name: "pattern 5",
        hints: {
          rows: [
            ["6"],
            ["4.1.1"],
            ["3.11"],
            ["9.2"],
            ["8.3.1"],
            ["12"],
            ["7"],
            ["4"],
            ["3.3.1"],
            ["2.2.3"],
            ["2.3.1"],
            ["2"],
            ["4.2.1"],
            ["6.2.1"],
            ["3.3.1.2"],
          ],
          cols: [
            ["1.1"],
            ["3.3.2"],
            ["9.3"],
            ["11"],
            ["6.3"],
            ["5.3"],
            ["6.1.2"],
            ["6.1.1"],
            ["6.1.1"],
            ["4.1.3"],
            ["1.1.2.3.1.1"],
            ["3.2.1.1"],
            ["1.1.2.1.1.3"],
            ["4.1.1.1"],
            ["3.1"],
          ],
        },
      },
    ],
  },
};

const correctSolutions = {
  easy: {
    "pattern 1": [
      [true, false, false, false, false],
      [true, false, false, false, false],
      [true, true, true, false, false],
      [true, false, true, false, false],
      [true, true, true, true, true],
    ],
    "pattern 2": [
      [false, false, true, false, false],
      [false, true, false, true, false],
      [true, false, false, false, true],
      [false, true, true, true, false],
      [false, true, false, true, false],
    ],
    "pattern 3": [
      [false, true, false, true, false],
      [false, false, false, false, false],
      [true, false, false, false, true],
      [false, true, false, true, false],
      [false, false, true, false, false],
    ],
    "pattern 4": [
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [true, false, true, false, true],
    ],
    "pattern 5": [
      [false, false, true, false, false],
      [false, true, true, true, false],
      [true, false, true, false, true],
      [false, true, false, true, false],
      [false, true, false, true, false],
    ],
  },
  medium: {
    "pattern 1": [
      [false, false, true, false, true, false, false, false, false, false],
      [false, true, true, false, true, true, false, false, false, false],
      [false, true, true, true, true, true, false, false, false, false],
      [true, true, false, true, false, true, true, false, false, true],
      [false, true, true, true, true, true, false, false, true, true],
      [false, false, true, true, true, false, false, false, true, false],
      [true, true, true, true, true, true, false, false, true, true],
      [true, false, true, true, true, true, true, false, false, true],
      [false, false, true, true, true, true, true, true, true, true],
      [false, true, true, false, true, true, true, true, false, false],
    ],
    "pattern 2": [
      [false, false, true, false, false, false, false, true, false, false],
      [false, false, false, true, false, false, true, false, false, false],
      [true, true, true, true, true, true, true, true, true, true],
      [true, false, true, true, false, false, false, false, true, true],
      [true, true, true, false, false, false, false, false, false, true],
      [true, false, true, false, false, false, false, false, false, true],
      [true, true, true, false, false, false, false, false, false, true],
      [true, true, true, true, false, false, false, false, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [false, true, false, false, false, false, false, false, true, false],
    ],
    "pattern 3": [
      [false, false, true, true, false, false, false, false, false, false],
      [false, true, true, true, true, false, true, false, false, false],
      [true, false, false, false, false, true, false, false, false, false],
      [false, false, true, true, false, true, false, true, true, false],
      [false, true, true, true, true, true, true, true, true, true],
      [false, true, true, true, true, true, true, true, true, true],
      [false, true, true, true, true, true, true, true, false, true],
      [false, true, true, true, true, true, true, false, true, true],
      [false, false, true, true, true, true, false, true, true, false],
      [false, false, false, true, true, true, true, true, false, false],
    ],
    "pattern 4": [
      [false, false, true, true, true, true, true, false, false, false],
      [false, true, true, false, true, true, true, true, false, false],
      [true, true, true, true, true, true, true, true, true, false],
      [true, true, true, true, false, true, true, true, true, false],
      [false, true, true, false, false, true, true, true, false, false],
      [false, false, false, false, true, true, true, true, false, true],
      [false, false, true, true, true, true, false, false, false, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [false, true, true, true, true, true, true, true, true, false],
    ],
    "pattern 5": [
      [false, false, true, true, false, false, true, true, false, false],
      [false, false, true, true, false, false, true, true, false, false],
      [false, false, true, true, false, false, true, true, false, false],
      [false, false, true, true, false, false, true, true, false, false],
      [false, true, true, true, true, true, true, true, true, false],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, true, true, true, true, true, true, true, true],
      [true, true, false, true, true, true, true, false, true, true],
      [false, true, true, true, false, false, true, true, true, false],
      [false, false, true, true, true, true, true, true, false, false],
    ],
  },
  hard: {
    "pattern 1": [
      [
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
      ],
      [
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
      ],
      [
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
      ],
      [
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
      ],
      [
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
      ],
      [
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
      ],
      [
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
    ],
    "pattern 2": [
      [
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
      ],
      [
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        false,
      ],
      [
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
      ],
      [
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        false,
      ],
      [
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
      ],
      [
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
      ],
    ],
    "pattern 3": [
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
      ],
      [
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
      ],
      [
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        true,
      ],
      [
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        true,
        false,
        true,
      ],
      [
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    ],
    "pattern 4": [
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        false,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
      ],
      [
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
      ],
      [
        true,
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
      ],
      [
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
      ],
      [
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        false,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
      ],
      [
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
      ],
      [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
      ],
    ],
    "pattern 5": [
      [
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
      ],
      [
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        true,
        true,
      ],
      [
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        true,
      ],
      [
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
      ],
      [
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        false,
      ],
      [
        false,
        false,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        true,
        true,
        true,
      ],
      [
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        true,
      ],
      [
        false,
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
      ],
      [
        true,
        true,
        true,
        true,
        true,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
      ],
      [
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        false,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
      ],
      [
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        false,
        true,
        false,
      ],
      [
        true,
        false,
        true,
        false,
        true,
        true,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        true,
        true,
      ],
      [
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
      ],
      [
        false,
        false,
        true,
        true,
        true,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        true,
        false,
      ],
    ],
  },
};

document.body.classList.add("body");

const header = document.createElement("header");
header.classList.add("header");
document.body.appendChild(header);

const sectionHeader = document.createElement("section");
sectionHeader.classList.add("sectionHeader");
header.appendChild(sectionHeader);

const label = document.createElement("div");
label.classList.add("label");
label.innerHTML = `
    <img src="nonograms/im-fine.svg" alt="label" class="imgLabel">`;
sectionHeader.appendChild(label);

const h1 = document.createElement("h1");
h1.classList.add("h1");
h1.innerText = "Welcome to the Nonagram game!";
sectionHeader.appendChild(h1);

const infoMenu = document.createElement("div");
infoMenu.style.display = "none";
infoMenu.classList.add("infoMenu");
document.body.appendChild(infoMenu);

const sectionSelect = document.createElement("section");
sectionSelect.classList.add("sectionSelect");
document.body.appendChild(sectionSelect);

const main = document.createElement("main");
main.classList.add("main");
document.body.appendChild(main);

const div0 = document.createElement("div");
div0.classList.add("div0");
main.prepend(div0);

const containerMain = document.createElement("section");
containerMain.classList.add("containerMain");
main.appendChild(containerMain);

const containerGame = document.createElement("section");
containerGame.classList.add("containerGame");
containerMain.appendChild(containerGame);

const containerLeftDiv = document.createElement("section");
containerLeftDiv.classList.add("containerLeftDiv");
containerMain.prepend(containerLeftDiv);

const containerTopDiv = document.createElement("section");
containerTopDiv.classList.add("containerTopDiv");
containerGame.prepend(containerTopDiv);

const sectionButton = document.createElement("section");
sectionButton.classList.add("sectionButton");
document.body.appendChild(sectionButton);

const infoScoreMenu = document.createElement("div");
infoScoreMenu.classList.add("infoScoreMenu");
main.appendChild(infoScoreMenu);

const createButton = (text) => {
  const button = document.createElement("button");
  button.innerText = text;
  button.classList.add(text);
  // button.style.display = "none";
  sectionButton.appendChild(button);
  return button;
};
const leftDivButton = (text) => {
  const button = document.createElement("button");
  button.classList.add(text);
  button.innerText = text;
  div0.appendChild(button);
  return button;
};
const resetButton = leftDivButton("Reset");
const saveButton = leftDivButton("Save");
const loadButton = leftDivButton("LoadGame");
const toggleThemeButton = createButton("ToggleTheme");
const randomGameButton = createButton("RandomGame");
const hintsForTheSolutionButton = createButton("Hints");
const resultSolutionButton = createButton("Result");
const questionableButton = document.createElement("button");
questionableButton.classList.add("questionableButton");
containerLeftDiv.appendChild(questionableButton);

const select = document.createElement("select");
select.classList.add("level-select");
select.innerHTML = `
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>`;
sectionSelect.appendChild(select);

const templateSelect = document.createElement("select");
templateSelect.classList.add("templateSelect");
hintsTemplates.easy.patterns.forEach((pattern) => {
  const option = document.createElement("option");
  option.value = pattern.name;
  option.innerText = pattern.name;
  templateSelect.appendChild(option);
});
sectionSelect.appendChild(templateSelect);

const tameDiv = document.createElement("div");
tameDiv.classList.add("tame");
tameDiv.innerText = "00:00";
sectionHeader.appendChild(tameDiv);

let grid;
let gameStart = false;
let gridSize = 5;
let hints = hintsTemplates.easy.patterns[0].hints;
let timer;
let seconds = 0;
let timerElement = tameDiv;

let clickReset = new Audio();
clickReset.src =
  "nonograms/voda-kaplya-odinochnyiy-korotkiy-myagkiy-blizkiy.mp3";
let clickHints = new Audio();
clickHints.src = "nonograms/chick.mp3";
let clickVictory = new Audio();
clickVictory.src = "nonograms/zvuk-pobedyi-vyiigryisha.mp3";
let clickLuz = new Audio();
clickLuz.src = "nonograms/zvukovoy-effekt-smeha-posle-pobedyi-41773.mp3";

const highScores = {
  easy: [],
  medium: [],
  hard: [],
};
const maxScores = 5;

let hintCount = 0;
const maxHints = 5;

const createGrid = () => {
  let selectedPattern;
  switch (select.value) {
    case "easy":
      gridSize = 5;
      selectedPattern = hintsTemplates.easy.patterns.find(
        (pattern) => pattern.name === templateSelect.value
      );
      break;
    case "medium":
      gridSize = 10;
      selectedPattern = hintsTemplates.medium.patterns.find(
        (pattern) => pattern.name === templateSelect.value
      );
      break;
    case "hard":
      gridSize = 15;
      selectedPattern = hintsTemplates.hard.patterns.find(
        (pattern) => pattern.name === templateSelect.value
      );
      break;
    default:
  }

  if (!selectedPattern) {
    console.error("error selectPattern");
    return;
  }

  hints = selectedPattern.hints;
  grid = Array.from(Array(gridSize), () => Array(gridSize).fill(false));

  const existingGridElement = document.getElementById("grid");
  if (existingGridElement) {
    containerGame.removeChild(existingGridElement);
  }

  const width = window.innerWidth;
  const gridElement = document.createElement("section");
  gridElement.id = "grid";
  if (width > 580) {
    gridElement.style.gridTemplateColumns = `repeat(${gridSize}, 40px)`;
  } else {
    gridElement.style.gridTemplateColumns = `repeat(${gridSize}, 20px)`;
  }

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const cell = document.createElement("button");
      cell.classList.add("cell", "cellDisable");
      cell.addEventListener("click", () => togglerCell(i, j));
      cell.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        markCell(i, j);
      });
      gridElement.appendChild(cell);
    }
  }
  containerGame.appendChild(gridElement);
  createHints();
};

const createHints = () => {
  const existingRowHints = containerLeftDiv.querySelector(".rows");
  if (existingRowHints) {
    containerLeftDiv.removeChild(existingRowHints);
  }
  const existingCollHints = containerTopDiv.querySelector(".coll");
  if (existingCollHints) {
    containerTopDiv.removeChild(existingCollHints);
  }

  const rowHintsContainer = document.createElement("div");
  rowHintsContainer.classList.add("rows");
  const colHintsContainer = document.createElement("div");
  colHintsContainer.classList.add("coll");

  hints.rows.forEach((rowHint, rowIndex) => {
    const hintElement = document.createElement("button");
    hintElement.classList.add("hint", "button");
    hintElement.innerText = rowHint.join("");

    hintElement.addEventListener("click", () => {
      for (let col = 0; col < gridSize; col++) {
        markCell(rowIndex, col);
      }
    });

    rowHintsContainer.appendChild(hintElement);
  });

  hints.cols.forEach((colsHint, colIndex) => {
    const hintElement = document.createElement("button");
    hintElement.classList.add("hint", "button");
    hintElement.innerText = colsHint.join("");

    hintElement.addEventListener("click", () => {
      for (let row = 0; row < gridSize; row++) {
        markCell(row, colIndex);
      }
    });

    colHintsContainer.appendChild(hintElement);
  });

  containerTopDiv.appendChild(colHintsContainer);

  containerLeftDiv.appendChild(rowHintsContainer);
};

const updateHintStyle = () => {
  const hintButton = document.querySelectorAll(".hint");
  hintButton.forEach((button) => {
    button.classList.toggle(
      "button-dark",
      document.body.classList.contains("dark-theme")
    );
  });
};

// const updateGridStyle = () => {
//   const hintButton = document.querySelectorAll(".cell");
//   hintButton.forEach((button) => {
//     button.classList.toggle(
//       "cell-dark",
//       document.body.classList.contains("dark-theme")
//     );
//   });
// };

const startTimer = () => {
  timer = setInterval(() => {
    seconds++;
    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    timerElement.innerText = `${minutes}:${secs}`;
  }, 1000);
};

const togglerCell = (row, cols) => {
  if (!gameStart) {
    gameStart = true;
    infoMenu.innerText = "Game Start";
    startTimer();

    infoMenu.style.display = "block";
    resetButton.style.display = "block";
    saveButton.style.display = "block";
    loadButton.style.display = "block";
  }

  const cell = document.querySelector(
    `#grid .cell:nth-child(${row * gridSize + cols + 1})`
  );
  if (!document.body.classList.contains("dark-theme")) {
    if (grid[row][cols]) {
      cell.classList.remove("black");
      grid[row][cols] = false;
      clickHints.play();
    } else {
      cell.classList.add("black");
      grid[row][cols] = true;
      clickHints.play();
    }
  }
  if (document.body.classList.contains("dark-theme")) {
    if (grid[row][cols]) {
      cell.classList.remove("white");
      grid[row][cols] = false;
      clickHints.play();
    } else {
      cell.classList.add("white");
      grid[row][cols] = true;
      clickHints.play();
    }
  }
  checkVictory();
};

const markCell = (row, cols) => {
  const cell = document.querySelector(
    `#grid .cell:nth-child(${row * gridSize + cols + 1})`
  );

  if (!cell.classList.contains("marked")) {
    cell.classList.add("marked");
    cell.innerText = "X";
  } else {
    cell.classList.remove("marked");
    cell.innerText = "";
  }

  clickHints.play();
};

const checkVictory = () => {
  const currentDifficulty = select.value;
  const selectTemplate = templateSelect.value;

  if (!correctSolutions) {
    console.error("Help My eeee", currentDifficulty);
    return;
  }
  const correctSolution = correctSolutions[currentDifficulty][selectTemplate];
  // debugger;
  if (!Array.isArray(correctSolution) || correctSolution.length === 0) {
    console.error("Help My", selectTemplate);
    return;
  }

  if (grid.length !== correctSolution.length) {
    console.error("help");
    return;
  }

  for (let i = 0; i < grid.length; i++) {
    if (grid[i].length !== correctSolution[i].length) {
      console.error("help my grid");
      return;
    }
  }

  const isVictory = grid.every((row, i) =>
    row.every((val, j) => val === correctSolution[i][j])
  );

  if (isVictory) {
    clearInterval(timer);
    clickVictory.play();
    infoMenu.innerText = `Great! You have solved the problem with the nonogram! Time: 0:${seconds} sec`;
    saveScore();
  }
};

const resetGame = () => {
  grid = Array.from(Array(gridSize), () => Array(gridSize).fill(false));
  document.querySelectorAll("#grid .cell").forEach((cell) => {
    cell.classList.remove("black", "marked");
    cell.innerText = "";
  });
  clearInterval(timer);
  seconds = 0;
  timerElement.innerText = "00:00";
  infoMenu.innerText = "";

  gameStart = false;
  clickReset.play();
};

const saveGame = () => {
  localStorage.setItem("nonoGame", JSON.stringify(grid));
  infoMenu.innerText = "The game is saved!";
  clickReset.play();
};

const showHighScores = () => {
  const createScore = document.createElement("ul");

  for (const difficulty in highScores) {
    createScore.appendChild(document.createElement("div")).innerText = `${
      difficulty.charAt(0).toUpperCase() + difficulty.slice(1)
    }:`;

    highScores[difficulty].forEach((score) => {
      const scoreItem = document.createElement("li");
      scoreItem.innerText = `${score.pattern}№ ${Math.floor(
        score.time / 60
      )}:${String(score.time % 60).padStart(2, "0")}`;
      createScore.appendChild(scoreItem);
    });
  }
  infoScoreMenu.innerHTML = "";
  infoScoreMenu.appendChild(createScore);
};

const initializeHighScore = () => {
  const scoredScores = JSON.parse(localStorage.getItem("highScore"));
  if (scoredScores) {
    for (const difficulty in scoredScores) {
      if (Array.isArray(scoredScores[difficulty])) {
        highScores[difficulty] = scoredScores[difficulty];
      }
    }
  }
};

const saveScore = () => {
  if (seconds > 0) {
    const newScore = {
      pattern: templateSelect.value,
      difficulty: select.value,
      time: seconds,
    };

    addScore(newScore.pattern, newScore.difficulty, newScore.time);
  }
};

const addScore = (pattern, difficulty, time) => {
  const score = {
    pattern,
    difficulty,
    time,
  };
  highScores[difficulty].push(score);

  highScores[difficulty].sort((a, b) => a.time - b.time);

  if (highScores[difficulty].length > maxScores) {
    highScores[difficulty].pop();
  }

  localStorage.setItem("highScore", JSON.stringify(highScores));
};

const loadGame = () => {
  const savedGrid = JSON.parse(localStorage.getItem("nonoGame"));
  if (savedGrid) {
    grid = savedGrid;
    document.querySelectorAll("#grid .cell").forEach((cell, index) => {
      const row = Math.floor(index / gridSize);
      const cols = index % gridSize;
      cell.classList.toggle("black", grid[row][cols]);
    });
    infoMenu.innerText = "The game is loaded!";
  } else {
    infoMenu.innerText = "no saves found (";
  }
  clickReset.play();
};

const toggleTheme = () => {
  document.body.classList.toggle("body");
  document.body.classList.toggle("dark-theme");
  h1.classList.toggle("h1");
  h1.classList.toggle("h1-black");
  infoMenu.classList.toggle("infoMenu");
  infoMenu.classList.toggle("infoMenu-dark");
  tameDiv.classList.toggle("tame");
  tameDiv.classList.toggle("tame-dark");
  questionableButton.classList.toggle("questionableButton");
  questionableButton.classList.toggle("questionableButton-dark");
  select.classList.toggle("level-select");
  select.classList.toggle("level-select-dark");
  templateSelect.classList.toggle("templateSelect");
  templateSelect.classList.toggle("templateSelect-dark");
  header.classList.toggle("header-dark");
  header.classList.toggle("header");
  infoScoreMenu.classList.toggle("infoScoreMenu");
  infoScoreMenu.classList.toggle("infoScoreMenu-dark");
  resetButton.classList.toggle("Reset-dark");
  saveButton.classList.toggle("Save-dark");
  loadButton.classList.toggle("LoadGame-dark");
  toggleThemeButton.classList.toggle("ToggleTheme-dark");
  randomGameButton.classList.toggle("RandomGame-dark");
  hintsForTheSolutionButton.classList.toggle("Hints-dark");
  resultSolutionButton.classList.toggle("Result-dark");

  updateHintStyle();
  updateGridStyle();
  clickReset.play();
};

randomGameButton.addEventListener("click", () => {
  const difficulties = ["easy", "medium", "hard"];
  select.value = difficulties[Math.floor(Math.random() * difficulties.length)];
  const patternOptions = hintsTemplates[select.value].patterns;
  templateSelect.value =
    patternOptions[Math.floor(Math.random() * patternOptions.length)].name;

  resetGame();
  createGrid();
});

resultSolutionButton.addEventListener("click", () => {
  const correctSolution = correctSolutions[select.value][templateSelect.value];
  correctSolution.forEach((row, i) => {
    row.forEach((cell, j) => {
      grid[i][j] = cell;
      const cellElement = document.querySelector(
        `#grid .cell:nth-child(${i * gridSize + j + 1})`
      );
      cellElement.classList.toggle("black", cell);
      setTimeout(() => {
        cellElement.classList.remove("black", cell);
      }, 3000);
    });
  });
  infoMenu.innerText = "a hint as a last resort )";
  clickLuz.play();
});

hintsForTheSolutionButton.addEventListener("click", () => {
  if (hintCount < maxHints) {
    hintCount++;
  }

  const remainingCells = [];
  const correctSolution = correctSolutions[select.value][templateSelect.value];

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (correctSolution[i][j]) {
        remainingCells.push({ row: i, col: j });
      }
    }
  }

  if (remainingCells.length === 0) {
    infoMenu.style.display = "block";
    infoMenu.innerText = "No hints are required :)";
    return;
  }

  const randomIndex = Math.floor(Math.random() * remainingCells.length);
  const randomCell = remainingCells[randomIndex];

  const cellsElement = document.querySelector(
    `#grid .cell:nth-child(${randomCell.row * gridSize + randomCell.col + 1})`
  );
  cellsElement.classList.add("black");
  setTimeout(() => {
    cellsElement.classList.remove("black");
  }, 2000);

  if (hintCount >= maxHints) {
    hintsForTheSolutionButton.disabled = true;
    infoMenu.style.display = "block";

    infoMenu.innerText = "The hints are over :(";
  }
  clickLuz.play();
});

toggleThemeButton.addEventListener("click", () => {
  toggleTheme();
});
resetButton.addEventListener("click", resetGame);
saveButton.addEventListener("click", saveGame);
loadButton.addEventListener("click", loadGame);
templateSelect.addEventListener("change", () => {
  // const currentDifficulty = select.value;
  // const avalid = Object.keys(correctSolution[currentDifficulty]);
  // const selectTemplate = templateSelect.value;
  // if (!avalid.includes(selectTemplate)) {
  //   console.error(`select ${selectTemplate} valid ${currentDifficulty}`);
  //   templateSelect.value = avalid[0];
  // } else {
  //   resetGame();
  //   createGrid();
  // }
  resetGame();
  createGrid();
});
select.addEventListener("change", () => {
  resetGame();
  createGrid();
});

window.addEventListener("resize", createGrid);

initializeHighScore();
showHighScores();
createGrid();
