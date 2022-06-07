'''
Create If/Elif/Else Blocks
'''
a = 6
b = 13

if (b < 0):
    print("Negative Number")
    print(b)
elif b > 0:
    if a > 3:
        print("Positive Number")
        print("Number Greater Than 3")
elif b == 0:
    print("None, Number is Zero")
else:
    print("This Code is Broken!")
