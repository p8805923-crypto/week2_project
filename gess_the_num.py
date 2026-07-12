from random import randint
secert = randint(1, 20)
attemp = 0
max_attemp = 5

print("the num is from 1 to 20")


while attemp < max_attemp:
    guess = int(input("what's your guess:"))
    if 1 <= guess <= 20:
        attemp += 1
        if guess < secert:
            print("it's bigger")
        elif guess > secert:
            print("it's smaller")
        else:
            print("the correct numberrrr!!!")
            break
    else:
        print("please enter a number between 1 and 20")
else:
    print(f"you lose the num was {secert}")

    