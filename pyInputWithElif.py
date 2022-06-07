'''
Create input fn that uses if/elif/else
'''
answer = input("Want to hear a joke? (press y/n ")

if answer == "y":
    print("I'm against picketing, but don't know how to show.")
elif answer == "n":
    print("No worries - another time!")
else:
    print("I don't understand. Is this thing working?")