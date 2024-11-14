import os

# Define the path to the directory where your problems are stored
problems_path = "./"  # Adjust this path if needed

# Count the number of problem folders
problem_count = sum([1 for item in os.listdir(problems_path) if os.path.isdir(os.path.join(problems_path, item))])

# Write the count to a README file
with open("README.md", "w") as readme_file:
    readme_file.write(f"# Problem Solving Progress\n\n")
    readme_file.write(f"I have solved {problem_count - 2} problems.\n")
