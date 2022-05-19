# if divisible by 3
#     print("Hip")
# if divisible by 7
#     print("Hooray")

number = 1
for number in range(1, 41):
    if number % 3:
        print(number, ": Hip")
    elif number % 7:
        print(number, ": Hooray")


