const QUESTION_BANK = [
  {
    "id": 1,
    "topic": "AI Foundations",
    "difficulty": "Easy",
    "type": "mcq",
    "q": "Which statement best describes Artificial Intelligence?",
    "options": [
      "Systems performing tasks that require intelligence",
      "Any program with a database",
      "Only arithmetic programs",
      "A storage device"
    ],
    "answer": 0,
    "explain": "AI includes reasoning, learning, perception and decision-making.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 2,
    "topic": "AI Foundations",
    "difficulty": "Easy",
    "type": "truefalse",
    "q": "Every AI system must learn from data before it can perform a task.",
    "options": [
      "True",
      "False"
    ],
    "answer": 1,
    "explain": "Rule-based systems and classical search can operate without learning from data.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 3,
    "topic": "Turing Test",
    "difficulty": "Easy",
    "type": "mcq",
    "q": "The Turing Test evaluates whether a machine can…",
    "options": [
      "converse indistinguishably from a human",
      "solve every math problem",
      "run faster than a human",
      "store more data than a human"
    ],
    "answer": 0,
    "explain": "The test concerns whether a human evaluator can distinguish machine conversation from human conversation.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 4,
    "topic": "Intelligent Agents",
    "difficulty": "Easy",
    "type": "mcq",
    "q": "An agent perceives through ____ and acts through ____.",
    "options": [
      "sensors; actuators",
      "actuators; sensors",
      "goals; utilities",
      "states; rules"
    ],
    "answer": 0,
    "explain": "Sensors gather percepts; actuators execute actions.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 5,
    "topic": "Rational Agents",
    "difficulty": "Medium",
    "type": "assertion_reason",
    "q": "Assertion (A): A rational agent always achieves the best possible outcome. Reason (R): A rational agent selects an action expected to maximize its performance measure using available information.",
    "options": [
      "A and R are true, and R correctly explains A",
      "A and R are true, but R does not explain A",
      "A is true, but R is false",
      "A is false, but R is true"
    ],
    "answer": 3,
    "explain": "Rationality concerns selecting the best expected action with available information; it does not guarantee the best actual outcome.",
    "hint": "Judge the truth of the assertion and reason separately, then decide whether the reason explains the assertion."
  },
  {
    "id": 6,
    "topic": "Agents and Environments",
    "difficulty": "Easy",
    "type": "scenario",
    "q": "A robot vacuum detects a wall with a proximity sensor and turns using motors. Which mapping is correct?",
    "options": [
      "Sensor detects; motors act as actuators",
      "Motor detects; sensor actuates",
      "Battery is the sensor",
      "Wall is the agent"
    ],
    "answer": 0,
    "explain": "The proximity sensor perceives the wall; motors execute the turn.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 7,
    "topic": "Rational Agents",
    "difficulty": "Medium",
    "type": "fill",
    "q": "PEAS stands for Performance measure, Environment, Actuators and ____.",
    "options": [
      "Sensors",
      "sensor"
    ],
    "answer": 0,
    "explain": "The S in PEAS stands for Sensors, which provide percepts from the environment.",
    "hint": "Recall the standard terminology used to describe this AI concept."
  },
  {
    "id": 8,
    "topic": "Nature of Environments",
    "difficulty": "Medium",
    "type": "truefalse",
    "q": "In a fully observable environment, sensors provide access to the complete relevant state.",
    "options": [
      "True",
      "False"
    ],
    "answer": 0,
    "explain": "Full observability means the complete relevant state is available through perception.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 9,
    "topic": "Good Behaviour",
    "difficulty": "Medium",
    "type": "assertion_reason",
    "q": "Assertion (A): A performance measure helps define good behaviour for an agent. Reason (R): It specifies the criteria used to evaluate the agent's outcomes.",
    "options": [
      "A and R are true, and R correctly explains A",
      "A and R are true, but R does not explain A",
      "A is true, but R is false",
      "A is false, but R is true"
    ],
    "answer": 0,
    "explain": "The criteria in the performance measure are precisely how the agent's behaviour and outcomes are evaluated.",
    "hint": "Judge the truth of the assertion and reason separately, then decide whether the reason explains the assertion."
  },
  {
    "id": 10,
    "topic": "Nature of Environments",
    "difficulty": "Medium",
    "type": "scenario",
    "q": "A self-driving car acts while pedestrians and cars move unpredictably. Which property applies?",
    "options": [
      "Dynamic",
      "Static",
      "Single-state",
      "Always fully known"
    ],
    "answer": 0,
    "explain": "A dynamic environment can change while the agent is deciding or acting.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 11,
    "topic": "Nature of Environments",
    "difficulty": "Medium",
    "type": "mcq",
    "q": "Chess is commonly described as…",
    "options": [
      "fully observable, deterministic and sequential",
      "partially observable, stochastic and episodic",
      "continuous and single-state",
      "a static single-agent task"
    ],
    "answer": 0,
    "explain": "The board is visible, moves have defined outcomes, and each move affects later decisions.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 12,
    "topic": "Problem Spaces",
    "difficulty": "Easy",
    "type": "fill",
    "q": "The state from which a search algorithm begins is called the ____ state.",
    "options": [
      "initial",
      "start"
    ],
    "answer": 0,
    "explain": "The initial state is the starting configuration for the search.",
    "hint": "Recall the standard terminology used to describe this AI concept."
  },
  {
    "id": 13,
    "topic": "Problem Spaces",
    "difficulty": "Easy",
    "type": "problem",
    "q": "A search tree has root S, children A and B, and A has children C and D. If BFS explores left to right, what is the visit order for these nodes?",
    "options": [
      "S, A, B, C, D",
      "S, A, C, D, B",
      "S, B, A, D, C",
      "S, C, A, B, D"
    ],
    "answer": 0,
    "explain": "BFS visits nodes level by level: S first, then A and B, then C and D.",
    "hint": "Work through the states level by level for BFS/shortest-path tasks, or apply the stated evaluation rule for A*."
  },
  {
    "id": 14,
    "topic": "Problem Spaces",
    "difficulty": "Easy",
    "type": "scenario",
    "q": "A route planner starts in Bengaluru and seeks Chennai. Bengaluru is the…",
    "options": [
      "initial state",
      "goal test",
      "heuristic value",
      "path cost"
    ],
    "answer": 0,
    "explain": "Bengaluru is where the route begins.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 15,
    "topic": "State Space Search",
    "difficulty": "Medium",
    "type": "mcq",
    "q": "A state space is…",
    "options": [
      "the set of states reachable under available actions",
      "only the goal state",
      "only heuristic estimates",
      "physical computer memory"
    ],
    "answer": 0,
    "explain": "A state space represents possible configurations and transitions.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 16,
    "topic": "Production Systems",
    "difficulty": "Easy",
    "type": "matching",
    "q": "Match the production-system term to its role.",
    "options": [
      "IF part → condition; THEN part → action; working memory → current facts",
      "IF part → action; THEN part → condition; working memory → final score",
      "IF part → current facts; THEN part → goal test; working memory → heuristic only",
      "IF part → actuator; THEN part → sensor; working memory → search frontier"
    ],
    "answer": 0,
    "explain": "A production rule tests a condition, specifies an action/conclusion, and working memory stores current facts.",
    "hint": "Match each term to its role first, then compare the complete set of pairings."
  },
  {
    "id": 17,
    "topic": "Production Systems",
    "difficulty": "Medium",
    "type": "mcq",
    "q": "Which component stores current facts in a production system?",
    "options": [
      "Working memory",
      "Display theme",
      "Actuator motor",
      "Goal animation"
    ],
    "answer": 0,
    "explain": "Working memory holds facts or state information used to match rules.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 18,
    "topic": "Problem Characteristics",
    "difficulty": "Medium",
    "type": "mcq",
    "q": "A decomposable problem can be…",
    "options": [
      "split into smaller, relatively independent subproblems",
      "solved only by brute force",
      "guaranteed unsolvable",
      "solved only with equal-cost actions"
    ],
    "answer": 0,
    "explain": "Decomposition separates a problem into smaller parts.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 19,
    "topic": "Problem Characteristics",
    "difficulty": "Medium",
    "type": "scenario",
    "q": "A medical decision-support system must explain recommendations and use current data. What matters most?",
    "options": [
      "Relevant information and defensible reasoning",
      "Maximum search depth",
      "Ignoring performance measures",
      "Random actions"
    ],
    "answer": 0,
    "explain": "The system needs relevant data and reasoning appropriate to its requirements.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 20,
    "topic": "Issues in Search Design",
    "difficulty": "Hard",
    "type": "mcq",
    "q": "Which is a central search-program design issue?",
    "options": [
      "Avoiding repeated states and managing time and memory",
      "Choosing interface colours only",
      "Using one heuristic for every problem",
      "Removing the goal test"
    ],
    "answer": 0,
    "explain": "Repeated states and resource use strongly affect search efficiency.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 21,
    "topic": "Breadth-First Search",
    "difficulty": "Easy",
    "type": "mcq",
    "q": "BFS expands nodes in which order?",
    "options": [
      "Shallowest depth first",
      "Deepest depth first",
      "Lowest heuristic only",
      "Random order"
    ],
    "answer": 0,
    "explain": "BFS explores the frontier level by level.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 22,
    "topic": "Depth-First Search",
    "difficulty": "Easy",
    "type": "problem",
    "q": "A graph has edges S–A, S–B, A–C, and B–D. DFS starts at S and explores A before B, then continues left/deepest first. Which order is visited?",
    "options": [
      "S, A, C, B, D",
      "S, A, B, C, D",
      "S, B, D, A, C",
      "S, C, A, D, B"
    ],
    "answer": 0,
    "explain": "DFS follows the A branch to C before backtracking to explore B and D.",
    "hint": "Work through the states level by level for BFS/shortest-path tasks, or apply the stated evaluation rule for A*."
  },
  {
    "id": 23,
    "topic": "BFS vs DFS",
    "difficulty": "Medium",
    "type": "mcq",
    "q": "For an unweighted graph, which finds a path with the fewest edges?",
    "options": [
      "BFS",
      "DFS",
      "Greedy Best-First in every case",
      "Hill climbing"
    ],
    "answer": 0,
    "explain": "BFS finds a shallowest goal, which means fewest edges when edges have equal cost.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 24,
    "topic": "Depth-First Search",
    "difficulty": "Medium",
    "type": "assertion_reason",
    "q": "Assertion (A): Depth-First Search always finds a shortest path in an unweighted graph. Reason (R): DFS explores the deepest available branch before backtracking.",
    "options": [
      "A and R are true, and R correctly explains A",
      "A and R are true, but R does not explain A",
      "A is true, but R is false",
      "A is false, but R is true"
    ],
    "answer": 3,
    "explain": "DFS explores deeply first, so it may reach a longer path before a shorter one; the assertion is false while the reason is true.",
    "hint": "Judge the truth of the assertion and reason separately, then decide whether the reason explains the assertion."
  },
  {
    "id": 25,
    "topic": "Iterative Deepening",
    "difficulty": "Medium",
    "type": "mcq",
    "q": "Iterative deepening combines DFS's space advantage with which BFS property?",
    "options": [
      "Finds a shallowest solution for equal step costs",
      "Uses a heuristic at every node",
      "Always expands the most expensive path",
      "Never repeats work"
    ],
    "answer": 0,
    "explain": "Depth-limited DFS is repeated with gradually increasing limits.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 26,
    "topic": "BFS",
    "difficulty": "Medium",
    "type": "problem",
    "q": "An unweighted graph has S connected to A and B; A connects to G; B connects to C; C connects to G. Which path does BFS find first when it explores A before B?",
    "options": [
      "S → A → G",
      "S → B → C → G",
      "S → A → B → G",
      "S → C → G"
    ],
    "answer": 0,
    "explain": "BFS explores paths by increasing edge count. The path through A reaches G in two edges.",
    "hint": "Work through the states level by level for BFS/shortest-path tasks, or apply the stated evaluation rule for A*."
  },
  {
    "id": 27,
    "topic": "Search Complexity",
    "difficulty": "Hard",
    "type": "mcq",
    "q": "Why can BFS use substantial memory?",
    "options": [
      "It stores a potentially wide frontier",
      "It stores only one node",
      "It generates no successors",
      "It must calculate h(n) for every node"
    ],
    "answer": 0,
    "explain": "The frontier can grow exponentially with depth.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 28,
    "topic": "DFS",
    "difficulty": "Medium",
    "type": "scenario",
    "q": "A maze is deep, memory is limited, and any solution is acceptable. Which may be practical with cycle checks?",
    "options": [
      "DFS",
      "BFS",
      "Uniform-cost search only",
      "Level-order storage"
    ],
    "answer": 0,
    "explain": "DFS typically uses less frontier memory, though it can follow unproductive branches.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 29,
    "topic": "Search Completeness",
    "difficulty": "Hard",
    "type": "mcq",
    "q": "What helps graph search avoid repeatedly exploring the same states?",
    "options": [
      "An explored or visited set",
      "A larger font",
      "Removing transitions",
      "Changing the goal"
    ],
    "answer": 0,
    "explain": "A visited set records states already explored.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 30,
    "topic": "State Space Search",
    "difficulty": "Medium",
    "type": "matching",
    "q": "Match each search algorithm with its typical data/selection strategy.",
    "options": [
      "BFS → FIFO queue; DFS → stack/LIFO; Greedy Best-First → smallest h(n)",
      "BFS → stack/LIFO; DFS → FIFO queue; Greedy Best-First → largest g(n)",
      "BFS → smallest h(n); DFS → random choice; Greedy Best-First → FIFO queue",
      "BFS → deepest node; DFS → smallest h(n); Greedy Best-First → stack"
    ],
    "answer": 0,
    "explain": "BFS uses FIFO order, DFS uses LIFO/recursion, and Greedy Best-First selects a node with the smallest heuristic estimate.",
    "hint": "Match each term to its role first, then compare the complete set of pairings."
  },
  {
    "id": 31,
    "topic": "Heuristic Search",
    "difficulty": "Easy",
    "type": "fill",
    "q": "In informed search, h(n) is a ____ estimate of the remaining cost to a goal.",
    "options": [
      "heuristic",
      "heuristic function"
    ],
    "answer": 0,
    "explain": "The heuristic function estimates the remaining cost or distance to a goal.",
    "hint": "Recall the standard terminology used to describe this AI concept."
  },
  {
    "id": 32,
    "topic": "Best-First Search",
    "difficulty": "Medium",
    "type": "mcq",
    "q": "Greedy Best-First Search usually chooses the node with…",
    "options": [
      "smallest h(n)",
      "largest g(n)",
      "greatest depth always",
      "oldest insertion time always"
    ],
    "answer": 0,
    "explain": "Greedy Best-First prioritizes the estimated remaining cost.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 33,
    "topic": "A* Search",
    "difficulty": "Medium",
    "type": "mcq",
    "q": "A* evaluates a node using…",
    "options": [
      "f(n) = g(n) + h(n)",
      "f(n) = g(n) − h(n)",
      "h(n) only in every case",
      "depth × branching factor"
    ],
    "answer": 0,
    "explain": "A* combines path cost so far and estimated remaining cost.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 34,
    "topic": "Heuristic Search",
    "difficulty": "Hard",
    "type": "assertion_reason",
    "q": "Assertion (A): An admissible heuristic does not overestimate the optimal remaining cost. Reason (R): A* uses the path cost so far and the heuristic estimate to calculate f(n).",
    "options": [
      "A and R are true, and R correctly explains A",
      "A and R are true, but R does not explain A",
      "A is true, but R is false",
      "A is false, but R is true"
    ],
    "answer": 1,
    "explain": "Both statements are true, but the A* evaluation formula does not explain the definition of heuristic admissibility.",
    "hint": "Judge the truth of the assertion and reason separately, then decide whether the reason explains the assertion."
  },
  {
    "id": 35,
    "topic": "Hill Climbing",
    "difficulty": "Easy",
    "type": "mcq",
    "q": "Hill climbing chooses a neighbour mainly based on…",
    "options": [
      "whether its evaluation improves",
      "FIFO queue order",
      "the complete BFS path",
      "random choice only"
    ],
    "answer": 0,
    "explain": "Hill climbing moves according to local evaluation.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 36,
    "topic": "Hill Climbing",
    "difficulty": "Medium",
    "type": "scenario",
    "q": "A timetable optimizer stops improving at a local optimum. Which technique can help?",
    "options": [
      "Random-restart hill climbing",
      "Always stop at the first state",
      "Delete the evaluation function",
      "Use an unchanging action"
    ],
    "answer": 0,
    "explain": "Random restarts explore different starting regions.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 37,
    "topic": "Hill Climbing",
    "difficulty": "Medium",
    "type": "mcq",
    "q": "A plateau in hill climbing is a region where…",
    "options": [
      "neighbouring states have the same evaluation",
      "every move reaches the global optimum",
      "states cannot be represented",
      "the heuristic is always admissible"
    ],
    "answer": 0,
    "explain": "Equal nearby evaluations provide no clear improving direction.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 38,
    "topic": "Heuristic Search",
    "difficulty": "Hard",
    "type": "mcq",
    "q": "Which statement about Greedy Best-First Search is accurate?",
    "options": [
      "It can be misled and is not generally optimal",
      "It is always optimal",
      "It never uses heuristics",
      "It always expands lowest g(n)"
    ],
    "answer": 0,
    "explain": "It uses h(n) alone and ignores the path cost already incurred.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 39,
    "topic": "Heuristic Search",
    "difficulty": "Medium",
    "type": "scenario",
    "q": "A delivery planner uses straight-line distance to estimate remaining road distance. This is a…",
    "options": [
      "heuristic",
      "goal test",
      "production rule",
      "visited set"
    ],
    "answer": 0,
    "explain": "Straight-line distance can guide search as an estimate of remaining distance.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 40,
    "topic": "Search Algorithms",
    "difficulty": "Hard",
    "type": "mcq",
    "q": "With non-negative varying step costs, which finds a least-cost path under standard conditions?",
    "options": [
      "Uniform-Cost Search",
      "DFS",
      "Greedy Best-First",
      "Hill climbing"
    ],
    "answer": 0,
    "explain": "Uniform-Cost Search expands the path with the smallest accumulated cost.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 41,
    "topic": "CSP",
    "difficulty": "Easy",
    "type": "fill",
    "q": "A CSP is defined by variables, domains and ____.",
    "options": [
      "constraints",
      "constraint"
    ],
    "answer": 0,
    "explain": "Constraints restrict which combinations of variable assignments are allowed.",
    "hint": "Recall the standard terminology used to describe this AI concept."
  },
  {
    "id": 42,
    "topic": "CSP",
    "difficulty": "Easy",
    "type": "scenario",
    "q": "In exam scheduling, students sharing two exams cannot sit them at the same time. This is a…",
    "options": [
      "constraint requiring different time slots",
      "requirement that every exam use one room",
      "rule that all exams occur simultaneously",
      "search heuristic"
    ],
    "answer": 0,
    "explain": "The constraint prevents overlapping slots for exams sharing students.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 43,
    "topic": "CSP",
    "difficulty": "Medium",
    "type": "mcq",
    "q": "In a CSP, the domain of a variable is…",
    "options": [
      "the set of values it may take",
      "the list of all constraints",
      "the solver's final score",
      "the explored nodes only"
    ],
    "answer": 0,
    "explain": "A domain lists candidate values for a variable.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 44,
    "topic": "CSP",
    "difficulty": "Medium",
    "type": "scenario",
    "q": "You colour a map so neighbouring regions have different colours. Each region is best modelled as…",
    "options": [
      "a variable with colours as its domain",
      "a heuristic value only",
      "a goal test",
      "an actuator"
    ],
    "answer": 0,
    "explain": "Regions are variables, colours are domains and adjacency rules are constraints.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 45,
    "topic": "CSP",
    "difficulty": "Hard",
    "type": "assertion_reason",
    "q": "Assertion (A): Backtracking can help a CSP solver recover from a conflicting partial assignment. Reason (R): Backtracking retracts an earlier choice and tries an alternative value.",
    "options": [
      "A and R are true, and R correctly explains A",
      "A and R are true, but R does not explain A",
      "A is true, but R is false",
      "A is false, but R is true"
    ],
    "answer": 0,
    "explain": "The reason describes the mechanism that allows a CSP solver to recover from a failed partial assignment.",
    "hint": "Judge the truth of the assertion and reason separately, then decide whether the reason explains the assertion."
  },
  {
    "id": 46,
    "topic": "Means-End Analysis",
    "difficulty": "Medium",
    "type": "mcq",
    "q": "Means–End Analysis works by…",
    "options": [
      "comparing current and goal states and reducing differences",
      "randomly choosing actions",
      "expanding every depth level",
      "assigning colours only"
    ],
    "answer": 0,
    "explain": "It selects operators that reduce differences between current and goal states.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 47,
    "topic": "Means-End Analysis",
    "difficulty": "Medium",
    "type": "scenario",
    "q": "A student needs to submit a report but has not collected the data. A sensible means–end step is to…",
    "options": [
      "identify the gap and obtain the missing data",
      "submit without data",
      "restart the computer repeatedly",
      "ignore the goal"
    ],
    "answer": 0,
    "explain": "Collecting the missing data reduces a difference between current and goal states.",
    "hint": "Identify the key concept in the question, then eliminate options that do not match it."
  },
  {
    "id": 48,
    "topic": "Search Methods",
    "difficulty": "Medium",
    "type": "matching",
    "q": "Match each CSP component to its meaning.",
    "options": [
      "Variable → item to assign; domain → possible values; constraint → rule limiting combinations",
      "Variable → heuristic; domain → goal state; constraint → path cost only",
      "Variable → action; domain → sensor; constraint → performance measure",
      "Variable → visited set; domain → frontier; constraint → queue order"
    ],
    "answer": 0,
    "explain": "CSPs use variables, candidate-value domains and constraints that restrict combinations.",
    "hint": "Match each term to its role first, then compare the complete set of pairings."
  },
  {
    "id": 49,
    "topic": "State Space Search",
    "difficulty": "Hard",
    "type": "problem",
    "q": "A tree has S with children A and B. A has children C and D; B has child E. Children are explored left to right. What is BFS order?",
    "options": [
      "S, A, B, C, D, E",
      "S, A, C, D, B, E",
      "S, B, E, A, D, C",
      "S, C, A, B, D, E"
    ],
    "answer": 0,
    "explain": "BFS visits one level at a time: S; then A and B; then C, D and E.",
    "hint": "Work through the states level by level for BFS/shortest-path tasks, or apply the stated evaluation rule for A*."
  },
  {
    "id": 50,
    "topic": "State Space Search",
    "difficulty": "Hard",
    "type": "problem",
    "q": "A* reaches a node with g(n)=7 and h(n)=4. Calculate f(n).",
    "options": [
      "11",
      "3",
      "28",
      "7"
    ],
    "answer": 0,
    "explain": "A* computes f(n)=g(n)+h(n)=7+4=11.",
    "hint": "Work through the states level by level for BFS/shortest-path tasks, or apply the stated evaluation rule for A*."
  }
];
