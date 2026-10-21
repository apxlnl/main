num1 = float(input("Введіть перше число: "))
num2 = float(input("Введіть друге число: "))
num3 = float(input("Введіть третє число: "))
num4 = float(input("Введіть четверте число: "))

sum1 = num1 + num2
sum2 = num3 + num4

if sum2 != 0:
    result = sum1 / sum2
    print(f"Результат: {result:.2f}")
else:
    print("Помилка: ділення на нуль!")
