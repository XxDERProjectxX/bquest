var objectiveData = [
// chopping block
{"name": "Draft West and East Wing Halls", "difficulty": 2},

// ungrouped easy
{"name": "Toss a Coin in the Fountain", "difficulty": 1},
{"name": "Spend 30 Seconds in the Lavatory", "difficulty": 1},
{"name": "Watch an Entire Alzara Cutscene", "difficulty": 1},
{"name": "Draft a Donut", "difficulty": 1},
{"name": "Dig Up Nothing", "difficulty": 1},
{"name": "Read The Red Prince", "difficulty": 1},
{"name": "Draft Both Exits from Dark Room", "difficulty": 1},
{"name": "End with a Live Animal", "difficulty": 1},
{"name": "End in Planetarium", "difficulty": 1},

// ungrouped medium
{"name": "Spend 3 Gems Drafting a Room", "difficulty": 2},
{"name": "Open 2 Trunks in a Day", "difficulty": 2},
{"name": "Open the Car Trunk", "difficulty": 2},
{"name": "Retrieve Key After Checking Overnight", "difficulty": 2},
{"name": "Trade a Microchip at a Trading Post", "difficulty": 2},
{"name": "Permanently Increase a Room's Rarity", "difficulty": 2},
{"name": "Have 10+ Gems", "difficulty": 2},
{"name": "Have 6+ Keys, Gems and Coins Each", "difficulty": 2},
{"name": "Re-roll a Draft 4+ Times", "difficulty": 2},
{"name": "Light 4 Blue Flames", "difficulty": 2},
{"name": "Use an Elevator", "difficulty": 2},
{"name": "Buy Out the Kitchen", "difficulty": 2},
{"name": "Open a Delivered Package", "difficulty": 2},
{"name": "Reach Rank 9", "difficulty": 2},
{"name": "Shelter the Lavatory", "difficulty": 2},
{"name": "Eat in Pantry, Kitchen, and Dining Rooms in a Day", "difficulty": 2},
{"name": "Eat Salted Food", "difficulty": 2},
{"name": "Draft 8 Blue Rooms in a Row", "difficulty": 2},
{"name": "Draft 2+ Copies of Room in a Day", "difficulty": 2},
{"name": "Dig 10 Times in a Day", "difficulty": 2},

// ungrouped hard
{"name": "Collect Items Spread to Conference Room", "difficulty": 3},
{"name": "Open 3 Lockers in a Day", "difficulty": 3},
{"name": "Read a Library Book Aloud", "difficulty": 3},
{"name": "Buy a Special Key", "difficulty": 3},
{"name": "End a Day with 90+ Steps Left", "difficulty": 3},
{"name": "Open Tomb Door to Reservoir", "difficulty": 3},
{"name": "Have 10+ Keys", "difficulty": 3},
{"name": "Have 4+ Dice", "difficulty": 3},
{"name": "Have 30+ Coins", "difficulty": 3},
{"name": "Draft an Architect's House", "difficulty": 3},
{"name": "Open All Doors in Great Hall", "difficulty": 3},
{"name": "Retrieve a Coin from Draining Water", "difficulty": 3},
{"name": "Gain >20 Steps in Dining Room", "difficulty": 3},
{"name": "Draft the Cloister for Free", "difficulty": 3},
{"name": "View Stamp(s) in the Library", "difficulty": 3},
{"name": "Buy Out the Commissary", "difficulty": 3},
{"name": "Collect a Flower Gem", "difficulty": 3},
{"name": "Draft Locker, Sauna, Pump Rooms in a Day", "difficulty": 3},
{"name": "Cash a Payroll Check", "difficulty": 3},
{"name": "Access Controls on the Back of a Room", "difficulty": 3},
{"name": "Make a Contraption", "difficulty": 3},

// ungrouped very hard
{"name": "Draft All 8 Outer Rooms", "difficulty": 4},
{"name": "Add Mechanarium", "difficulty": 4},
{"name": "Enter the Antechamber", "difficulty": 4},
{"name": "Gain a Chess Power", "difficulty": 4},

//grouped squares (only one of each group can appear)
{"name": "End a Day with 100+ Steps Taken", "difficulty": 2, "group": "steps"},
{"name": "End a Day with 120+ Steps Taken", "difficulty": 3, "group": "steps"},
{"name": "End a Day with 140+ Steps Taken", "difficulty": 3, "group": "steps"},

{"name": "3+ Allowance", "difficulty": 2, "group": "allowance"},
{"name": "4+ Allowance", "difficulty": 2, "group": "allowance"},
{"name": "5+ Allowance", "difficulty": 3, "group": "allowance"},
{"name": "6+ Allowance", "difficulty": 3, "group": "allowance"},
{"name": "7+ Allowance", "difficulty": 4, "group": "allowance"},

{"name": "5+ Stars", "difficulty": 2, "group": "stars"},
{"name": "8+ Stars", "difficulty": 3, "group": "stars"},
{"name": "11+ Stars", "difficulty": 3, "group": "stars"},
{"name": "15+ Stars", "difficulty": 4, "group": "stars"},

{"name": "Open Empty Parlor Box", "difficulty": 1, "group": "parlor"},
{"name": "Open 2 Empty Parlor Boxes", "difficulty": 1, "group": "parlor"},
{"name": "Solve 2 Parlors", "difficulty": 1, "group": "parlor"},
{"name": "Solve 3 Parlors", "difficulty": 2, "group": "parlor"},
{"name": "Solve 4 Parlors", "difficulty": 2, "group": "parlor"},
{"name": "Solve 5 Parlors", "difficulty": 2, "group": "parlor"},

{"name": "Solve Darts with No Mistakes", "difficulty": 1, "group": "billiard"},
{"name": "Solve 2 Darts", "difficulty": 1, "group": "billiard"},
{"name": "Solve 3 Darts", "difficulty": 2, "group": "billiard"},
{"name": "Solve 4 Darts", "difficulty": 2, "group": "billiard"},

{"name": "Trigger Experiment", "difficulty": 2, "group": "experiment"},
{"name": "Trigger Experiment 2+ Times", "difficulty": 3, "group": "experiment"},
{"name": "Trigger Experiment 3+ Times", "difficulty": 3, "group": "experiment"},
{"name": "Trigger Experiment 4+ Times", "difficulty": 3, "group": "experiment"},

{"name": "7+ Inventory Items", "difficulty": 2, "group": "inventory"},
{"name": "8+ Inventory Items", "difficulty": 2, "group": "inventory"},
{"name": "9+ Inventory Items", "difficulty": 2, "group": "inventory"},
{"name": "10+ Inventory Items", "difficulty": 3, "group": "inventory"},
{"name": "11+ Inventory Items", "difficulty": 3, "group": "inventory"},
{"name": "12+ Inventory Items", "difficulty": 3, "group": "inventory"},

{"name": "Use 1 Upgrade Disk", "difficulty": 1, "group": "disks"},
{"name": "Use 2 Upgrade Disks", "difficulty": 2, "group": "disks"},
{"name": "Use 3 Upgrade Disks", "difficulty": 3, "group": "disks"},
{"name": "Use 4 Upgrade Disks", "difficulty": 4, "group": "disks"},

{"name": "2 Safe Gems in a Day", "difficulty": 2, "group": "safes"},
{"name": "3 Safe Gems in a Day", "difficulty": 3, "group": "safes"},
{"name": "4 Safe Gems in a Day", "difficulty": 3, "group": "safes"},
{"name": "Get Gem from the Shelter Safe", "difficulty": 2, "group": "safes"},

{"name": "Open 2 Security Doors in a Day", "difficulty": 1, "group": "security"},
{"name": "Open 3 Security Doors in a Day", "difficulty": 2, "group": "security"},
{"name": "Open 4 Security Doors in a Day", "difficulty": 2, "group": "security"},
{"name": "Open 5 Security Doors in a Day", "difficulty": 3, "group": "security"},

{"name": "Draft 3 Archived Floorplans in a Day", "difficulty": 2, "group": "archived"},
{"name": "Draft 4 Archived Floorplans in a Day", "difficulty": 2, "group": "archived"},
{"name": "Draft 5 Archived Floorplans in a Day", "difficulty": 3, "group": "archived"},
{"name": "Draft 6 Archived Floorplans in a Day", "difficulty": 3, "group": "archived"},

{"name": "End with 6+ Dead Ends", "difficulty": 2, "group": "dead_ends"},
{"name": "End with 7+ Dead Ends", "difficulty": 2, "group": "dead_ends"},
{"name": "End with 8+ Dead Ends", "difficulty": 2, "group": "dead_ends"},
{"name": "End with 9+ Dead Ends", "difficulty": 3, "group": "dead_ends"},
{"name": "End with 10+ Dead Ends", "difficulty": 3, "group": "dead_ends"},

{"name": "Draft 6 Red Rooms in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 7 Bedrooms in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 6 Green Rooms in a Day", "difficulty": 3, "group": "rooms"},
{"name": "Draft 6 Hallways in a Day", "difficulty": 3, "group": "rooms"},

{"name": "End in Rank 1 Pancake House", "difficulty": 1, "group": "pancake"},
{"name": "End in Rank 2 Pancake House", "difficulty": 2, "group": "pancake"},
{"name": "End in Rank 3 Pancake House", "difficulty": 2, "group": "pancake"},
{"name": "End in Rank 4 Pancake House", "difficulty": 3, "group": "pancake"},
{"name": "End in Rank 5 Pancake House", "difficulty": 3, "group": "pancake"},

{"name": "Full Directory of Red Rooms", "difficulty": 3, "group": "full_dir"},
{"name": "Full Directory of Hallways", "difficulty": 3, "group": "full_dir"},

{"name": "Full Directory of 1 Category", "difficulty": 2, "group": "any_full_dir"},
{"name": "Full Directory of 2 Categories", "difficulty": 4, "group": "any_full_dir"},

{"name": "Add 2 New Floorplans", "difficulty": 2, "group": "new_plan"},
{"name": "Add 3 New Floorplans", "difficulty": 3, "group": "new_plan"},
{"name": "Add 4 New Floorplans", "difficulty": 4, "group": "new_plan"},

{"name": "Attend Grade 1", "difficulty": 2, "group": "classroom"},
{"name": "Attend Grade 2", "difficulty": 2, "group": "classroom"},
{"name": "Attend Grade 3", "difficulty": 3, "group": "classroom"},
{"name": "Attend Grade 4", "difficulty": 3, "group": "classroom"},
{"name": "Attend Grade 5", "difficulty": 3, "group": "classroom"},
{"name": "Attend Grade 6", "difficulty": 4, "group": "classroom"},

{"name": "Become Cursed", "difficulty": 2, "group": "shrine"},
{"name": "Rotate a Room", "difficulty": 2, "group": "shrine"},

{"name": "Non-Outer Room Outside", "difficulty": 3, "group": "shrine_outer"},
{"name": "Pick 3 Berries", "difficulty": 3, "group": "shrine_outer"},

{"name": "Pull 1 Antechamber Lever", "difficulty": 2, "group": "levers"},
{"name": "Pull 2 Unique Levers", "difficulty": 3, "group": "levers"},
{"name": "Pull 3 Unique Levers", "difficulty": 4, "group": "levers"}
];
