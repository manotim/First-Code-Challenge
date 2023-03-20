# Code_challenge


inputGrade-variable for the input Garde

inputSpeed-variable for the input Speed

inputSalary-Variable for the Input Salary


your Code should come after
// write Code For the Code challenge

assign your output to the finalOutput variable


# YOUR README DESCRIPTION STARTS HERE

# Challenge 1
# TITLE: 
STUDENT GRADE GENERATOR
This project is about a simple grade generator that takes input values for marks between 0 to 100 and return the relevant Grade.

# DESCRIPTTION:
 Given a certain value, which should be an interger, the application should output a certain grade. This grade is pointing to whether the student really passed or failed in their test. However, if someone enters a value that is outside the range between 0 - 100, the system should notify the user that the value input is not in range.

I used an if...else control structure to decide student grades. This is a good choice since it manages few conditions really well. A student can be easily given their grade once the marks range is explicitly defined.

While developing the grading system, I encountered a challenge when I tried to use Switch control flow. I wanted to use the option because it has simpler syntax. 
In future, I would use string interpolation to make more meaningful messages to the student other than just displaying the grade

# PROJECT SET-UP
To set-up this project, you will need to have the following installed in your computer:

    1. A browser with a supported version of inbuilt console
    2. A code text editor, like VS Code or Atom
To run the project, you need to;
    1. Fork the project to your local directory
    2. Run the code from your browser
    3. A tenplate should appear
    4. Use the first container to input your marks and press Get Grade
    5. Your grade should appear under Output



# Challenge 2
# TITLE:
SPEED DETECTOR
This project allows an input of speed and gives three kinds of messages depending on what is the value of the speed given

# DESCRIPTION
Given the speed value, if the speed is less than 70, the system should output a message of "Ok", output a message that has some demerit points if the speed is not more 130 upon some calculations done, or say "Licence revoked" if the points according to speed given exceed 12.

I used a control structure of if...else since there are no too many conditions to be compared. I also used the Math.floor function to convert any speed above 70 to 1 point in every speed of 5km/hr.

When developing the system, the main challenge I got is to calculate the demerit points. I had to manually find the function for calculating 1 point for every 5 km/h covered. Another challenge is to put the logic in place for comparing two scenarios in the same if...else control flow.

In the coming days, I would add a feature that sense s the drivers speed automatically, instead of having to input the speed manually.

# PROJECT SET-UP
To set-up this project, you will need to have the following installed in your computer:

    1. A browser with a supported version of inbuilt console
    2. A code text editor, like VS Code or Atom
To run the project, you need to;
    1. Fork the project to your local directory
    2. Run the code from your browser
    3. A tenplate should appear
    4. Use the second container to input your speed and press Points
    5. Your points or message should appear under Output


# Challenge 3
# TITLE
NET SALARY CALCULATOR
The project takes an input of gross pay and returns an output of the net pay according to the tax system implemented in the code.

# DESCRIPTION
If you input a valu for your gross salary, the system will calculate the tax deductions using all the tax deduction brackets, all other deductions excluding reliefs and return the net pay.

The project utilizes the if...else control flow to calcutalte the relavatn tax deductions, and nhif for the employee. It also has a net salary calculator that picks all the relevant values and substracts them from the gross pay.


I faced a challenge of calcutating tax of the next tax grabs, excluding the first 24000. I also got a challenge to implement the Tier I and Tier II formulas for calcutating the nssf ratings. 
In the coming days, A feature for grabing dynamically the right payee, nssf and nhif will be added. Also, reliefs control flow will be included to avoid using it  as a constant.

# PROJECT SET-UP
To set-up this project, you will need to have the following installed in your computer:

    1. A browser with a supported version of inbuilt console
    2. A code text editor, like VS Code or Atom
To run the project, you need to;
    1. Fork the project to your local directory
    2. Run the code from your browser
    3. A tenplate should appear
    4. Use the third container to input your speed and press Calculate Net Salary
    5. Your Net Salary should appear under Output


# First-Code-Challenge
