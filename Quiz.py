# Define questions
questions = [
    {
        "question": "Which activity do you enjoy the most?",
        "options": {
            "1": ("Programming", "technical"),
            "2": ("Designing graphics", "creative"),
            "3": ("Managing a team", "management"),
            "4": ("Analyzing data", "analytical")
        }
    },
    {
        "question": "What do you usually do in your free time?",
        "options": {
            "1": ("Build technical projects", "technical"),
            "2": ("Draw or design", "creative"),
            "3": ("Plan and organize tasks", "management"),
            "4": ("Solve puzzles", "analytical")
        }
    },
    {
        "question": "Which career sounds most appealing to you?",
        "options": {
            "1": ("Software Developer", "technical"),
            "2": ("Designer", "creative"),
            "3": ("Project Manager", "management"),
            "4": ("Data Analyst", "analytical")
        }
    }
]

# Initialize scores
scores = {
    "technical": 0,
    "creative": 0,
    "management": 0,
    "analytical": 0
}

# Run quiz
for q in questions:
    print("\n" + q["question"])
    for key, (text, _) in q["options"].items():
        print(f"{key}. {text}")
    
    answer = input("Your choice: ")
    
    if answer in q["options"]:
        skill_type = q["options"][answer][1]
        scores[skill_type] += 1
    else:
        print("Invalid option!")

# Determine result
result = max(scores, key=scores.get)

# Show result
print("\n--- Your Result ---")

if result == "technical":
    print("You have strong technical skills! 💻")
    print("Suggested careers: Software Developer, Engineer")
elif result == "creative":
    print("You are a creative person! 🎨")
    print("Suggested careers: Graphic Designer, UI/UX Designer")
elif result == "management":
    print("You have strong leadership skills! 📊")
    print("Suggested careers: Project Manager, Business Manager")
elif result == "analytical":
    print("You have a strong analytical mind! 📈")
    print("Suggested careers: Data Analyst, Researcher")