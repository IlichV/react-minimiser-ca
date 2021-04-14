//peut être ajouter une fonction qui dit quand arrêter la simulation.
const data = 
{
  "activeState": "1",

  "quiescenceState": "0",

  "specialState": "5",

  "outSpaceState": "6",

  "mutableStateList": ["0", "1", "2", "3", "4"],

  "stateList": ["0", "1", "2", "3", "4", "5", "6"],

  "stateColor": ['white', 'green', 'orange', 'cyan', 'lightgreen', 'blue', 'gray'],

  "separatorState": ",",

  "separatorTransition": " ",

  "dt": 1,

  "nCellLeft": 1,

  "nCellRight": 1,

  "getInitGConfig": "function(size){var gc0 = Array(size).fill(quiescenceState); gc0[0] = activeState; return gc0;}",

  "ruleStringArray": [
      "6,1,0 2",
      "1,0,6 2",
      "6,2,2 5",
      "2,2,6 5",
      "1,0,0 4",
      "0,0,6 0",
      "6,2,4 1",
      "2,4,0 3",
      "4,0,6 1",
      "6,1,3 1",
      "1,3,1 1",
      "3,1,6 1",
      "6,1,1 5",
      "1,1,1 5",
      "1,1,6 5",
      "0,0,0 0",
      "4,0,0 2",
      "1,3,2 4",
      "3,2,0 1",
      "2,0,6 4",
      "6,1,4 1",
      "1,4,1 3",
      "4,1,4 1",
      "1,4,6 3",
      "3,1,3 1",
      "1,3,6 1",
      "2,0,0 1",
      "4,1,1 2",
      "1,1,0 3",
      "3,2,3 1",
      "2,3,2 3",
      "3,2,6 4",
      "4,1,3 1",
      "1,3,4 3",
      "3,4,6 1",
      "2,3,4 0",
      "3,4,0 4",
      "4,1,0 2",
      "1,0,4 0",
      "0,4,1 1",
      "4,1,6 2",
      "2,0,1 4",
      "0,1,2 1",
      "1,2,6 4",
      "0,4,2 2",
      "4,2,0 2",
      "2,0,2 0",
      "0,2,2 2",
      "2,2,4 4",
      "2,4,6 3",
      "1,0,2 0",
      "0,2,4 1",
      "2,4,3 3",
      "4,3,6 0",
      "0,1,3 1",
      "1,3,0 4",
      "3,0,6 0",
      "1,4,0 3",
      "2,2,1 3",
      "2,1,0 3",
      "0,2,3 0",
      "2,3,3 3",
      "3,3,2 2",
      "0,0,3 0",
      "0,3,2 1",
      "3,2,4 4",
      "1,0,1 2",
      "0,1,4 1",
      "1,4,3 3",
      "3,2,1 4",
      "2,1,3 1",
      "3,4,1 1",
      "3,1,1 1",
      "1,1,3 1",
      "3,3,4 4",
      "0,3,4 0",
      "3,4,4 4",
      "4,4,1 3",
      "0,0,4 0",
      "0,4,3 1",
      "4,3,2 2",
      "4,0,1 1",
      "1,2,4 4",
      "1,1,4 1",
      "1,2,1 4",
      "4,4,2 2",
      "4,2,2 2",
      "4,0,2 0",
      "0,4,0 4",
      "4,3,0 0",
      "2,0,4 0",
      "3,0,0 0",
      "2,2,3 3",
      "2,4,1 3",
      "4,3,1 0",
      "3,1,4 1",
      "3,0,1 0",
      "4,4,3 3",
      "2,1,4 1",
      "3,3,0 1",
      "3,0,2 0",
      "0,3,1 3",
      "3,1,0 3",
      "1,0,3 0",
      "0,3,3 3",
      "2,3,0 1",
      "3,0,3 0",
      "0,0,1 0",
      "2,2,0 2",
      "2,2,2 2",
      "4,4,0 4",
      "4,4,4 4",
      "0,4,4 4",
      "3,0,4 0",
      "3,3,1 3",
      "3,3,3 3",
      "4,0,3 0",
      "4,0,4 0",
      "2,0,3 0"
    ],

  "localMappingFixeStringArray": {
    "0": [
      "1 1",
      "0 0",
      "6 6"
    ],
    "1": [
      "6,2,2 5",
      "2,2,6 5",
      "0,0,0 0",
      "6,1,1 5",
      "1,1,1 5",
      "1,1,6 5",
      "0,0,6 0",
      "6,6,1 6",
      "6,6,2 6",
      "6,6,0 6",
      "0,6,6 6",
      "1,6,6 6",
      "2,6,6 6",
      "3,6,6 6",
      "4,6,6 6",
    ]
  },

  "localMappingChangeStringArray": {
    "0": [],
    "1": [
      "6,1,0 2",
      "1,0,6 2",
      "1,0,0 4",
      "6,2,4 1",
      "2,4,0 3",
      "4,0,6 1",
      "6,1,3 1",
      "1,3,1 1",
      "3,1,6 1",
      "4,0,0 2",
      "1,3,2 4",
      "3,2,0 1",
      "2,0,6 4",
      "6,1,4 1",
      "1,4,1 3",
      "4,1,4 1",
      "1,4,6 3",
      "3,1,3 1",
      "1,3,6 1",
      "2,0,0 1",
      "4,1,1 2",
      "1,1,0 3",
      "3,2,3 1",
      "2,3,2 3",
      "3,2,6 4",
      "4,1,3 1",
      "1,3,4 3",
      "3,4,6 1",
      "2,3,4 0",
      "3,4,0 4",
      "4,1,0 2",
      "1,0,4 0",
      "0,4,1 1",
      "4,1,6 2",
      "2,0,1 4",
      "0,1,2 1",
      "1,2,6 4",
      "0,4,2 2",
      "4,2,0 2",
      "2,0,2 0",
      "0,2,2 2",
      "2,2,4 4",
      "2,4,6 3",
      "1,0,2 0",
      "0,2,4 1",
      "2,4,3 3",
      "4,3,6 0",
      "0,1,3 1",
      "1,3,0 4",
      "3,0,6 0",
      "1,4,0 3",
      "2,2,1 3",
      "2,1,0 3",
      "0,2,3 0",
      "2,3,3 3",
      "3,3,2 2",
      "0,0,3 0",
      "0,3,2 1",
      "3,2,4 4",
      "1,0,1 2",
      "0,1,4 1",
      "1,4,3 3",
      "3,2,1 4",
      "2,1,3 1",
      "3,4,1 1",
      "3,1,1 1",
      "1,1,3 1",
      "3,3,4 4",
      "0,3,4 0",
      "3,4,4 4",
      "4,4,1 3",
      "0,0,4 0",
      "0,4,3 1",
      "4,3,2 2",
      "4,0,1 1",
      "1,2,4 4",
      "1,1,4 1",
      "1,2,1 4",
      "4,4,2 2",
      "4,2,2 2",
      "4,0,2 0",
      "0,4,0 4",
      "4,3,0 0",
      "2,0,4 0",
      "3,0,0 0",
      "2,2,3 3",
      "2,4,1 3",
      "4,3,1 0",
      "3,1,4 1",
      "3,0,1 0",
      "4,4,3 3",
      "2,1,4 1",
      "3,3,0 1",
      "3,0,2 0",
      "0,3,1 3",
      "3,1,0 3",
      "1,0,3 0",
      "0,3,3 3",
      "2,3,0 1",
      "3,0,3 0",
      "0,0,1 0",
      "2,2,0 2",
      "2,2,2 2",
      "4,4,0 4",
      "4,4,4 4",
      "0,4,4 4",
      "3,0,4 0",
      "3,3,1 3",
      "3,3,3 3",
      "4,0,3 0",
      "4,0,4 0",
      "2,0,3 0"
    ]
  },

  "superRuleStringArray": {
    "1": [
      "6,1,0",
      "1,0,6",
      "1,0,0",
      "0,0,6",
      "0,0,0"
    ],
    "2": [
      "6,6,1,0,6 6,2,2",
      "6,1,0,6,6 2,2,6",
      "6,6,1,0,0 6,2,4",
      "6,1,0,0,6 2,4,0",
      "1,0,0,6,6 4,0,6",
      "6,6,2,4,0 6,1,3",
      "6,2,4,0,6 1,3,1",
      "2,4,0,6,6 3,1,6",
      "6,6,1,3,1 6,1,1",
      "6,1,3,1,6 1,1,1",
      "1,3,1,6,6 1,1,6",
      "6,1,0,0,0 2,4,0",
      "1,0,0,0,6 4,0,0",
      "0,0,0,6,6 0,0,6",
      "6,2,4,0,0 1,3,2",
      "2,4,0,0,6 3,2,0",
      "4,0,0,6,6 2,0,6",
      "6,6,1,3,2 6,1,4",
      "6,1,3,2,0 1,4,1",
      "1,3,2,0,6 4,1,4",
      "3,2,0,6,6 1,4,6",
      "6,6,1,4,1 6,1,3",
      "6,1,4,1,4 1,3,1",
      "1,4,1,4,6 3,1,3",
      "4,1,4,6,6 1,3,6",
      "6,1,3,1,3 1,1,1",
      "1,3,1,3,6 1,1,1",
      "3,1,3,6,6 1,1,6",
      "1,0,0,0,0 4,0,0",
      "0,0,0,0,6 0,0,0",
      "2,4,0,0,0 3,2,0",
      "4,0,0,0,6 2,0,0",
      "1,3,2,0,0 4,1,1",
      "3,2,0,0,6 1,1,0",
      "2,0,0,6,6 1,0,6",
      "6,1,4,1,1 1,3,2",
      "1,4,1,1,0 3,2,3",
      "4,1,1,0,6 2,3,2",
      "1,1,0,6,6 3,2,6",
      "6,1,3,2,3 1,4,1",
      "1,3,2,3,2 4,1,3",
      "3,2,3,2,6 1,3,4",
      "2,3,2,6,6 3,4,6",
      "6,1,4,1,3 1,3,1",
      "1,4,1,3,4 3,1,3",
      "4,1,3,4,6 1,3,1",
      "1,3,4,6,6 3,1,6",
      "1,3,1,3,1 1,1,1",
      "3,1,3,1,6 1,1,1",
      "0,0,0,0,0 0,0,0",
      "4,0,0,0,0 2,0,0",
      "3,2,0,0,0 1,1,0",
      "2,0,0,0,6 1,0,0",
      "4,1,1,0,0 2,3,4",
      "1,1,0,0,6 3,4,0",
      "1,3,2,3,4 4,1,0",
      "3,2,3,4,0 1,0,4",
      "2,3,4,0,6 0,4,1",
      "3,4,0,6,6 4,1,6",
      "6,1,4,1,0 1,3,2",
      "1,4,1,0,4 3,2,0",
      "4,1,0,4,1 2,0,1",
      "1,0,4,1,6 0,1,2",
      "0,4,1,6,6 1,2,6",
      "1,3,2,0,1 4,1,4",
      "3,2,0,1,2 1,4,1",
      "2,0,1,2,6 4,1,4",
      "0,1,2,6,6 1,4,6",
      "1,4,1,4,1 3,1,3",
      "4,1,4,1,4 1,3,1",
      "3,1,3,1,3 1,1,1",
      "2,0,0,0,0 1,0,0",
      "1,1,0,0,0 3,4,0",
      "2,3,4,0,0 0,4,2",
      "3,4,0,0,6 4,2,0",
      "4,1,0,4,2 2,0,2",
      "1,0,4,2,0 0,2,2",
      "0,4,2,0,6 2,2,4",
      "4,2,0,6,6 2,4,6",
      "1,3,2,0,2 4,1,0",
      "3,2,0,2,2 1,0,2",
      "2,0,2,2,4 0,2,4",
      "0,2,2,4,6 2,4,3",
      "2,2,4,6,6 4,3,6",
      "1,4,1,0,2 3,2,0",
      "4,1,0,2,4 2,0,1",
      "1,0,2,4,3 0,1,3",
      "0,2,4,3,6 1,3,0",
      "2,4,3,6,6 3,0,6",
      "3,2,0,1,3 1,4,1",
      "2,0,1,3,0 4,1,4",
      "0,1,3,0,6 1,4,0",
      "1,3,0,6,6 4,0,6",
      "1,4,1,4,0 3,1,3",
      "4,1,4,0,6 1,3,1",
      "1,4,0,6,6 3,1,6",
      "3,4,0,0,0 4,2,0",
      "0,4,2,0,0 2,2,1",
      "4,2,0,0,6 2,1,0",
      "2,0,2,2,1 0,2,3",
      "0,2,2,1,0 2,3,3",
      "2,2,1,0,6 3,3,2",
      "2,1,0,6,6 3,2,6",
      "4,1,0,2,3 2,0,0",
      "1,0,2,3,3 0,0,3",
      "0,2,3,3,2 0,3,2",
      "2,3,3,2,6 3,2,4",
      "3,3,2,6,6 2,4,6",
      "3,2,0,0,3 1,1,0",
      "2,0,0,3,2 1,0,1",
      "0,0,3,2,4 0,1,4",
      "0,3,2,4,6 1,4,3",
      "3,2,4,6,6 4,3,6",
      "4,1,1,0,1 2,3,2",
      "1,1,0,1,4 3,2,1",
      "1,0,1,4,3 2,1,3",
      "0,1,4,3,6 1,3,0",
      "1,4,3,6,6 3,0,6",
      "3,2,3,2,1 1,3,4",
      "2,3,2,1,3 3,4,1",
      "3,2,1,3,0 4,1,4",
      "2,1,3,0,6 1,4,0",
      "4,1,3,4,1 1,3,1",
      "1,3,4,1,4 3,1,1",
      "3,4,1,4,0 1,1,3",
      "3,1,3,1,1 1,1,1",
      "1,3,1,1,3 1,1,1",
      "3,1,1,3,1 1,1,1",
      "1,1,3,1,6 1,1,1",
      "4,2,0,0,0 2,1,0",
      "2,2,1,0,0 3,3,4",
      "2,1,0,0,6 3,4,0",
      "0,2,3,3,4 0,3,4",
      "2,3,3,4,0 3,4,4",
      "3,3,4,0,6 4,4,1",
      "2,0,0,3,4 1,0,0",
      "0,0,3,4,4 0,0,4",
      "0,3,4,4,1 0,4,3",
      "3,4,4,1,6 4,3,2",
      "4,4,1,6,6 3,2,6",
      "1,1,0,0,4 3,4,0",
      "1,0,0,4,3 4,0,1",
      "0,0,4,3,2 0,1,2",
      "0,4,3,2,6 1,2,4",
      "4,3,2,6,6 2,4,6",
      "2,3,4,0,1 0,4,1",
      "3,4,0,1,2 4,1,1",
      "4,0,1,2,4 1,1,4",
      "0,1,2,4,6 1,4,3",
      "1,2,4,6,6 4,3,6",
      "1,0,4,1,1 0,1,2",
      "0,4,1,1,4 1,2,1",
      "4,1,1,4,3 2,1,3",
      "1,1,4,3,6 1,3,0",
      "2,0,1,2,1 4,1,4",
      "0,1,2,1,3 1,4,1",
      "1,2,1,3,0 4,1,4",
      "2,1,0,0,0 3,4,0",
      "3,3,4,0,0 4,4,2",
      "0,3,4,4,2 0,4,2",
      "3,4,4,2,0 4,2,2",
      "4,4,2,0,6 2,2,4",
      "1,0,0,4,2 4,0,2",
      "0,0,4,2,2 0,2,2",
      "0,4,2,2,4 2,2,4",
      "4,2,2,4,6 2,4,3",
      "2,3,4,0,2 0,4,0",
      "3,4,0,2,2 4,0,2",
      "4,0,2,2,4 0,2,4",
      "0,2,2,4,3 2,4,3",
      "2,2,4,3,6 4,3,0",
      "4,1,0,4,0 2,0,4",
      "1,0,4,0,2 0,4,0",
      "0,4,0,2,4 4,0,1",
      "4,0,2,4,3 0,1,3",
      "0,2,4,3,0 1,3,0",
      "2,4,3,0,6 3,0,0",
      "4,3,0,6,6 0,0,6",
      "1,3,2,0,4 4,1,0",
      "3,2,0,4,0 1,0,4",
      "2,0,4,0,1 0,4,1",
      "0,4,0,1,3 4,1,1",
      "4,0,1,3,0 1,1,4",
      "0,1,3,0,0 1,4,0",
      "1,3,0,0,6 4,0,0",
      "3,0,0,6,6 0,0,6",
      "4,1,1,4,0 2,1,3",
      "1,1,4,0,0 1,3,2",
      "1,4,0,0,6 3,2,0",
      "1,2,1,3,2 4,1,4",
      "2,1,3,2,0 1,4,1",
      "4,4,2,0,0 2,2,1",
      "0,4,2,2,1 2,2,3",
      "4,2,2,1,0 2,3,3",
      "4,0,2,2,3 0,2,3",
      "0,2,2,3,3 2,3,3",
      "2,2,3,3,2 3,3,2",
      "0,4,0,2,3 4,0,0",
      "4,0,2,3,3 0,0,3",
      "2,3,3,2,4 3,2,4",
      "3,3,2,4,6 2,4,3",
      "2,0,4,0,0 0,4,2",
      "0,4,0,0,3 4,2,0",
      "4,0,0,3,2 2,0,1",
      "0,3,2,4,3 1,4,3",
      "3,2,4,3,6 4,3,0",
      "0,4,2,0,1 2,2,4",
      "4,2,0,1,4 2,4,1",
      "2,0,1,4,3 4,1,3",
      "0,1,4,3,0 1,3,0",
      "1,4,3,0,6 3,0,0",
      "0,2,2,4,1 2,4,3",
      "2,2,4,1,3 4,3,1",
      "2,4,1,3,0 3,1,4",
      "4,1,3,0,0 1,4,0",
      "0,2,4,3,1 1,3,0",
      "2,4,3,1,4 3,0,1",
      "4,3,1,4,0 0,1,3",
      "3,1,4,0,0 1,3,2",
      "0,1,3,0,1 1,4,0",
      "1,3,0,1,3 4,0,1",
      "3,0,1,3,2 0,1,4",
      "0,1,3,2,0 1,4,1",
      "4,1,4,0,1 1,3,1",
      "1,4,0,1,4 3,1,1",
      "4,0,1,4,1 1,1,3",
      "0,1,4,1,4 1,3,1",
      "1,1,3,1,3 1,1,1",
      "2,2,3,3,4 3,3,4",
      "2,3,3,4,4 3,4,4",
      "3,3,4,4,1 4,4,3",
      "4,0,0,3,4 2,0,0",
      "0,3,4,4,3 0,4,3",
      "3,4,4,3,2 4,3,2",
      "4,4,3,2,6 3,2,4",
      "4,2,0,0,4 2,1,0",
      "2,0,0,4,3 1,0,1",
      "0,4,3,2,4 1,2,4",
      "4,3,2,4,6 2,4,3",
      "2,2,1,0,1 3,3,2",
      "2,1,0,1,2 3,2,1",
      "1,0,1,2,4 2,1,4",
      "0,1,2,4,3 1,4,3",
      "1,2,4,3,6 4,3,0",
      "2,3,3,2,1 3,2,4",
      "3,3,2,1,4 2,4,1",
      "3,2,1,4,3 4,1,3",
      "2,1,4,3,0 1,3,0",
      "0,3,2,4,1 1,4,3",
      "3,2,4,1,3 4,3,1",
      "0,1,4,3,1 1,3,0",
      "1,4,3,1,4 3,0,1",
      "2,1,3,0,1 1,4,0",
      "1,1,3,1,1 1,1,1",
      "3,3,4,4,2 4,4,2",
      "3,4,4,2,2 4,2,2",
      "4,4,2,2,4 2,2,4",
      "2,0,0,4,2 1,0,2",
      "4,2,2,4,3 2,4,3",
      "2,2,1,0,2 3,3,0",
      "2,1,0,2,2 3,0,2",
      "1,0,2,2,4 0,2,4",
      "2,2,4,3,0 4,3,0",
      "0,2,3,3,0 0,3,1",
      "2,3,3,0,2 3,1,0",
      "3,3,0,2,4 1,0,1",
      "3,0,2,4,3 0,1,3",
      "2,4,3,0,0 3,0,0",
      "4,3,0,0,6 0,0,0",
      "2,0,0,3,1 1,0,3",
      "0,0,3,1,0 0,3,3",
      "0,3,1,0,1 3,3,2",
      "3,1,0,1,3 3,2,1",
      "1,0,1,3,0 2,1,4",
      "1,3,0,0,0 4,0,0",
      "3,0,0,0,6 0,0,0",
      "4,1,1,0,3 2,3,0",
      "1,1,0,3,3 3,0,3",
      "1,0,3,3,2 0,3,2",
      "0,3,3,2,1 3,2,4",
      "3,2,1,4,0 4,1,3",
      "2,1,4,0,0 1,3,2",
      "1,4,0,0,0 3,2,0",
      "1,3,2,3,0 4,1,1",
      "3,2,3,0,3 1,1,0",
      "2,3,0,3,2 1,0,1",
      "3,0,3,2,4 0,1,4",
      "2,4,1,3,2 3,1,4",
      "4,1,3,2,0 1,4,1",
      "4,3,1,4,1 0,1,3",
      "3,1,4,1,1 1,3,2",
      "0,1,3,2,3 1,4,1",
      "0,1,4,1,3 1,3,1",
      "4,4,2,2,1 2,2,3",
      "0,4,2,2,3 2,2,3",
      "4,2,2,3,3 2,3,3",
      "1,0,2,2,3 0,2,3",
      "3,3,0,2,3 1,0,0",
      "3,0,2,3,3 0,0,3",
      "3,3,2,4,3 2,4,3",
      "0,3,1,0,0 3,3,4",
      "3,1,0,0,3 3,4,0",
      "1,0,0,3,2 4,0,1",
      "3,2,4,3,0 4,3,0",
      "1,0,3,3,4 0,3,4",
      "0,3,3,4,0 3,4,4",
      "3,3,4,0,1 4,4,1",
      "3,4,0,1,4 4,1,1",
      "4,0,1,4,3 1,1,3",
      "1,4,3,0,0 3,0,0",
      "2,3,0,3,4 1,0,0",
      "3,0,3,4,4 0,0,4",
      "3,4,4,1,1 4,3,2",
      "4,4,1,1,3 3,2,1",
      "4,1,1,3,0 2,1,4",
      "1,1,3,0,0 1,4,0",
      "0,4,3,2,1 1,2,4",
      "4,3,2,1,4 2,4,1",
      "0,1,2,4,1 1,4,3",
      "1,2,4,1,3 4,3,1",
      "1,1,4,3,1 1,3,0",
      "3,3,4,4,3 4,4,3",
      "1,0,0,3,4 4,0,0",
      "4,4,3,2,4 3,2,4",
      "3,4,0,0,4 4,2,0",
      "4,0,0,4,3 2,0,1",
      "4,3,2,4,3 2,4,3",
      "4,4,2,0,1 2,2,4",
      "4,2,0,1,2 2,4,1",
      "2,0,1,2,4 4,1,4",
      "1,2,4,3,0 4,3,0",
      "4,2,2,4,1 2,4,3",
      "2,2,4,1,4 4,3,1",
      "2,4,1,4,3 3,1,3",
      "4,1,4,3,0 1,3,0",
      "2,2,4,3,1 4,3,0",
      "2,4,3,1,3 3,0,1",
      "4,3,1,3,0 0,1,4",
      "3,1,3,0,0 1,4,0",
      "2,4,3,0,1 3,0,0",
      "4,3,0,1,4 0,0,1",
      "3,0,1,4,0 0,1,3",
      "0,1,4,0,0 1,3,2",
      "1,3,0,0,1 4,0,0",
      "3,0,0,1,3 0,0,1",
      "0,0,1,3,2 0,1,4",
      "1,4,0,0,1 3,2,0",
      "4,0,0,1,4 2,0,1",
      "0,0,1,4,1 0,1,3",
      "0,1,4,1,1 1,3,2",
      "2,0,1,3,2 4,1,4",
      "4,1,4,1,3 1,3,1",
      "4,0,0,4,2 2,0,2",
      "4,4,2,0,2 2,2,0",
      "4,2,0,2,2 2,0,2",
      "0,4,2,2,0 2,2,2",
      "4,2,2,0,2 2,2,0",
      "2,2,0,2,4 2,0,1",
      "2,0,2,4,3 0,1,3",
      "4,3,0,0,0 0,0,0",
      "4,0,2,2,2 0,2,2",
      "0,2,2,2,0 2,2,2",
      "2,2,2,0,1 2,2,4",
      "2,2,0,1,3 2,4,1",
      "3,0,0,0,0 0,0,0",
      "0,4,0,2,2 4,0,2",
      "0,2,2,2,4 2,2,4",
      "2,2,2,4,1 2,4,3",
      "2,4,1,4,0 3,1,3",
      "4,1,4,0,0 1,3,2",
      "2,0,4,0,2 0,4,0",
      "4,3,1,3,2 0,1,4",
      "3,1,3,2,0 1,4,1",
      "3,0,1,4,1 0,1,3",
      "0,1,4,1,0 1,3,2",
      "4,4,2,2,3 2,2,3",
      "2,0,2,2,3 0,2,3",
      "2,2,0,2,3 2,0,0",
      "2,0,2,3,3 0,0,3",
      "2,2,2,0,0 2,2,1",
      "2,2,0,0,3 2,1,0",
      "0,2,2,2,1 2,2,3",
      "2,2,2,1,0 2,3,3",
      "2,1,0,1,4 3,2,1",
      "3,3,2,1,3 2,4,1",
      "2,1,3,0,0 1,4,0",
      "3,3,2,4,1 2,4,3",
      "3,2,4,1,4 4,3,1",
      "3,2,4,3,1 4,3,0",
      "1,4,3,0,1 3,0,0",
      "2,1,0,0,4 3,4,0",
      "4,4,1,1,4 3,2,1",
      "1,1,4,3,0 1,3,0",
      "4,4,3,2,1 3,2,4",
      "4,3,2,1,3 2,4,1",
      "4,3,2,4,1 2,4,3",
      "1,2,4,3,1 4,3,0",
      "3,3,4,0,2 4,4,0",
      "3,3,4,4,0 4,4,4",
      "3,4,4,0,2 4,4,0",
      "4,4,0,2,4 4,0,1",
      "0,3,4,4,4 0,4,4",
      "3,4,4,4,0 4,4,4",
      "4,4,4,0,1 4,4,1",
      "4,4,0,1,3 4,1,1",
      "2,0,0,4,4 1,0,4",
      "0,0,4,4,4 0,4,4",
      "0,4,4,4,1 4,4,3",
      "4,4,4,1,1 4,3,2",
      "2,2,1,0,4 3,3,0",
      "2,1,0,4,4 3,0,4",
      "1,0,4,4,3 0,4,3",
      "0,4,4,3,2 4,3,2",
      "3,2,1,3,2 4,1,4",
      "2,3,3,0,4 3,1,0",
      "3,3,0,4,3 1,0,1",
      "3,0,4,3,2 0,1,2",
      "2,4,1,4,1 3,1,3",
      "4,1,4,1,1 1,3,2",
      "3,1,0,1,2 3,2,1",
      "3,1,3,2,3 1,4,1",
      "4,4,0,2,3 4,0,0",
      "4,4,4,0,0 4,4,2",
      "4,4,0,0,3 4,2,0",
      "0,4,4,4,2 4,4,2",
      "4,4,4,2,0 4,2,2",
      "1,0,4,4,2 0,4,2",
      "0,4,4,2,2 4,2,2",
      "3,3,0,4,2 1,0,2",
      "3,0,4,2,2 0,2,2",
      "0,3,1,0,2 3,3,0",
      "3,1,0,2,2 3,0,2",
      "4,3,0,1,3 0,0,1",
      "1,0,3,3,0 0,3,1",
      "0,3,3,0,2 3,1,0",
      "4,3,0,0,1 0,0,0",
      "3,0,0,1,4 0,0,1",
      "2,3,0,3,1 1,0,3",
      "3,0,3,1,0 0,3,3",
      "3,0,0,0,1 0,0,0",
      "0,0,0,1,3 0,0,1",
      "4,0,0,0,1 2,0,0",
      "0,0,0,1,4 0,0,1",
      "3,2,0,0,1 1,1,0",
      "2,0,0,1,3 1,0,1",
      "1,0,1,4,1 2,1,3",
      "3,4,1,4,1 1,1,3",
      "2,2,3,3,0 3,3,1",
      "2,2,3,3,1 3,3,3",
      "2,3,3,1,0 3,3,3",
      "3,3,1,0,1 3,3,2",
      "0,2,3,3,3 0,3,3",
      "2,3,3,3,3 3,3,3",
      "3,3,3,3,2 3,3,2",
      "3,3,3,2,1 3,2,4",
      "1,0,0,3,3 4,0,3",
      "0,0,3,3,3 0,3,3",
      "0,3,3,3,2 3,3,2",
      "3,3,3,2,4 3,2,4",
      "3,3,4,0,3 4,4,0",
      "3,4,0,3,3 4,0,3",
      "4,0,3,3,2 0,3,2",
      "0,3,3,2,4 3,2,4",
      "0,3,4,4,0 0,4,4",
      "3,4,4,0,3 4,4,0",
      "4,4,0,3,2 4,0,1",
      "4,0,3,2,4 0,1,4",
      "1,0,0,4,4 4,0,4",
      "0,0,4,4,0 0,4,4",
      "0,4,4,0,1 4,4,1",
      "4,4,0,1,4 4,1,1",
      "2,3,4,0,4 0,4,0",
      "3,4,0,4,4 4,0,4",
      "4,0,4,4,1 0,4,3",
      "0,4,4,1,1 4,3,2",
      "1,0,4,0,4 0,4,0",
      "0,4,0,4,3 4,0,1",
      "4,0,4,3,2 0,1,2",
      "0,4,0,1,2 4,1,1",
      "2,1,3,2,3 1,4,1",
      "3,3,1,0,0 3,3,4",
      "3,3,3,3,4 3,3,4",
      "3,3,3,4,0 3,4,4",
      "0,3,3,3,4 3,3,4",
      "3,3,3,4,4 3,4,4",
      "4,0,3,3,4 0,3,4",
      "0,3,3,4,4 3,4,4",
      "4,4,0,3,4 4,0,0",
      "4,0,3,4,4 0,0,4",
      "0,4,4,0,0 4,4,2",
      "4,4,0,0,4 4,2,0",
      "4,0,4,4,2 0,4,2",
      "0,4,4,2,0 4,2,2",
      "0,4,0,4,2 4,0,2",
      "4,0,4,2,2 0,2,2",
      "0,0,0,0,1 0,0,0",
      "2,0,0,0,1 1,0,0",
      "1,1,0,0,1 3,4,0",
      "1,0,0,1,4 4,0,1",
      "3,4,0,1,3 4,1,1",
      "4,0,1,3,2 1,1,4",
      "4,1,1,4,1 2,1,3",
      "1,1,4,1,1 1,3,2",
      "4,4,2,2,0 2,2,2",
      "4,4,2,2,2 2,2,2",
      "4,2,2,2,0 2,2,2",
      "0,4,2,2,2 2,2,2",
      "4,2,2,2,2 2,2,2",
      "2,2,2,2,4 2,2,4",
      "2,0,2,2,2 0,2,2",
      "0,2,2,2,2 2,2,2",
      "2,2,2,4,3 2,4,3",
      "2,2,0,2,2 2,0,2",
      "2,2,2,0,2 2,2,0",
      "1,1,4,1,0 1,3,2",
      "2,2,2,2,1 2,2,3",
      "2,2,2,2,3 2,2,3",
      "2,2,2,3,3 2,3,3",
      "0,2,2,2,3 2,2,3",
      "3,3,4,4,4 4,4,4",
      "3,4,4,4,4 4,4,4",
      "4,4,4,4,1 4,4,3",
      "4,4,4,4,3 4,4,3",
      "4,4,4,3,2 4,3,2",
      "0,4,4,4,3 4,4,3",
      "3,3,4,0,4 4,4,0",
      "4,0,4,4,3 0,4,3",
      "3,4,4,0,4 4,4,0",
      "4,4,0,4,3 4,0,1",
      "4,4,0,1,2 4,1,1",
      "4,4,4,4,2 4,4,2",
      "4,4,4,2,2 4,2,2",
      "4,4,0,4,2 4,0,2",
      "4,4,4,0,2 4,4,0",
      "4,4,0,2,2 4,0,2",
      "0,4,4,4,0 4,4,4",
      "1,0,4,4,4 0,4,4",
      "3,3,0,4,4 1,0,4",
      "3,0,4,4,4 0,4,4",
      "0,3,1,0,4 3,3,0",
      "3,1,0,4,4 3,0,4",
      "0,3,3,0,4 3,1,0",
      "1,0,0,0,1 4,0,0",
      "3,4,0,0,1 4,2,0",
      "4,0,0,1,3 2,0,1",
      "2,0,1,4,1 4,1,3",
      "3,1,4,1,0 1,3,2",
      "2,2,3,3,3 3,3,3",
      "4,0,0,3,3 2,0,3",
      "4,4,2,0,3 2,2,0",
      "4,2,0,3,3 2,0,3",
      "2,0,3,3,2 0,3,2",
      "4,2,2,0,3 2,2,0",
      "2,2,0,3,2 2,0,1",
      "2,0,3,2,4 0,1,4",
      "2,2,0,1,4 2,4,1",
      "1,0,2,2,2 0,2,2",
      "3,3,0,2,2 1,0,2",
      "3,0,2,2,2 0,2,2",
      "2,0,3,3,4 0,3,4",
      "2,2,0,3,4 2,0,0",
      "2,0,3,4,4 0,0,4",
      "2,2,0,0,4 2,1,0",
      "4,2,0,0,1 2,1,0",
      "2,0,0,1,4 1,0,1",
      "2,1,0,1,3 3,2,1",
      "1,0,1,3,2 2,1,4",
      "3,2,1,4,1 4,1,3",
      "2,1,4,1,0 1,3,2",
      "3,3,1,0,2 3,3,0",
      "3,3,3,3,0 3,3,1",
      "3,3,3,0,2 3,1,0",
      "0,3,3,3,1 3,3,3",
      "3,3,3,1,0 3,3,3",
      "4,0,3,3,3 0,3,3",
      "0,3,3,3,3 3,3,3",
      "4,4,0,3,3 4,0,3",
      "0,4,4,0,3 4,4,0",
      "4,0,4,4,0 0,4,4",
      "0,4,0,4,4 4,0,4",
      "2,0,4,0,4 0,4,0",
      "4,0,0,4,4 2,0,4",
      "4,4,2,0,4 2,2,0",
      "4,2,0,4,4 2,0,4",
      "2,0,4,4,3 0,4,3",
      "4,2,2,0,4 2,2,0",
      "2,2,0,4,3 2,0,1",
      "2,0,4,3,2 0,1,2",
      "2,2,0,1,2 2,4,1",
      "2,1,4,1,1 1,3,2",
      "4,1,3,2,3 1,4,1",
      "2,0,4,4,2 0,4,2",
      "2,2,0,4,2 2,0,2",
      "2,0,4,2,2 0,2,2",
      "2,2,2,2,0 2,2,2",
      "2,2,2,2,2 2,2,2",
      "2,1,0,0,1 3,4,0",
      "1,0,0,1,3 4,0,1",
      "4,1,1,3,2 2,1,4",
      "1,1,3,2,0 1,4,1",
      "2,0,0,3,3 1,0,3",
      "2,2,1,0,3 3,3,0",
      "2,1,0,3,3 3,0,3",
      "2,3,3,0,3 3,1,0",
      "3,3,0,3,2 1,0,1",
      "3,1,0,1,4 3,2,1",
      "0,2,3,3,1 0,3,3",
      "0,4,2,0,3 2,2,0",
      "2,0,2,2,0 0,2,2",
      "0,2,2,0,3 2,2,0",
      "1,1,3,2,3 1,4,1",
      "4,1,0,2,2 2,0,2",
      "1,0,2,2,0 0,2,2",
      "0,2,2,0,1 2,2,4",
      "3,3,0,3,4 1,0,0",
      "3,1,0,0,4 3,4,0",
      "0,2,2,0,0 2,2,1",
      "4,2,0,1,3 2,4,1",
      "4,4,4,4,0 4,4,4",
      "4,4,4,4,4 4,4,4",
      "0,4,4,4,4 4,4,4",
      "4,0,4,4,4 0,4,4",
      "4,4,0,4,4 4,0,4",
      "4,4,4,0,4 4,4,0",
      "4,1,4,1,0 1,3,2",
      "3,3,3,3,1 3,3,3",
      "3,3,3,3,3 3,3,3",
      "2,0,3,3,3 0,3,3",
      "2,2,0,3,3 2,0,3",
      "2,2,2,0,3 2,2,0",
      "2,0,4,4,4 0,4,4",
      "2,2,0,4,4 2,0,4",
      "2,2,2,0,4 2,2,0",
      "1,0,3,3,3 0,3,3",
      "3,3,0,3,3 1,0,3",
      "3,0,3,3,3 0,3,3",
      "3,3,1,0,3 3,3,0",
      "3,1,0,3,3 3,0,3",
      "3,3,3,0,3 3,1,0",
      "0,3,3,3,0 3,3,1",
      "2,0,3,3,1 0,3,3",
      "0,3,3,1,0 3,3,3",
      "3,3,1,0,4 3,3,0",
      "3,3,3,0,4 3,1,0",
      "4,4,4,0,3 4,4,0"
    ]
  }
}

export default data;